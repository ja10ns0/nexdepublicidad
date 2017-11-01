/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NextoriaView = Backbone.View.extend({
    
    className: 'section',
    
    controller: null,
    
    template : Nexapp.getTemplate('nextoriaView'),

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});  