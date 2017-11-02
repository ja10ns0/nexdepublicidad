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
        'click li': 'changeGrid',
        'click .row:not(.subheader) div[class^=col-]': 'openModal'
    },

    initialize: function (options) {
        this.controller = options.controler;
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    },

    changeGrid: function (e) {
        // current type
        var currentType = this.$el.find('.current');
        // hide current type
        $('.row.' + currentType.data('tipo')).hide();
        // toogle current type class
        currentType.toggleClass('current');
        $(e.currentTarget).toggleClass('current');
        // show clicked type 
        $('.row.' + $(e.target).data('tipo')).show();
    },

    openModal: function (e) {
        $('#myModal').modal();
    }

});  