/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NextoriaView = Backbone.View.extend({
    
    controller: null,
    id: 'nextoria-section',
    renderCallback : null,
    
    template : Nexapp.getTemplate('nextoriaView'),
    
    events : {
	'click li': 'changeGrid'
    },

    initialize : function(options) {
	this.controller = options.controler;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    },
    
    changeGrid: function(e) {
	var tipo = $(e.target).data('tipo');
	$('.current')
		.fadeOut()
		.toggleClass('current');
	$('.'+tipo)
        	.fadeIn()
		.toggleClass('current');
    }

});  