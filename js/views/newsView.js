/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NewsView = Backbone.View.extend({
    
    controller: null,
    id: 'news-section',
    
    template : Nexapp.getTemplate('newsView'),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});