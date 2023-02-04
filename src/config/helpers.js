// const crypto = require('crypto');


module.exports = {
	excerpt: function(post) {
		const content = post.replace(/(<([^>]+)>)/gi, "");
		return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
	},

	uuid: function(name) {
		for (var s=''; s.length < 20; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random()*62|0));
		return name + "-" + s;
	},

	download_github_readme: async function(repo, branch, readme) {

		let EleventyFetch = require("@11ty/eleventy-fetch"); // here to keep bookshop happy
		let githubFileOrigin = repo.replace(/https\:\/\/github\.com\//, 'https://raw.githubusercontent.com/'),
		readmeUrl = `${githubFileOrigin}/${branch}/${readme}`;
		console.log(`Downloading ${readmeUrl}...`);

		return EleventyFetch(readmeUrl, {
			duration: "1d",
			type: "text"
		});
	}
};
