sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'travel.travelapp',
            componentId: 'ZC_TRAVEL_SP_MObjectPage',
            contextPath: '/ZC_TRAVEL_SP_M'
        },
        CustomPageDefinitions
    );
});