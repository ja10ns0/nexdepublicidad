/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NavbarView = Backbone.View.extend({

    el: 'nav',

    className: 'container',

    template: Nexapp.getTemplate('navbarView'),

    events: {
        'click li': 'collapse',
        'click a.lang': 'changeLanguage',
        'show.bs.collapse': 'fadeOutLogo',
        'hide.bs.collapse': 'fadeInLogo',

    },

    fadeOutLogo: function () {
        this.$el.parent().find('section .home-section .logo').fadeOut();
    },

    fadeInLogo: function () {
        this.$el.parent().find('section .home-section .logo').fadeIn();
    },

    initialize: function (options) {
        this.controller = options.controller;
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    },

    collapse: function (event) {
        this.$el.find('#navbar').collapse('hide');
    },

    changeLanguage: function (event) {
        event.preventDefault();
        var section = Backbone.history.getFragment() || 'Home';
        var language = event.target.dataset.language;
        Nexapp.EventBus.trigger('nexapp:changeLanguage', section, language);
    }

});