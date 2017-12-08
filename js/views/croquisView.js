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

		var self = this;

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
		this.timer = setInterval(function () {
			initValue = self.initialized ? 0 : 1;
			var t0 = performance.now();
			for (var i = initValue; i < images.length; i++) {
				self.initialized = true;
				fade(images[i]);
			}
			var t1 = performance.now();
			console.log('tiempo: ' + (t1 - t0));
		}, 2000, self);
	},

	remove: function () {
		Backbone.View.prototype.remove.call(this);
		clearInterval(this.timer);
	}
});