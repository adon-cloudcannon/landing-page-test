const crypto = require('crypto');

module.exports = {
	excerpt: function(post) {
		const content = post.replace(/(<([^>]+)>)/gi, "");
		return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
	},

	uuid: function(name) {
		return name + "-" + crypto.randomUUID();
	}
};
