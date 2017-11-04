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
        // magazine object
        var magazine = NEXTORIA_TYPES[cType][cMag]; 
        // insert content
        $('.modal-title').html();
        $('.nextoriaModal_img img').attr('src',magazine.src);
        $('.nextoriaModal_info .title_text').html(magazine.title);
        $('.nextoriaModal_info .edition_text').html(magazine.edition);
        $('.nextoriaModal_info .leadership_text').html(magazine.leadership);
        // open modal
        $('#nextoriaModal').modal();
    }

});  

var NEXTORIA_TYPES = {
    arquitectura : {
        a1 : {
            title: 'Arquitectura',
            edition: 'Colegio Oficial de Arquitectos de Madrid COAM',
            leadership: 'Jer&oacute;nimo Junquera / Estanislao P&eacute;rez Pita',
            src:'/assets/img/GRID_COAM_1.jpg'
        },
        a2 : {
            title: 'Arquitectura',
            edition: 'Colegio Oficial de Arquitectos de Madrid COAM',
            leadership: 'Sara de la Mata / Fuensanta Nieto / Enrique Sobejano',
            src:'/assets/img/GRID_COAM_2.jpg'
        },
        a3 : {
            title: 'Arquitectura',
            edition: 'Colegio Oficial de Arquitectos de Madrid COAM',
            leadership: 'Fernando Porras Isla / Federico Soriano',
            src:'/assets/img/GRID_COAM_3.jpg'
        },
        a4 : {
            title: 'Urbanismo COAM',
            edition: 'Colegio Oficial de Arquitectos de Madrid',
            leadership: 'Abel Anguita / Fernando Nasarre / Luis Rodr&iacute;guez Avial',
            src:'/assets/img/arquitectura/GRID_COAM_URBANISMO.jpg'
        },
        a5 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Josep Lu&iacute;s Mateo',
            src:'/assets/img/arquitectura/GRID_QUADERNS_1.jpg'
        },
        a6 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Josep Lu&iacute;s Mateo',
            src:'/assets/img/arquitectura/GRID_QUADERNS_2.jpg'
        },
        a7 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Manel Gausa',
            src:'/assets/img/arquitectura/GRID_QUADERNS_3.jpg'
        },
        a8 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Manel Gausa',
            src:'/assets/img/arquitectura/GRID_QUADERNS_4.jpg'
        },
        a9 : {
            title: '',
            edition: '',
            leadership: '',
            src:'/assets/img/arquitectura/GRID_CSAE_1.jpg'
        },
        arquitectos2 : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        ta : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        amast : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        composicionarq : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        arssacra : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        arssacra : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        basa : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        bau : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        geometria : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        loggia : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        periferia : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        proun : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
    },

    anuarios : {
        a2000 : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        a2005 : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        }
    },

    construccion : {
        cau : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        cercha : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        }
    },
    
    paisajismo : {
        paisea : {
            title: 'paisea',
            edition: 'paisajismo, landscape and architecture',
            leadership: 'Jos&eacute; Manuel Vidal',
            src:'/assets/img/paisajismo/GRID_PAISEA.jpg'
        }
    },

    diseno : {
        dediseno :{
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        ardi : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        }
    },

    internacional : {
        compasses : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        build : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        }
    },

    cultural : {
        deusto : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        impar : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        liquiddocs : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        nhhoteles : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        madridstyle : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
        barcelonastyle : {
            title: '',
            edition: '',
            leadership: '',
            src:''
        },
    },
}