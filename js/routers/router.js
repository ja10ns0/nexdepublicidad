/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.Router = Backbone.Router.extend({
    
    currentSection: null,
    
    routes: {
	':section' : 'loadSection',
	'*path'	   : 'init'
    },
    
    initialize: function(options) {
	// navigation bar
	this.navbarView = new Nexapp.NavbarView({controller:this});
	// footer
	this.footerView = new Nexapp.FooterView({controller:this});
	// events subscription
	this.listenTo(Nexapp.EventBus,'nexapp:changeLanguage',this.loadSection)
    },
  
    loadSection: function(section, language){
	Nexapp.language = language || Nexapp.language;
	// remove current section
	if(this.currentSection){
	    this.currentSection.remove();
	};
	// setting current section
	this.currentSection = new Nexapp[section + 'View']({controller:this});
	// rendering current section
	$('section').html(this.currentSection.el);
	// callback
	this._loadSectionCallback(this.currentSection);
	// fix layout
	this._applyStyles(section);
    },
    
    init: function() {
	this.loadSection('Home');
    },
    
    _applyStyles: function(section) {
	var selectors = $('nav,#navbar,footer');
	(section == 'Home') ? selectors.addClass('transparent') : selectors.removeClass('transparent');
    },
    
    _loadSectionCallback : function(section) {
	return section.renderCallback ? section.renderCallback() : false ;
    }
    
});

