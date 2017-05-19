/**
 * 
 */
var app = app || {};

app.AppView = Backbone.View.extend({

    el : 'body',
    
    controller: null,
    
    events: {

    },

    initialize : function(options) {
	this.controller = options.controller;
	this.navbarView = this.controller.navbarView;
	this.homeView = this.controller.homeView;
	this.footerView = this.controller.footerView;
	this.render();
    },

    render : function() {
	$('nav').html(this.navbarView.el);
	$('section').html(this.homeView.el);
	$('footer').html(this.footerView.el);
    },
    
    clickEvent: function(event){

    }

});