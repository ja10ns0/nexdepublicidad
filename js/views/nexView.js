/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NexView = Backbone.View.extend({

    controller: null,
    id: 'nex-section',

    template: Nexapp.getTemplate('nexView'),

    events : {
        'mouseover .team-member img':'toggleMail',
        'mouseleave .team-member img':'toggleMail'
    },

    initialize: function (options) {
        this.controller = options.controler;
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    },

    toggleMail: function(e) {
        $(e.target).toggleClass('opacity');
        $(_.last($(e.target).siblings())).toggleClass('hidden');
    }

});