/**
 * 
 */
var app = app || {};

app.Router = Backbone.Router.extend({
    
    currentSectionView: null,
    
    routes: {
	'section/:section' : 'loadSection',
    },
    
    initialize: function(options) {
	this.navbarView = new app.NavbarView({controller:this});
	this.aboutView = new app.AboutView({controller:this});
	this.contactView = new app.ContactView({controller:this});
	this.homeView = new app.HomeView({controller:this});
	this.footerView = new app.FooterView({controller:this});
	this.appView = new app.AppView({controller:this});
	
	this.currentSectionView = this.homeView;
    },
  
    loadSection: function(section){
	this.currentSectionView.remove();
	this.currentSectionView = this[section+'View'];
	$('section').html(this[section+'View'].el);
    }
    
});

