/**
 * 
 */
var Nexapp = Nexapp || {};

Nexapp.templateUrl = function() {
    return window.location.origin + '/js/templates/';
}(),

/**
 * Método de conveniencia para la recuperación de templates
 * @param  {string}	viewName    el nombre de la vista. Por convención la template se llama igual que su vista asociada.
 * @param  {?string}	templateUrl la URL donde están las templates. Opcional: utiliza this.templateUrl por defecto.
 * @return {Object}     la template recuperada 
 */
Nexapp.getTemplate = function(viewName, templateUrl) {
    if (!templateUrl) {
	templateUrl = this.templateUrl;
    }
    return Nexapp.templateManager.getTemplate(viewName, templateUrl);
};

/**
 * Clase Nexapp.TemplateManager
 *
 * Gestiona el acceso a las plantillas de las vistas.
 */
Nexapp.TemplateManager = function() {};

_.extend(Nexapp.TemplateManager.prototype, {

    templates : {},

    _loadTemplate : function(templateUrl) {

	var textContent = null;

	$.ajax({
	    context: this,
	    async :false,
	    type: 'GET',
	    url : templateUrl,
	    success : function(result) {
		textContent = result;
	    },
	    dataType: 'html'
	});
	
	if (!textContent) {
	    throw 'Error loading template: ' + templateUrl;
	}
	
	return textContent;		

    },
	
    // Devuelve un proxy de la plantilla compilada de una vista, que retrasa 
    // la creación de ésta (si es que todavía no estaba creada) hasta el primer 
    // momento que en que se necesite usar.
    getTemplate : function(viewName, baseUrl) {
	
	return _.bind(function () {
		
	    var templateUrl = baseUrl + viewName + '.tmpl';
	    var template = this.templates[templateUrl];
	
            if (!template) {
                template = _.template(this._loadTemplate(templateUrl));
                this.templates[templateUrl] = template;
            }		
		
            return template.apply(null, arguments);
	
	}, this);	    				
		
    }
	
});

/**
 * Internacionalizacion
 * 
 * Soporta el mensaje y parámetros
 * El fichero descargado por el usuario en base a la locale
 * contiene los codigos ya internacionalizados
 */
Nexapp.i18n = function() {};

_.extend(Nexapp.i18n.prototype, {
	
	/**
	 * @param message
	 * @param options
	 * @returns
	 */
	msg: function(message, options) {
	    
		if (typeof(Nexapp.i18n_string) != 'undefined' && Nexapp.i18n_string[Nexapp.language]!= 'undefined' && Nexapp.i18n_string[Nexapp.language][message]) {
			if (options) {
				return Nexapp.i18n_string[message].replace(/{([^{}]*)}/g,
					function(a, b) {
						var r = options[b];
						return typeof r === 'string' || typeof r === 'number' ? r : a;
					}
				);
			} else {
			    return Nexapp.i18n_string[Nexapp.language][message];
			}
		}
		return message;
	},
	
});

/**
 * Definición de variables
 * Dentro del Namespace Nexapp
 */

//Inicia la única instancia del template manager
Nexapp.templateManager = new Nexapp.TemplateManager();

//Instancia unica de variable para internacionalizacion
Nexapp.i18n = new Nexapp.i18n();

// Set language
Nexapp.language = navigator.language;

// Event bus
Nexapp.EventBus = _.extend({}, Backbone.Events)
