/**
 * 
 */
var app = app || {};

app.HomeView = Backbone.View.extend({

    controller: null,
    
    template : _.template($('#home-template').html()),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});