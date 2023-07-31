const PAGEFIND_FILTERS = { site: 'Blog' };
const PAGEFIND_SORT = { date: 'desc' };
const INITIAL_FILTERS = { framework: [], category: [], location: [] };
const MOBILE_VIEWPORT_WIDTH = 768;
const HIDDEN_CLASS = 'hidden';
const ELEMENT_IDS = ['post-container', 'pagination-container', 'no-results'];

const visibilityState = ELEMENT_IDS.reduce((acc, id) => ({ ...acc, [id]: true }), {});

const setVisibility = (stateUpdates) => {
  Object.assign(visibilityState, stateUpdates);
  Object.entries(visibilityState).forEach(([id, isVisible]) => 
    document.getElementById(id).classList.toggle(HIDDEN_CLASS, !isVisible));
};

const handleResize = (callback) => {
  let timer;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(callback, 250);
  });
};

const fetchResults = async (pagefind) => {
  const allResults = await pagefind.search(null, { filters: PAGEFIND_FILTERS, sort: PAGEFIND_SORT });
  return Promise.all(allResults.results.map(result => result.data()));
};

export default () => {
  return {
    show: false,
    open: false,
    usesPagefind: false,
    loading: false,
    pagefind: "",
    isMobile: window.innerWidth < MOBILE_VIEWPORT_WIDTH,
    filters: { ...INITIAL_FILTERS },
    pagefindResults: [],
    pagefindSearchResults: [],

    init() {
      this.usesPagefind = Boolean(document.getElementById('pagefind-filtering'));
      handleResize(() => this.isMobile = window.innerWidth < MOBILE_VIEWPORT_WIDTH);
    },

    async initialisePagefind() {
      this.loading = true;
      setVisibility({ 'post-container': false, 'pagination-container': false });

      if (!this.pagefind) {
        this.pagefind = await import("/_pagefind/pagefind.js");
      }

      if (!this.usesPagefind) {
        this.loading = false;
        return;
      }

      try {
        this.pagefindSearchResults = await fetchResults(this.pagefind);
      } catch (e) {
        this.error = 'Failed to load search, please refresh';
      } finally {
        this.loading = false;
        setVisibility({ 'post-container': true, 'pagination-container': true });
      }
    },

    toggleCheckboxEvent(event, option, filterType) {
      event.stopPropagation();
      const checkbox = event.target.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        this.updateFilters(option, checkbox.checked, filterType);
      }
    },

    updateFilters(option, isChecked, filterType) {
      const sanitizedOption = option.toLowerCase().replace(/ /g, '-');
      const filterArray = this.filters[filterType];

      if (isChecked) {
        filterArray.push(sanitizedOption);
      } else {
        const index = filterArray.indexOf(sanitizedOption);
        filterArray.splice(index, 1);
      }

      this.updatePostsVisibility();
    },

    removeOptionFromFilter(option) {
      this.filters = this.removeOptionFromAllFilters(option);
      this.updatePostsVisibility();
    },

    removeAllOptionsFromFilter() {
      this.filters = { ...INITIAL_FILTERS };
      this.updatePostsVisibility();
    },

    removeOptionFromAllFilters(option) {
      return Object.keys(this.filters).reduce((acc, key) => {
        acc[key] = this.filters[key].filter(item => item !== option);
        return acc;
      }, {});
    },

    get selectedOptions() {
      return Object.values(this.filters).flat();
    },

    generateFilterButtonLabel(filterType, filterName) {
      const selectedCount = this.filters[filterType]?.length || 0;
      const pluralizeFilterName = filterType === 'category' ? 'categories' : `${filterName}s`;

      if (selectedCount === 0) {
        return `Filter by ${filterName}`;
      }

      if (this.isMobile) {
        return selectedCount === 1
          ? `Filtered by 1 ${filterName}`
          : `Filtered by ${selectedCount} ${pluralizeFilterName}`;
      }

      return `Filter by ${filterName}`;
    },

    updatePostsVisibility() {
      this.usesPagefind ? this.updatePagefindPosts() : this.updateNonPagefindPosts();
    },

    updateNonPagefindPosts() {
      const posts = document.querySelectorAll('#list-item');
      const foundMatch = Array.from(posts).some(post => post.classList.toggle(HIDDEN_CLASS, !this.isPostMatchFilters(post)));

      setVisibility({ 'no-results': !foundMatch, 'post-container': foundMatch });
    },

    isPostMatchFilters(post) {
      return Object.entries(this.filters).every(([filterKey, filterValues]) => {
        const postFilters = post.getAttribute(`data-${filterKey}`).split(' ');
        return filterValues.every(value => postFilters.includes(value));
      });
    },

    async updatePagefindPosts() {
      this.loading = true;

      if (this.isAnyFilterSelected()) {
        this.pagefindResults = this.pagefindSearchResults.filter(result =>
          Object.entries(this.filters).every(([filterKey, filterValues]) =>
            filterValues.every(value => result.filters[filterKey]?.includes(value))
          )
        );
      } else {
        this.pagefindResults = [];
      }

      this.loading = false;
      setVisibility({ 'no-results': this.pagefindResults.length === 0, 'post-container': true, 'pagination-container': true });
    },

    isAnyFilterSelected() {
      return Object.values(this.filters).some(filterArray => filterArray.length > 0);
    },
  }
}
