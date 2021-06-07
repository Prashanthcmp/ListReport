sap.ui.define([
"sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Filter, FilterOperator) {
    'use strict';

    return sap.ui.controller("fiorielements.ext.controller.ObjectPageCon", {
        onInit: function (oEvent) {
            //alert('onInit');
        },

        onBeforerebindTable: function (oEvent){
            debugger
            var oBindingParameter = oEvent.getParameter("bindingParams");
            var aFilters = [
                new Filter("CategoryID", FilterOperator.EQ, 1)
            ];
            //oBindingParameter.filters = oBindingParameter.filters.concat(aFilters);
        }
    });
});