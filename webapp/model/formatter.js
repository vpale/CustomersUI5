sap.ui.define([], function () {
	return {
		estadoTexto: function(sEstado) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			
			switch(sEstado) {
				case "S": return resourceBundle.getText("customerS");
				case "O": return resourceBundle.getText("customerO");
				case "A": return resourceBundle.getText("customerA");
				default: return sEstado;
			}
		}
	};
});