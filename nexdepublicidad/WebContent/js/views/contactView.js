/**
 * 
 */
var app = app || {};

app.ContactView = Backbone.View.extend({

    controller: null,
    
    template : _.template($('#contact-template').html()),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});