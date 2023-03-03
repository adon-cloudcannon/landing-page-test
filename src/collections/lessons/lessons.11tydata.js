module.exports = {
	tags: ["lessons"],
	layout: "lesson.html",
	lead_score: 1,
	permalink: data => {
		let base = "/tutorials/" + data.tutorial + "/";
		if (data.order != 1 && data.order != '1') {
			base += data.page.fileSlug + "/";
		}
		return base;
	}
}