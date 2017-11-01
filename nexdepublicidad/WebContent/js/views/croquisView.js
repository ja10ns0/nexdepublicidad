/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.CroquisView = Backbone.View.extend({

    controller: null,
    id: 'croquis-section',
    renderCallback : null,
    
    template : Nexapp.getTemplate('croquisView'),

    initialize : function(options) {
	this.controller = options.controler;
//	this.renderCallback = this._afterRender;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    },
    
    _afterRender : function() {
	$('#fadein img:gt(0)').hide();
	setInterval(function(){
	    $('#fadein :first-child').fadeOut(1000)
	         .next('img').fadeIn(1000)
	         .end().appendTo('#fadein');},3800);
	}

});