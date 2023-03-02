const { loadLocalGuest, print } = require('./utils.js');
const { getMostRecentWebSession, sessionContainsEventOfType } = require('./functions.js');
const guest = loadLocalGuest('guest.json');

(function () {
    //you can copy & paste this code (minus lines 1 2 & 3) directly into an actual programmable, provided you load functions.js as a JS module
    //example usage
    var mostRecentWebSession = getMostRecentWebSession(guest);
    var sessionContainsViewEvent = sessionContainsEventOfType(mostRecentWebSession,"VIEW");
    print(sessionContainsViewEvent); // prints "true"
})();
