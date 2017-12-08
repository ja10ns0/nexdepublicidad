/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NexView = Backbone.View.extend({

    controller: null,
    id: 'nex-section',

    template: Nexapp.getTemplate('nexView'),

    events : {
        'mouseover .team-member img':'showMail',
        'mouseleave .team-member':'hideMail'
    },

    initialize: function (options) {
        this.controller = options.controler;
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    },

    showMail: function(e) {
        $(e.target).addClass('opacity');
        $(_.last($(e.target).siblings())).removeClass('hidden');
    },
    
    hideMail: function(e) {
        $(e.target).find('img').removeClass('opacity');
        $(_.last($(e.target).children())).addClass('hidden');
    }
});