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
	this.renderCallback = this._afterRender;
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    },
    
    _afterRender : function() {
	var img1 = 'assets/img/ctabr2015.png';
	var img2 = 'assets/img/ctabr2016.png';
	var img3 = 'assets/img/ctdic2015.png';
	var img4 = 'assets/img/ctfeb2016.png';

	var images = [img1,img2,img3,img4];
	
	var fade = function(img){
	    $("#fadein img")
	    .fadeOut(2000, function() {$("#fadein img").attr('src',img);})
	    .fadeIn(2000);
	}
	setInterval(function(){ 
	    for(var i=1; i<images.length;i++){fade(images[i]);}
	}, 4100);

	    
    }

});