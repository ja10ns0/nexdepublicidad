/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.ContactView = Backbone.View.extend({

    controller : null,
    id: 'contact-section',
    renderCallback : null,

    template : Nexapp.getTemplate('contactView'),

    initialize : function(options) {
	this.controller = options.controller;
	this.renderCallback = this._afterRender;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    },

    _afterRender : function() {
	console.log('after render');
	var a = window.innerHeight
        	- this.controller.navbarView.$el.innerHeight()
		- this.controller.footerView.$el.innerHeight()
		- this.$el.find('.header').innerHeight();
	this.$el.find('div#map').css({
	    height : a,
	    width : '100%'
	})
    }

});