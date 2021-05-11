sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
] , function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	return Controller.extend("vcp.Customer.controller.CustomerList", {
		formatter: formatter,
		
		onInit: function () {
			var oModel = new JSONModel({
				currency: "USD"
			});
			
			this.getView().setModel(oModel, "mCurrency");
		},
		
		onFilterCustomers: function(oEvent) {
			var aFilter = [];
			
			var sQuery = oEvent.getParameter("query");
			
			if (sQuery) {
				aFilter.push(new Filter("ContactName", FilterOperator.Contains, sQuery));
			}
			
			var oList = this.byId("customersList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});