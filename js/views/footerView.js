/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.FooterView = Backbone.View.extend({
    
    el : 'footer',
    
    template : Nexapp.getTemplate('footerView'),

    initialize : function(options) {
	    this.controller = options.controller;
	    this.render();
    },

    render : function() {
	    this.$el.html(this.template());
    }

});