sap.ui.jsview("gwapp.resources.flightdetails", {

	getControllerName : function() {
		return "gwapp.resources.flightdetails";
	},

	createContent : function(oController) {
		this.createOverlayContainer();
	},
	
	createOverlayContainer:function(){
		
		var oOverlayContainer = new sap.ui.ux3.OverlayContainer("ID_flightdetailsOverlay",{openButtonVisible:false});
		oOverlayContainer.addContent(this.createFirstDetailCarrier());
		return oOverlayContainer;

	},

	/**
	 * Returns a panel with the user-selected name-value properties.  
	 * @returns {sap.ui.commons.Panel}
	 */
	createFirstDetailCarrier:function(){
	
		var oPanel = new sap.ui.commons.Panel({
			width: "100%",
			height: "40%",
			text: oBundle.getText("CARRIER__DETAILS_TITLE"),
			showCollapseIcon: false,
			areaDesign: sap.ui.commons.enums.AreaDesign.Plain
		});

		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed: true, 
			width: '100%', 
			widths:["10%", "90%"], 
			columns: 2
		});
			
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_AIRLINEID"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_flightdetails_Carrier_AirLineID_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_AIRLINENAME"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_flightdetails_Carrier_AirLineName_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_LOCALCURRENCYCODE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_flightdetails_Carrier_LocalCurrencyCode_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_URL"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_flightdetails_Carrier_URL_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_MIMETYPE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_flightdetails_Carrier_MimeType_1",{editable:false })
			);

		oPanel.addContent(oMatrix);
		return oPanel;

	},

 
});