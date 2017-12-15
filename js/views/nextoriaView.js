/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.NextoriaView = Backbone.View.extend({

    controller: null,
    currentMagazine: null,
    id: 'nextoria-section',
    renderCallback: null,

    template: Nexapp.getTemplate('nextoriaView'),

    events: {
        'click li': 'changeGrid',
        'click .row:not(.subheader) div[class^=col-]': 'openModal',
        'click .modal-footer span': 'slideMag',
    },

    initialize: function (options) {
        this.controller = options.controler;
        this.currentMagazine = {
            type: 'arquitectura',
            index: undefined
        }
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
    },

    changeGrid: function (e) {
        // current type
        var currentType = this.$el.find('.current');
        this.currentMagazine = {
            type : $(e.target).data('tipo'),
            index: undefined
        };
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
        // update currentMagazine object
        this.currentMagazine.index = cMag;
        // magazine object
        var magazine = NEXTORIA_TYPES[cType][cMag]; 
        // insert content
        this._insertContent(magazine);
        // check magazine's index
        this._checkMagazineIndex(cType,cMag);
        // open modal
        $('#nextoriaModal').modal();
    },

    slideMag: function(e) {
        // slide direction
        var direction = +e.currentTarget.id ? 1 : -1;
        // current type
        var cType = this.currentMagazine.type;
        // slided index
        var cMag = +this.currentMagazine.index + direction;
        // update current magazine
        this.currentMagazine.index = cMag;
        // magazine object
        var magazine = NEXTORIA_TYPES[cType][cMag];
        // insert content
        this._insertContent(magazine);
        // check magazine's index
        this._checkMagazineIndex(cType,cMag);
    },

    _insertContent: function(magazine) {

        $('.nextoriaModal_img img').attr('src',magazine.src);
        $('.nextoriaModal_info .title_text').html(magazine.title);

        var editionHtmlWrapper = $('.nextoriaModal_info .edition_text').parent();
        if (magazine.edition) {
            editionHtmlWrapper.show();
            $('.nextoriaModal_info .edition_text').html(magazine.edition);
        } else {
            $('.nextoriaModal_info .edition_text').parent().hide();            
        }
        
        var leadershipHtmlWrapper = $('.nextoriaModal_info .leadership_text').parent();
        if (magazine.leadership) {
            leadershipHtmlWrapper.show();
            $('.nextoriaModal_info .leadership_text').html(magazine.leadership);
        } else {
            $('.nextoriaModal_info .leadership_text').parent().hide();
        }
    },

    _checkMagazineIndex: function(cType,cMag) {
        $('span[id=0],span[id=1]').removeClass('disabled');
        var firstMag = _.first(_.keys(NEXTORIA_TYPES[cType]));
        var lastMag = _.last(_.keys(NEXTORIA_TYPES[cType]));
        if(cMag == firstMag) {
            $('span[id=0]').toggleClass('disabled');
        }
        if(cMag == lastMag) {
            $('span[id=1]').toggleClass('disabled');
        }
    }

});  

var NEXTORIA_TYPES = {
    arquitectura : {
        1 : {
            title: 'Arquitectura',
            edition: 'Colegio Oficial de Arquitectos de Madrid COAM',
            leadership: 'Jer&oacute;nimo Junquera / Estanislao P&eacute;rez Pita',
            src: 'assets/img/GRID_COAM_1.jpg'
        },
        2 : {
            title: 'Arquitectura',
            edition: 'Colegio Oficial de Arquitectos de Madrid COAM',
            leadership: 'Sara de la Mata / Fuensanta Nieto / Enrique Sobejano',
            src: 'assets/img/GRID_COAM_2.jpg'
        },
        3 : {
            title: 'Arquitectura',
            edition: 'Colegio Oficial de Arquitectos de Madrid COAM',
            leadership: 'Fernando Porras Isla / Federico Soriano',
            src: 'assets/img/GRID_COAM_3.jpg'
        },
        4 : {
            title: 'Urbanismo COAM',
            edition: 'Colegio Oficial de Arquitectos de Madrid',
            leadership: 'Abel Anguita / Fernando Nasarre / Luis Rodr&iacute;guez Avial',
            src: 'assets/img/arquitectura/GRID_COAM_URBANISMO.jpg'
        },
        5 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Josep Lu&iacute;s Mateo',
            src: 'assets/img/arquitectura/GRID_QUADERNS_1.jpg'
        },
        6 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Josep Lu&iacute;s Mateo',
            src: 'assets/img/arquitectura/GRID_QUADERNS_2.jpg'
        },
        7 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Manel Gausa',
            src: 'assets/img/arquitectura/GRID_QUADERNS_3.jpg'
        },
        8 : {
            title: 'Quaderns d\'arquitectura i urbanisme',
            edition: 'Colegio Oficial de Arquitectos de Catalu&ntildea COAC',
            leadership: 'Manel Gausa',
            src: 'assets/img/arquitectura/GRID_QUADERNS_4.jpg'
        },
        9 : {
            title: 'Arquitectos',
            edition: 'Consejo Superior de Arquitectos de España C.S.A.E',
            leadership: 'Atxu Amann / Andr&eacute;s Canov&aacute;s',
            src: 'assets/img/arquitectura/GRID_CSAE_1.jpg'
        },
        10 : {
            title: 'Arquitectos',
            edition: 'Consejo Superior de Arquitectos de España C.S.A.E',
            leadership: 'Ignacio Borego / N&eacute;stor Montenegro / Lina Toro',
            src: 'assets/img/arquitectura/GRID_CSAE_2.jpg'
        },
        11 : {
            title: 'Tecnolog&iacute;a y Arquitectura',
            edition: 'Dirección de Arquitectura, Departamento de Urbanismo, Vivienda y Medio Ambiente del Gobierno Vasco',
            leadership: 'Javier Mozas / Aurora Fern&aacute;ndez',
            src: 'assets/img/arquitectura/GRID_Tecnologia y Arquitectura.jpg'
        },
        12 : {
            title: 'A+T',
            edition: 'Arquitectura y Tecnolog&iacute;a',
            leadership: 'Javier Mozas / Aurora Fern&aacute;ndez',
            src: 'assets/img/arquitectura/GRID_A+T.jpg'
        },
        13 : {
            title: 'Composici&oacute;n arquitect&oacute;nica',
            edition: 'Fundaci&oacute;n Faustino Orbegozo',
            leadership: 'Manuel &Iacute;&ntilde;iguez / Alberto Ust&aacute;rroz',
            src: 'assets/img/arquitectura/GRID_COMPOSICION_ARQUITECTONICA.jpg'
        },
        14 : {
            title: 'Ars Sacra',
            edition: 'Patrimonio Cultural, Archivos, Artes Pl&aacute;sticas, Arquitectura y M&uacute;sica',
            leadership: '&Aacute;ngel Sancho',
            src: 'assets/img/arquitectura/GRID_ARS_SACRA.jpg'
        },
        15 : {
            title: 'Basa',
            edition: 'Colegio Oficial de Arquitectos de las Islas Canarias',
            leadership: 'Federico Garc&iacute;a Barba',
            src: 'assets/img/arquitectura/GRID_BASA.jpg'
        },
        16 : {
            title: 'BAU',
            edition: 'Colegio Oficial de Arquitectos de Castilla y Le&oacute;n y Colegio Oficial de Arquitectos de Castilla La Mancha',
            leadership: 'Dar&iacute;o &Aacute;lvarez / Alberto Combarros / Fernando de Castro',
            src: 'assets/img/arquitectura/GRID_BAU.jpg'
        },
        17 : {
            title: 'Geometr&iacute;a',
            edition: 'Revista Semestral de Arquitectura y Urbanismo',
            leadership: 'Jos&eacute; Segu&iacute;',
            src: 'assets/img/arquitectura/GRID_GEOMETRIA.jpg'
        },
        18 : {
            title: 'Loggia',
            edition: 'Arquitectura y Restauraci&oacute;n',
            leadership: 'Juan Francisco Noguera',
            src: 'assets/img/arquitectura/GRID_LOGIA.jpg'
        },
        19 : {
            title: 'Periferia',
            edition: 'Colegio Oficial de Arquitectos de Andaluc&iacute;a',
            leadership: 'Luis Ib&aacute;&ntilde;ez S&aacute;nchez / Antonio Jim&eacute;nez Torrecillas / Elisenda Monz&oacute;n / Mart&iacute;n Ram&iacute;rez P&eacute;rez',
            src: 'assets/img/arquitectura/GRID_PERIFERIA.jpg'
        },
        20 : {
            title: 'PROUN',
            edition: 'Proyectos Fin de Carrera',
            leadership: 'Juan Manuel Ros / Jos&eacute; Ram&oacute;n Salgado',
            src: 'assets/img/arquitectura/GRID_PROUN.jpg'
        }
    },

    anuarios : {
        21: {
            title: 'Anuario 2000',
            edition: 'Colegio Superior de los Colegios de Arquitectos de Espa&ntilde;a C.S.C.A.E',
            leadership: '',
            src:'assets/img/anuarios/FULL_GRID_CSAE_ANUARIO_2.jpg'
        },
        22 : {
            title: 'Anuario 2005',
            edition: 'Colegio Superior de los Colegios de Arquitectos de Espa&ntilde;a C.S.C.A.E',
            leadership: '',
            src:'assets/img/anuarios/FULL_GRID_CSAE_ANUARIO_1.jpg'
        }
    },

    construccion : {
        23 : {
            title: 'CAU',
            edition: 'Colegio Oficial de Aparejadores y Arquitectos T&eacute;cnicos de Barcelona',
            leadership: '',
            src: 'assets/img/construccion/GRID_CAU.jpg'
        },
        24 : {
            title: 'CERCHA',
            edition: 'Consejo General de Aparejadores y Arquitectos T&eacute;cnicos de Espa&ntilde;a',
            leadership: '',
            src: 'assets/img/construccion/GRID_CERCHA.jpg'
        }
    },
    
    paisajismo : {
        25 : {
            title: 'paisea',
            edition: 'paisajismo, landscape and architecture',
            leadership: 'Jos&eacute; Manuel Vidal',
            src:'assets/img/paisajismo/GRID_PAISEA.jpg'
        }
    },

    diseno : {
        26 :{
            title: 'DE DISEÑO',
            edition: 'Editorial El Croquis',
            leadership: 'Juli Capella / Quim Larrea / Pierluigi Cattermole',
            src:'assets/img/diseno/GRID_ARDI.jpg'
        },
        27 : {
            title: 'Ardi',
            edition: 'Grupo Zeta',
            leadership: 'Juli Capella / Quim Larrea',
            src:'assets/img/diseno/GRID_DEDISENO.jpg'
        }
    },

    internacional : {
        28 : {
            title: 'Compasses',
            edition: '',
            leadership: 'Massimo de Falco / Marco Ferreti / Francesca Maderna',
            src:'assets/img/internacional/GRID_COMPASSES.jpg'
        },
        29 : {
            title: 'Build das architekten magazin',
            edition: '',
            leadership: 'Johannes Busmann',
            src:'assets/img/internacional/GRID_BUILD.jpg'
        }
    },

    culturales : {
        30 : {
            title: 'Deusto Business Review',
            edition: 'Ediciones Deusto',
            leadership: '',
            src:'assets/img/culturales/GRID_DEUSTO.jpg'
        },
        31 : {
            title: 'IMPAR',
            edition: '',
            leadership: 'Mar&iacute;a Casanovas / Asunci&oacute;n Batlle / Luis Do&ntilde;ate',
            src:'assets/img/culturales/GRID_IMPAR.jpg'
        },
        32 : {
            title: 'LIQUID',
            edition: 'Art Live Art International Book Magazine',
            leadership: 'Xavier Rovira',
            src:'assets/img/culturales/GRID_LIQUIDOCS.jpg'
        },
        33 : {
            title: 'NH Hoteles',
            edition: '',
            leadership: 'Javier Angulo',
            src:'assets/img/culturales/GRID_NH.jpg'
        },
        34 : {
            title: 'MADRID STYLE',
            edition: 'BOOKSTYLE S.A',
            leadership: '',
            src:'assets/img/culturales/GRID_LIFESTYLE_M.jpg'
        },
        35 : {
            title: 'BARCELONA STYLE',
            edition: 'BOOKSTYLE S.A',
            leadership: '',
            src:'assets/img/culturales/GRID_LIFESTYLE_B.jpg'
        },
    }
}