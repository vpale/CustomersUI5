sap.ui.define([
	//"sap/m/Text"
	//"sap/ui/core/mvc/XMLView"
	"sap/ui/core/ComponentContainer"
	],
	/*function (Text) {
		new Text({
			text: "Hola Mundo"
		}).placeAt("content");
	}*/
	
	/*function (XMLView) {
		XMLView.create({
			viewName: "vcp.Customers.view.App"
		}).then(function (oView) {
			oView.placeAt("content");
		});
	}*/
	
	function (ComponentContainer) {
		new ComponentContainer({
			name: "vcp.Customers",
			settings: {
				id: "vcp"
			},
			async: true
		}).placeAt("content");
	}
);