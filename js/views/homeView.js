/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.HomeView = Backbone.View.extend({

    controller: null,
    id: 'home-section',
    
    template : Nexapp.getTemplate('homeView'),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});