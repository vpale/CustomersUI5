sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";
	
	return {
		createRaiz: function () {
			var oData = {
				raiz: {
					name: "World"
				}
			};
			return new JSONModel(oData);
		}
	};
});