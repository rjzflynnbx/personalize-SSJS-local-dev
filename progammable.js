const { loadLocalGuest, print } = require('./utils.js');
const { getMostRecentWebSession, sessionContainsEventOfType } = require('./funtions.js');
const guest = loadLocalGuest('guest.json');

(function () {
    //example usage
    var mostRecentWebSession = getMostRecentWebSession(guest);
    var sessionContainsViewEvent = sessionContainsEventOfType(mostRecentWebSession,"VIEW");
    print(sessionContainsViewEvent);
})();
