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

		var img1 = 'assets/img/189.jpg';
		var img2 = 'assets/img/190.jpg';
		var img3 = 'assets/img/191.jpg';
		var img4 = 'assets/img/192.jpg';

		var images = [img1, img2, img3, img4];

		var fade = function (img) {
			$("#fadein img")
			.fadeOut(2000, function () { $("#fadein img").attr('src', img); })
			.fadeIn(2000);
		}
		setInterval(function () {
			for (var i = 0; i < images.length; i++) { 
				fade(images[i]); 
			}
		}, 4000);


	}

});