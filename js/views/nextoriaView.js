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
        $('#' + currentType.data('tipo')).hide();
        // toogle current type class
        currentType.toggleClass('current');
        $(e.currentTarget).toggleClass('current');
        // show clicked type 
        $('#' + $(e.target).data('tipo')).show();
    },

    openModal: function (e) {
        // clicked type
        var cType = e.currentTarget.parentElement.id;
        // clicked magazine
        var cMag = e.target.id;
        // insert content
        $('.modal-title').html();
        var src = NEXTORIA_TYPES[cType][cMag]['src'];
        $('.nextoriaModal_img img').attr('src',src);
        // open modal
        $('#nextoriaModal').modal();
    }

});  

var NEXTORIA_TYPES = {
    paisajismo : {
        paisea : {
            title: 'paisea',
            edition: 'paisajismo, landscape and architecture',
            leadership: 'Jos&eacute; Manuel Vidal',
            src:'/assets/img/paisajismo/GRID_PAISEA.jpg'
        }
    }
}