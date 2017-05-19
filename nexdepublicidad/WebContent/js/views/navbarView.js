/**
 * 
 */
var app = app || {};

app.NavbarView = Backbone.View.extend({

    className : 'container',

    template : _.template($('#navbar-template').html()),

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