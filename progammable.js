const { loadLocalGuest, print } = require('./utils.js');
const { getMostRecentWebSession, sessionContainsEventOfType } = require('./funtions.js');
const guest = loadLocalGuest('guest.json');

(function () {
    var mostRecentWebSession = getMostRecentWebSession(guest);
    var sessionContainsViewEvent = sessionContainsEventOfType(mostRecentWebSession,"VIEWYY");
    print(guest.orders[0].orderItems)
})();
