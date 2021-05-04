sap.ui.define([
	"sap/ui/core/UIComponent",
	"vcp/Customers/model/models",
	"sap/ui/model/resource/ResourceModel",
	"./controller/Dialogo"
], function (UIComponent, models, ResourceModel, Dialogo) {
	
	//return UIComponent.extend("vcp.Customers.Component.js", {
	return UIComponent.extend("vcp.Customers.Component", {
		
		metadata: {
			manifest: "json"
			/*rootView: {
				"viewName": "vcp.Customers.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}*/
		},
		
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			
			this.setModel(models.createRaiz());
			
			var i18nModel = new ResourceModel({
				bundleName: "vcp.Customers.i18n.i18n"
			});
			this.setModel(i18nModel,"i18n");
			
			this._oDialogo = new Dialogo(this.getRootControl());
		},
		
		exit: function () {
			this._oDialogo.destroy();
			delete this._oDialogo;
		},
		
		openDialogo: function () {
			this._oDialogo.open();
		}
	});
});