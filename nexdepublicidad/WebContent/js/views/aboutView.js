/**
 * 
 */
var app = app || {};

app.AboutView = Backbone.View.extend({

    controller: null,
    
    template : _.template($('#about-template').html()),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});