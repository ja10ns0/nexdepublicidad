/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NextoriaView = Backbone.View.extend({

    controller: null,
    id: 'nextoria-section',
    renderCallback: null,

    template: Nexapp.getTemplate('nextoriaView'),

    events: {
        'click li': 'changeGrid'
    },

    initialize: function (options) {
        this.controller = options.controler;
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    },

    changeGrid: function (e) {
        this.$el.find('.current').toggleClass('current');
        var currentType = this.$el.find('.current').data('tipo');
        $('.'+currentType).hide();
        $(e.currentTarget).toggleClass('current');
        var tipo = $(e.target).data('tipo');
        // // delete current class
        // $('.current')
        //     .toggleClass('current');
        // // add
        // $('.' + tipo)
        //     .fadeIn()
        //     .toggleClass('current');
    }

});  