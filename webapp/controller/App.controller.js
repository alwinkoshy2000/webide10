sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/model/formatter",
	"sap/ui/core//Fragment"
], function (Controller, JSONModel, Formatter, Fragment) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		
		Contformatter : Formatter,
		onInit: function () {
		// 	var oData = {
		// 		"title" : "my order",
		// 		"SalesOrderSet" : [{
  //    "SalesOrderID": "0001",
  //    "CustomerName": "Apple",
  //    "LifecycleStatusDescription": "Completed",
  //    "LifecycleStatus": "Success",
  //    "GrossAmount": "199",
  //    "CurrencyCode": "USD"
  //  }, {
  //    "SalesOrderID": "0002",
  //    "CustomerName": "Google",
  //    "LifecycleStatusDescription": "Completed",
  //    "LifecycleStatus": "Success",
  //    "GrossAmount": "277",
  //    "CurrencyCode": "USD"
  //  }, {
  //    "SalesOrderID": "0003",
  //    "CustomerName": "Amazon",
  //    "LifecycleStatusDescription": "Error",
  //    "LifecycleStatus": "Error",
  //    "GrossAmount": "599",
  //    "CurrencyCode": "USD"
  //  }]
		// 	};
			
		// 	var oModel = new JSONModel(oData);
			
		// 	this.getView().setModel(oModel);
		},
		
		onSearch: function (oEvent) {
		var oFilter = [];
		var sQuery = oEvent.getParameter("query");
		
		if(sQuery){
			oFilter.push(new sap.ui.model.Filter("CustomerName", sap.ui.model.FilterOperator.Contains, sQuery))
		}
		
		var oTable = this.byId("idOrdersTable");
		var oBinding = oTable.getBinding("items");
		
		oBinding.filter(oFilter);
		},
		
		onSort: function () {
			//Get the current view
			var oView = this.getView();
			// Load the fragment file
			if(!this.byId("sortDialog"))
			{
			Fragment.load({
				id : oView.getId(),
				name : "sap.ui.demo.walkthrough.fragment.SortDialog",
				controller: this
			}).then(function(oDialog){
				// oDialog.addDependent(this.getView());
				   oDialog.open();
			});
			}
			else
			this.byId("sortDialog").open();
			//Open the Dialog
		},
		
		onSortDialogConfirm: function(oEvent) {
			debugger;
		},
		
		onGroup: function () {
			alert("on Group");
		}
		

	});
});