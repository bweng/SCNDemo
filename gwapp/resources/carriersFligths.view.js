sap.ui.jsview("gwapp.resources.carriersFligths", {

	getControllerName : function() {
		return "gwapp.resources.carriersFligths";
	},

	createContent : function(oController) {
		this.createOverlayContainer();
	},
	
	createOverlayContainer:function(){
		var oOverlayContainer = new sap.ui.ux3.OverlayContainer("ID_carriersFligthsOverlay",{openButtonVisible:false});
		oOverlayContainer.addContent(this.createDetailCarrier());
		oOverlayContainer.addContent(this.createListFlight());
		return oOverlayContainer;

	},

	/**
	 * Returns a panel with the user-selected name-value properties.  
	 * @returns {sap.ui.commons.Panel}
	 */
	createDetailCarrier:function(){
	
		var oPanel = new sap.ui.commons.Panel({
			width: "100%",
			height: "20%",
			text:oBundle.getText("CARRIER__DETAILS_TITLE"),
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
					new sap.ui.commons.TextView("ID_carriersFligths_Carrier_AirLineID",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_AIRLINENAME"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_carriersFligths_Carrier_AirLineName",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_LOCALCURRENCYCODE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_carriersFligths_Carrier_LocalCurrencyCode",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_URL"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_carriersFligths_Carrier_URL",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("CARRIER_MIMETYPE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_carriersFligths_Carrier_MimeType",{editable:false })
		);

		oPanel.addContent(oMatrix);
		return oPanel;
	},
	
	/**
	 * Option to extend the bottom panel using the navigation bar. This way the user can navigate to siblings associations. 
	 * This is not currently used.
	 */
/*	createNavigationBar:function(){
		var oNavigationItem1 = new sap.ui.ux3.NavigationItem({key:"key1", text:"Text..."});
		var oNavigationBar = new sap.ui.ux3.NavigationBar({
			items:[oNavigationItem1],
			selectedItem:oNavigationItem1
		});

		return oNavigationBar;
	},
*/

	/**
	 * Returns a panel with a table including columns based on the user's selections.
	 * @returns {sap.ui.commons.Panel}
	 */
	createListFlight:function(){

		var oTable = sap.ui.getCore().byId("ID_FlightTable_1");
		if(oTable == undefined){
			var oTable = new sap.ui.table.Table("ID_FlightTable_1", {
				visibleRowCount  : 20,
				selectionMode: sap.ui.table.SelectionMode.None
			});

 
    	  oTable.addColumn(new sap.ui.table.Column({
    	  	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_FLIGHTDETAILS")}),
			template:new sap.ui.commons.Link().bindProperty("text", "FlightDetails")
											.attachPress(this.getController().onPressGetFlightdetails),
			sortProperty: "FlightDetails",
			filterProperty: "FlightDetails"
		}));
			
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_AIRLINEID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "AirLineID"),
			sortProperty: "AirLineID",
			filterProperty: "AirLineID"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_FLIGHTCONNECTIONID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "FlightConnectionID"),
			sortProperty: "FlightConnectionID",
			filterProperty: "FlightConnectionID"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_FLIGHTDATE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "FlightDate",new sap.ui.model.type.DateTime({style: "medium"})),
			sortProperty: "FlightDate",
			filterProperty: "FlightDate"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_AIRFARE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "AirFare"),
			sortProperty: "AirFare",
			filterProperty: "AirFare"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_LOCALCURRENCYCODE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "LocalCurrencyCode"),
			sortProperty: "LocalCurrencyCode",
			filterProperty: "LocalCurrencyCode"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_AIRCRAFTTYPE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "AirCraftType"),
			sortProperty: "AirCraftType",
			filterProperty: "AirCraftType"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_ECONOMYCLASSMAXIMUMSEATS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "EconomyClassMaximumSeats"),
			sortProperty: "EconomyClassMaximumSeats",
			filterProperty: "EconomyClassMaximumSeats"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_ECONOMYCLASSOCCUPIEDSEATS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "EconomyClassOccupiedSeats"),
			sortProperty: "EconomyClassOccupiedSeats",
			filterProperty: "EconomyClassOccupiedSeats"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_TOTALBOOKINGSSUM")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "TotalBookingsSum"),
			sortProperty: "TotalBookingsSum",
			filterProperty: "TotalBookingsSum"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_BUSINESSCLASSMAXIMUMSEATS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "BusinessClassMaximumSeats"),
			sortProperty: "BusinessClassMaximumSeats",
			filterProperty: "BusinessClassMaximumSeats"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_BUSINESSCLASSOCCUPIEDSEATS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "BusinessClassOccupiedSeats"),
			sortProperty: "BusinessClassOccupiedSeats",
			filterProperty: "BusinessClassOccupiedSeats"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_FIRSTCLASSMAXIMUMSEATS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "FirstClassMaximumSeats"),
			sortProperty: "FirstClassMaximumSeats",
			filterProperty: "FirstClassMaximumSeats"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_FIRSTCLASSOCCUPIEDSEATS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "FirstClassOccupiedSeats"),
			sortProperty: "FirstClassOccupiedSeats",
			filterProperty: "FirstClassOccupiedSeats"
 		}));
 		
		}
		var oTablePanel = new sap.ui.commons.Panel({
			width: "100%",
			text: oBundle.getText("FLIGHT__LIST_TITLE"),  
			showCollapseIcon: false
		});

		oTablePanel.addContent(oTable); 

		return oTablePanel;

	}
	
});
