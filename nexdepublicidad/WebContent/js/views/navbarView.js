/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NavbarView = Backbone.View.extend({

    className : 'container',

    template : Nexapp.getTemplate('navbarView'),

    events : {
	'click li' : 'prueba'
    },
    
    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    },
    
    prueba : function(event) {
	console.log('event test');
    }

});