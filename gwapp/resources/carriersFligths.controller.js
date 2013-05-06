
sap.ui.controller("gwapp.resources.carriersFligths", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers, and to do other one-time initialization.
	 */

//	onInit: function(oEvent) {


//	},
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

	/**
	 * This method populates the UI with business data according to received context and then opens the UI. 
	 * @param oContext - the OData context of the previous view  
	 */
	loadContent:function(oContext){
		var sFirstDetailContext = this.setCarrierDetails(oContext);
		this.setFlightList(sFirstDetailContext);
		
		var oOverlaycontainer = sap.ui.getCore().byId("ID_carriersFligthsOverlay");

		if(!oOverlaycontainer.isOpen()){
			oOverlaycontainer.open();
		}  
	},

	/**
	 * Updates the details panel with business data obtained after an OData call to the SAP NetWeaver Gateway system.
	 * @param oContext - the OData context of the previous view 
	 */
	setCarrierDetails:function(oContext){
		 
		var oModel  = sap.ui.getCore().byId("ID_CarrierTable").getModel();
		var sNewContext = "";
		oModel.read("",oContext,[],false,
				function(oData,response){
					sap.ui.getCore().byId("ID_carriersFligths_Carrier_AirLineID").setText(oData["AirLineID"]);
					sap.ui.getCore().byId("ID_carriersFligths_Carrier_AirLineName").setText(oData["AirLineName"]);
					sap.ui.getCore().byId("ID_carriersFligths_Carrier_LocalCurrencyCode").setText(oData["LocalCurrencyCode"]);
					sap.ui.getCore().byId("ID_carriersFligths_Carrier_URL").setText(oData["URL"]);
					sap.ui.getCore().byId("ID_carriersFligths_Carrier_MimeType").setText(oData["MimeType"]);
					var sContext = response.data.__metadata.uri;
					sNewContext = sContext.substring(sContext.lastIndexOf("/") + 1);
				},
				function(error){
					if (error.response != undefined ){
							displayError({message: error.message, statusCode: error.response.statusCode , statusText: error.response.statusText, requestUri: error.response.requestUri});
					}
					else if (error.message != undefined){
							alert(oBundle.getText("MESSAGE") + " " + error.message);
					}
					else{
							alert(oBundle.getText("GENERAL_ERROR_MESSAGE"));
					}
				});
		return sNewContext;
	},

	/**
	 * Updates the Table panel with business data obtained after an Odata call to SAP NetWeaver Gateway.
	 * @param oContext - the OData context of the previous view 
	 */
	setFlightList:function(oContext){

		var sListContext  = "/" + oContext + "/" + "CarrierFlights";

		var oCurrOverlayTable = sap.ui.getCore().byId("ID_FlightTable_1");
		var oModel  = sap.ui.getCore().byId("ID_CarrierTable").getModel();

		oCurrOverlayTable.setModel(oModel);
		oCurrOverlayTable.bindRows(sListContext);
	},
	
	/**
	 * Open the next navigation view in response to a user click.
	 * @param oEvent
	 */
	onPressGetFlightdetails:function(oEvent){
		
		var view = sap.ui.getCore().byId("ID_flightdetails");

		if (view == undefined){
			var view = sap.ui.view({id:"ID_flightdetails", viewName:"gwapp.resources.flightdetails", type:sap.ui.core.mvc.ViewType.JS});
		}
					
		view.getController().loadContent(this.getBindingContext());
	}
 
});
