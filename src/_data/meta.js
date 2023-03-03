module.exports = function() {
  return {
		env: process.env.ELEVENTY_ENV || "development",
		google_analytics_key: "UA-37472773-1"
	};
};