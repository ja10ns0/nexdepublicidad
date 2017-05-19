/**
 * 
 */
var app = app || {};

app.FooterView = Backbone.View.extend({

    className : 'container',
    controller: null,

    template : _.template($('#footer-template').html()),

    initialize : function(options) {
	this.render();
    },

    render : function() {
	this.$el.html(this.template());
    }

});