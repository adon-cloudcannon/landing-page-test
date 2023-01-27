const StyleRenderer = require('../../src/config/style_renderer.js')

module.exports = function (Liquid) {
	this.registerFilter('render_padding', StyleRenderer.render_padding);
}