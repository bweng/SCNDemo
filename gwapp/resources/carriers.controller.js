sap.ui.controller("gwapp.resources.carriers", {


	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers, and to do other one-time initializations.
	 */
	onInit: function() {
		
		jQuery.sap.require("gwapp.resources.utils.connectivity");
		
		var oModel = new sap.ui.model.odata.ODataModel(serviceUrl,true);
		sap.ui.getCore().setModel(oModel);
		
//		oModel.attachRequestCompleted(function(oEvent){
			
//		});
		
		oModel.attachRequestFailed(function(oEvent){
			displayError({
				message: oEvent.getParameter("message"),
				responseText:oEvent.getParameter("responseText"), 
				statusCode:oEvent.getParameter("statusCode"), 
				statusText:oEvent.getParameter("statusText")
			});
		});


		oModel.attachParseError(function(oEvent){
			displayError({
				message: oEvent.getParameter("message"),
				responseText:oEvent.getParameter("responseText"), 
				statusCode:oEvent.getParameter("statusCode"), 
				statusText:oEvent.getParameter("statusText")
			});
		});

//		oModel.attachRequestSent(function(){

//		});	
				
		this.displayCarrier(oModel);
	
	},
	
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 */
//	onBeforeRendering: function() {

//	},


	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 */
//	onAfterRendering: function() {

//	},


	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 */
//	onExit: function() {

//	}	
	

	displayCarrier:function(oModel){
		
		var oTable = sap.ui.getCore().byId("ID_CarrierTable");
		oTable.setModel(oModel);
		oTable.bindRows("CarrierCollection");
	},

	/**
	 * Open the next navigation view in response to a user click.
	 * @param oEvent
	 */
	onPressGetCarriersfligths:function(oEvent){
		var view = sap.ui.getCore().byId("ID_carriersFligths");
			
		if (view == undefined){
			var view = sap.ui.view({id:"ID_carriersFligths", viewName:"gwapp.resources.carriersFligths", type:sap.ui.core.mvc.ViewType.JS});
		};
					
		view.getController().loadContent(this.getBindingContext());
	}
	


});
