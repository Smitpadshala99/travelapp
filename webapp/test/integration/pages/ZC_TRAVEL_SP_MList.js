sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'travel.travelapp',
            componentId: 'ZC_TRAVEL_SP_MList',
            contextPath: '/ZC_TRAVEL_SP_M'
        },
        CustomPageDefinitions
    );
});