jQuery.sap.require("gwapp.resources.utils.utility");

/**
 * First Application View - this is the application's starting point. It builds the application window.   
 */
sap.ui.jsview("gwapp.resources.carriers", {

      getControllerName : function() {
         return "gwapp.resources.carriers";
    	 
      },
      
      createContent : function(oController) {
		var oShell = this.createShell();
       	oShell.addContent(this.createCarrierTable());	
       	return oShell;
       	
      },

      createShell:function(oController){
      
    	  var oShell = sap.ui.ux3.Shell("ID_CarrierShell",{
    	      appIcon: "images/SAPLogo.gif",
    		  appTitle: oBundle.getText("APP_TITLE"),
    		  showLogoutButton:false,
    		  showSearchTool: false,
    		  showInspectorTool: false,
    		  showFeederTool: false,
    		  worksetItems: [new sap.ui.ux3.NavigationItem("navItemList",{key: "CarrierList",text:oBundle.getText("WORKSET_TITLE")})]
    	  });
    	  return oShell;
      },
      
      /**
	 * Returns a table with the required columns, each column is bound for a specific odata service property   
	 * @returns {sap.ui.table.Table}
	 */
      createCarrierTable:function(){
      
    	var oTable = new sap.ui.table.Table("ID_CarrierTable", {
    		visibleRowCount  : 20,
  			selectionMode: sap.ui.table.SelectionMode.None
  		});
    	
 

    	  oTable.addColumn(new sap.ui.table.Column({
    	  	label: new sap.ui.commons.Label({text:oBundle.getText("CARRIER_AIRLINEID")}),
			template:new sap.ui.commons.Link().bindProperty("text", "AirLineID")
											  .attachPress(this.getController().onPressGetCarriersfligths),
			sortProperty: "AirLineID",
			filterProperty: "AirLineID"
		}));
			

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("CARRIER_AIRLINENAME")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "AirLineName"),
			sortProperty: "AirLineName",
			filterProperty: "AirLineName"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("CARRIER_LOCALCURRENCYCODE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "LocalCurrencyCode"),
			sortProperty: "LocalCurrencyCode",
			filterProperty: "LocalCurrencyCode"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("CARRIER_URL")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "URL"),
			sortProperty: "URL",
			filterProperty: "URL"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("CARRIER_MIMETYPE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "MimeType"),
			sortProperty: "MimeType",
			filterProperty: "MimeType"
 		}));
 		return oTable;   		
      }
      
});
