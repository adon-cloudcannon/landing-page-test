import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus'


Alpine.plugin(focus);
Alpine.plugin(intersect);
Alpine.plugin(collapse);

window.Alpine = Alpine;

Alpine.start();

// Prefetch links
const anchorTagElements = document.getElementsByTagName('a');
let urls = [];

[ ...anchorTagElements ].forEach(anchor => {
	anchor.addEventListener('mouseover', event => {
		const href = event.target.href;

		if (href !== undefined && !urls.includes(href)) {
			urls.push(href);
			const link = document.createElement('link');
			link.rel = 'prefetch';
			link.href = href;
			document.head.appendChild(link);
		}
	});
});