// const crypto = require('crypto');
const axios = require('axios');

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


		let githubFileOrigin = repo.replace(/https\:\/\/github\.com\//, 'https://raw.githubusercontent.com/'),
		readmeUrl = `${githubFileOrigin}/${branch}/${readme}`;
		console.log(`Downloading ${readmeUrl}...`);

		return await axios.get(readmeUrl)
			.then(function (response) {
				return response.data.replace(/(^!\[.*?\]\()(.+?)(\))/, '').replace(/^# .*$/, '').replace(/^(#* .*)$/, '#\1');
			})
			.catch(function (error) {
				return '';
			});
	}
};
