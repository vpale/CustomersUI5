sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"vcp/Customers/model/models"
], function (Controller, MessageToast, JSONModel, ResourceModel, models) {
	
	return Controller.extend("vcp.Customers.controller.App", {
		onInit: function () {
			/*var oData = {
				raiz: {
					name: "World"
				}
			};
			
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);*/
			
			this.getView().setModel(models.createRaiz());
			
			var i18nModel = new ResourceModel({
				bundleName: "vcp.Customers.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		
		onShowHello: function () {
			///*eslint-disable no-alert*/
			//alert("Hello World");
			///*eslint-enable no-alert*/
			
			//MessageToast.show("Hello World");
			
			var sHola = this.getView().getModel("i18n").getResourceBundle().getText("mensajeHola");
			var sInput = this.getView().getModel().getProperty("/raiz/name");
			MessageToast.show(sHola.concat(" ").concat(sInput));
		}
	});
});