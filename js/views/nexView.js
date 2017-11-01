/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NexView = Backbone.View.extend({
    
    controller: null,
    id: 'nex-section',
    
    template : Nexapp.getTemplate('nexView'),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});