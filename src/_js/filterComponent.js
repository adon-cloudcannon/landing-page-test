export default () => {
        return {
            show: false,
            open: false,
            usesPagefind: false,
            isMobile: window.innerWidth < 768,
            filters: {
                framework: [],
                category: [],
                location: [],
            },

            get selectedOptions() {
                return Object.values(this.filters).flat();
            },
            init() {
                this.setUsesPagefind();
                window.addEventListener('resize', () => {
                    this.isMobile = window.innerWidth < 768;
                });
    
            },
            setUsesPagefind() {
                // Set usesPagefind to true if an element with id 'page-find' exists, otherwise set it to false.
                this.usesPagefind = document.getElementById('pagefind-filtering') ? true : false;
            },

            debounce(func, wait) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            },

            toggleCheckboxEvent(event, option, filterType) {
                event.stopPropagation();
                const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.checked = !checkbox.checked;
                    this.addOrRemoveFilterOptionAndUpdateRenderedItems(option, checkbox.checked, filterType);
                }
            },

            generateFilterButtonLabelBasedOnSelectionAndDevice(filterType, filterName) {
                // updates the button labels depending on the number of filters selected, and if the user is on mobile
                const selectedCount = this.filters[filterType]?.length || 0;
                const pluralizeFilterName = filterType === 'category' ? 'categories' : `${filterName}s`;
    
                if (!selectedCount) {
                    return `Filter by ${filterName}`;
                }
    
                const filterText = this.isMobile
                    ? `Filtered by ${selectedCount} ${pluralizeFilterName}`
                    : `Filter by ${filterName}`;
    
                if (selectedCount === 1 && this.isMobile) {
                    return `Filtered by 1 ${filterName}`;
                }
    
                return filterText;
            },
            toggleDropdown(index) {
                // opens and closes the dropdown menu
                this.open = this.show !== index || !this.open;
                this.show = this.open ? index : false;
            },
            addOrRemoveFilterOptionAndUpdateRenderedItems(option, isChecked, filterType) {
                const filterArray = this.filters[filterType];
                if (!filterArray) {
                    console.error(`Invalid filter type: ${filterType}`);
                    return;
                }
                option = option.toLowerCase().replace(/ /g, '-');
                if (isChecked && !filterArray.includes(option)) {
                    filterArray.push(option);

                } else if (!isChecked) {
                    const optionIndex = filterArray.indexOf(option);
                    if (optionIndex !== -1) {
                        filterArray.splice(optionIndex, 1);
                    }
                }
                this.updateShownPostsBasedOnPagefindUsage();
            },
            addOrRemoveOptionFromAllFilterTypes(option, isAdd = true) {
                // updates the filters object - adds or removes the option from the filters object
                Object.entries(this.filters).forEach(([filterType, filterArray]) => {
                    const optionIndex = filterArray.indexOf(option);
    
                    if (isAdd && optionIndex === -1) {
                        filterArray.push(option);
                    } else if (!isAdd && optionIndex !== -1) {
                        filterArray.splice(optionIndex, 1);
                    }
                });
            },
            removeOptionFromFilter(option) {
                const selector = `input[type="checkbox"]`;
                Array.from(document.querySelectorAll(selector)).forEach(input => {
                    const inputValue = input.value.toLowerCase().replace(/ /g, '-');
                    const optionValue = option.toLowerCase().replace(/ /g, '-');
                    if (inputValue === optionValue) {
                        input.checked = false;
                    }
                });
                this.addOrRemoveOptionFromAllFilterTypes(option, false);
 
                this.updateShownPostsBasedOnPagefindUsage();
            },
            removeAllOptionsFromFilter() {
                const selector = 'input[type="checkbox"]';
                Array.from(document.querySelectorAll(selector)).forEach(input => {
                    input.checked = false;
                });
                if (this.usesPagefind) {
                    this.toggleElementVisibility("no-results", false);
                }
                this.filters = { framework: [], category: [], location: [] };
                
                this.updateShownPostsBasedOnPagefindUsage();
            },
            updateShownPostsBasedOnPagefindUsage() {
                window.requestAnimationFrame(() => {
                // stores all list items in an array and passes it to the updateShownPostsWithoutPagefind function
                if (this.usesPagefind){
                    this.debounce(this.updateShownPostsWithPagefind(this.filters), 50);
                }else{
                    const templateList = Array.from(document.querySelectorAll('#list-item'));
                     this.updateShownPostsWithoutPagefind(templateList, this.filters);
                }
                });
                
            },

            updateShownPostsWithoutPagefind(templateList, filters) {
                const anyFiltersSelected = this.areAnyFiltersSelected(filters);
                const listWrapper = document.getElementById('list-wrapper');
                const noResults = document.getElementById('no-results');
                let isResultAvailable = false;
        
                // loop through each template and check if it the item in the filter matches the item in the data attribute
                templateList.forEach(template => {
                    const isMatched = !anyFiltersSelected || Object.entries(filters).every(([filterKey, filterValues]) =>
                        filterValues.length === 0 || filterValues.some(value =>
                            template.getAttribute(`data-${filterKey}`).split(' ').includes(value)
                        )
                    );
        
                    if (isMatched) {
                        isResultAvailable = true;
                    }
        
                    template.classList.toggle('hidden', !isMatched);
                });
        
                listWrapper.classList.toggle('hidden', !isResultAvailable);
                noResults.classList.toggle('hidden', isResultAvailable);
            },


            async updateShownPostsWithPagefind(filters) {
                try {
                    const pagefind = await import("/_pagefind/pagefind.js");
                    const areFiltersActive = this.areAnyFiltersSelected(filters);
                    const noResults = document.getElementById('no-results');

        
                    // If no filters are active, show the post container and exit
                    if (!areFiltersActive) {
                        this.clearResultsContainer();
                        this.toggleElementVisibility("post-container", true);
                        this.toggleElementVisibility("pagination-container", true);
                        return;
                    }

                    const searchResults = await pagefind.search(null, { 
                        filters: {
                            framework: {
                                any: filters.framework
                            },
                            category: {
                                any: filters.category
                            },
                        },
                        sort: {
                            date: "desc"
                        }
                    
                    });

                    // if result is empty show no-results
                    this.toggleElementVisibility("no-results", searchResults.results.length === 0);

                    const resultsData = await Promise.all(searchResults.results.map(result => result.data()));

                    // Render the new results
                    this.createAndAppendGridForPosts(resultsData);

                    // Hide the post container while fetching results
                    this.toggleElementVisibility("post-container", false);
                    this.toggleElementVisibility("pagination-container", false);

                } catch (error) {
                    console.error('An error occurred during fetching and displaying the results:', error);
                }
            },

            areAnyFiltersSelected(filters){
                return Object.values(filters).some(filterArray => filterArray.length > 0);
            },
    
            toggleElementVisibility(elementId, isVisible){
                document.getElementById(elementId).classList.toggle("hidden", !isVisible);
            },
        
            clearResultsContainer(){
                const resultsContainer = document.getElementById("results");
                while (resultsContainer.firstChild) {
                    resultsContainer.removeChild(resultsContainer.firstChild);
                }
            },


            createAndAppendGridForPosts(results) {

                const container = document.createElement("div");
                container.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-x-5", "gap-y-12");
            
                // Create a new DocumentFragment
                const fragment = document.createDocumentFragment();
            
                results.forEach(post => {
                    const postContainer = this.createPostContainer(post);
                    if (postContainer) {
                        // Appends postContainer to the fragment instead of the actual container
                        fragment.appendChild(postContainer);
                    }
                });
            
                // Appends the DocumentFragment to the container
                container.appendChild(fragment);
    
                const gridContainer = document.getElementById("results");
            
                // Clear the current grid before appending new one
                while (gridContainer.firstChild) {
                    gridContainer.removeChild(gridContainer.firstChild);
                }
            
                gridContainer.appendChild(container);
            },
            
            createPostContainer(post) {
                const tagsArray = post.meta.blog_tags.split(',');
                

                const postContainer = document.createElement("div");
                
                postContainer.appendChild(this.createImageElement(post));
                postContainer.appendChild(this.createTagsContainer(post));
                postContainer.appendChild(this.createTitleElement(post));
                postContainer.appendChild(this.createAuthorDateElement(post));
    
                return postContainer;
            },
            
            createImageElement(post) {
                const imageLink = document.createElement("a");
                imageLink.href = post.url;
                imageLink.classList.add("group");
    
                const image = document.createElement("img");
                image.src = post.meta.blog_image;
                image.alt = post.meta.image_alt;
                image.classList.add("transition", "rounded-lg", "group-hover:opacity-80", "group-hover:scale-105", "h-[250px]", "object-center", "object-cover", "w-full");
    
                imageLink.appendChild(image);
    
                return imageLink;
            },
            
            createTagsContainer(post) {
                const tagsContainer = document.createElement("div");
                tagsContainer.classList.add("text-gray-400", "mt-2");
        
                const tagsArray = post.meta.blog_tags.split(',');
        
                tagsArray.forEach((tag, index) => {
                    if (tag === "posts") return;
        
                    const tagLink = document.createElement("a");
                    tagLink.href = `/blog/tags/${encodeURIComponent(tag.trim()).toLowerCase()}/`;
                    tagLink.textContent = tag.trim();
                    tagLink.classList.add("text-cc", "uppercase", "hover:text-cc_hover", "hover:underline", "transition");
                    tagsContainer.appendChild(tagLink);
        
                    if (index < tagsArray.length - 1) {
                        const separator = document.createElement("span");
                        separator.classList.add("first:hidden");
                        separator.innerHTML = " &middot; ";
                        tagsContainer.appendChild(separator);
                    }
                });
        
                return tagsContainer;
            },
            
            createTitleElement(post) {
                const title = document.createElement("h3");
                title.classList.add("font-bold", "text-2xl", "md:text-3xl", "mt-1", "text-carbon");
    
                const titleLink = document.createElement("a");
                titleLink.href = post.url;
                titleLink.textContent = post.meta.title;
                titleLink.classList.add("hover:underline");
    
                title.appendChild(titleLink);
    
                return title;
            },
            
            createAuthorDateElement(post) {
                const authorDateContainer = document.createElement("p");
                authorDateContainer.classList.add("mt-3", "text-gray-900");
                authorDateContainer.textContent = `${post.meta.blog_author} · ${new Date(post.meta.blog_date).toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' })}`;
    
                return authorDateContainer;
            },
        };
}
