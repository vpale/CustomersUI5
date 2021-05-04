sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
	return ManagedObject.extend("vcp.Customers.controller.Dialogo", {
		constructor: function (oView) {
			this._oView = oView;
		},

		exit: function () {
			delete this._oView;
		},

		open: function () {
			var oView = this._oView;

			if (!oView.byId("helloDialog")) {
				var oFragmentController = {
					onCloseDialogo: function () {
						oView.byId("helloDialog").close();
					}
				};

				Fragment.load({
					id: oView.getId(),
					name: "vcp.Customers.view.HelloDialog",
					controller: oFragmentController
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("helloDialog").open();
			}
		}
	});
});