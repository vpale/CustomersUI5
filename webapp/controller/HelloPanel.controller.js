sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"vcp/Customers/model/models",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, ResourceModel, models, Fragment) {
	
	return Controller.extend("vcp.Customers.controller.App", {
		onInit: function () {
			
		},
		
		onShowHello: function () {
			var sHola = this.getView().getModel("i18n").getResourceBundle().getText("mensajeHola");
			var sInput = this.getView().getModel().getProperty("/raiz/name");
			MessageToast.show(sHola.concat(" ").concat(sInput));
		},
		
		onOpenDialog: function () {
			/*var oView = this.getView();
			
			if (!this.byId("helloDialog")) {
				Fragment.load({
					id: oView.getId(),
					name: "vcp.Customers.view.HelloDialog",
					controller: this 
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("helloDialog").open();
			}*/
			
			this.getOwnerComponent().openDialogo();
		},
		
		onCloseDialogo: function () {
			this.byId("helloDialog").close();
		}
	});
});