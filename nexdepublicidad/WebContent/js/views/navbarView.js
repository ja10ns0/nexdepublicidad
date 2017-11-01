/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NavbarView = Backbone.View.extend({
    
    el: 'nav',
    
    className : 'container',

    template : Nexapp.getTemplate('navbarView'),

    events : {
	'click li'     : 'collapse',
	'click a.lang' : 'changeLanguage',
	'shown.bs.collapse' : 'prueba'
    },
    
    prueba: function(){
	$(this.el).find('.navbar-collapse').css('max-height', '$(window).height()');
	$(this.el).find('.navbar-collapse').css('height', $(window).height() - $('footer').outerHeight());
    },
    
    initialize : function(options) {
	this.controller = options.controller;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    },
    
    collapse : function(event) {
	this.$el.find('#navbar').collapse('hide');
    },
    
    changeLanguage: function(event) {
	event.preventDefault();
	var section= Backbone.history.getFragment();
	var language= event.target.dataset.language;
	Nexapp.EventBus.trigger('nexapp:changeLanguage', section, language);
    }

});