/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.CroquisView = Backbone.View.extend({

	controller: null,
	id: 'croquis-section',
	renderCallback: null,

	template: Nexapp.getTemplate('croquisView'),

	initialize: function (options) {
		this.controller = options.controler;
		this.renderCallback = this._afterRender;
		this.render();
	},

	render: function () {
		this.$el.html(this.template());
	},

	_afterRender: function () {
		var slideIndex = 0;
		carousel();

		function carousel() {
			var i;
			var x = document.getElementsByClassName("img-croquis");
			for (i = 0; i < x.length; i++) {
			x[i].style.display = "none"; 	
			}
			slideIndex++;
			if (slideIndex > x.length) {slideIndex = 1} 
			x[slideIndex-1].style.display = "block";
			setTimeout(carousel, 5000); 
		}
	}
});