sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travel/travelapp/test/integration/FirstJourney',
		'travel/travelapp/test/integration/pages/ZC_TRAVEL_SP_MList',
		'travel/travelapp/test/integration/pages/ZC_TRAVEL_SP_MObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_TRAVEL_SP_MList, ZC_TRAVEL_SP_MObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travel/travelapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_TRAVEL_SP_MList: ZC_TRAVEL_SP_MList,
					onTheZC_TRAVEL_SP_MObjectPage: ZC_TRAVEL_SP_MObjectPage
                }
            },
            opaJourney.run
        );
    }
);