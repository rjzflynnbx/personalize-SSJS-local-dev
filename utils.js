
function loadLocalGuest(path) {
    var fs = require('fs');
    /**
     * @typedef {Object} Guest
     * @property {string} email
     * @property {string} firstName
     * @property {string} lastName
     * @property {string} gender
     * @property {string} postCode
     * @property {string} firstSeen
     * @property {string} lastSeen
     * @property {string} guestType
     * @property {string} language
     * @property {Array} emails
     * @property {Array} identifiers
     * @property {Array} dataExtensions
     * @property {Array} sessions
     * @property {Array} orders
     * @property {Array} segmentMemberships
    */

    /**
      * @type {Guest}
    */
    let guest = JSON.parse(fs.readFileSync("./guest_data/" + path, 'utf8'));
    return guest;
}

function print(string) {
    console.log(string);
}

module.exports = {
    loadLocalGuest, print
};
