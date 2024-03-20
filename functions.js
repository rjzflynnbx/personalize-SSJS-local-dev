// Session

function getNumberOfSessions(guest) {
    return guest.sessions.length;
}

function getMostRecentWebSession(guest) {
    var sessions = guest.sessions;
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].sessionType === 'WEB' && sessions[i].operatingSystem != null) {
            return sessions[i];
        }
    }
    return null;
}

function getCurrentWebSession(guest) {
    var sessions = guest.sessions;
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].sessionType === 'WEB' && sessions[i].operatingSystem != null && sessions[i].status === 'OPEN') {
            return sessions[i];
        }
    }
    return null;
}

function sessionContainsEventOfType(session, eventType) {
    var events = session.events;
    for (var i = 0; i < events.length; i++) {
        if (events[i].type === eventType) {
            return true;
        }
    }
    return false;
}

function getNumberOfEventsInSession(session, eventType) {
    var numberOfEvents = 0;
    for (var i = 0; i < session.events.length; i++) {
        var event = session.events[i];
        if (event.type === eventType) {
            numberOfEvents++;
        }
    }
    return numberOfEvents;
}

function getMostRecentAbandonedSession(guest) {
    var sessions = guest.sessions;
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].sessionType === 'WEB' && sessions[i].operatingSystem != null && sessions[i].cartType === "ABANDONED") {
            return sessions[i];
        }
    }
}

//Data Extension

function getDataExtensionWithName(guest, extensionName) {
    var toReturn = null;
    guest.dataExtensions.forEach(function (dataExtension) {
        if (dataExtension.name === extensionName) {
            toReturn = dataExtension;
        }
    });
    return toReturn;
}

function getDataExtensionValue(dataExtension, dataExtensionKey) {
    if (dataExtension != null) {
        return dataExtension.values[dataExtensionKey];
    }
    return null;
}

function getDataExtensionValue(guest, dataExtensionName, dataExtensionKey) {
    var dataExtension = getDataExtensionWithName(guest, dataExtensionName,);
    if (dataExtension != null) {
        return dataExtension.values[dataExtensionKey];
    }
    return null;
}

function getMapFromDataExtension(dataExtension) {
    return dataExtension.values;
}

//Events

function getFirstEventOfType(session, eventType) {
    var events = session.events;
    for (var i = 0; i < events.length; i++) {
        if (events[i].type === eventType) {
            return events[i];
        }
    }
    return null;
}

//TODO
function getTotalNumberOfEvents(guest) {
    return 0;
}

function getAllEventsOfType(guest, eventType) {
    return [];
}

function getAllEventsOfType(session, eventType) {
    var eventsOfType = [];
    for (var i = 0; i < session.events.length; i++) {
        var event = session.events[i];
        if (event.type === eventType) {
            eventsOfType.push(event);
        }
    }
    return eventsOfType;
}

function hasOrders(guest) {
    return guest.orders && guest.orders.length > 0;
}

function getMostRecentOrder(guest) {
    for (let i = 0; i < guest.orders.length; i++) {
        return guest.orders[i];
    }
    return null;
}

//Orders

function hasOrders(guest) {
    return guest.orders && guest.orders.length > 0;
}

function getMostRecentOrder(guest) {
    for (let i = 0; i < guest.orders.length; i++) {
        return guest.orders[i];
    }
    return null;
}

function getMostRecentOrderDate(guest) {
    const mostRecentOrder = getMostRecentOrder(guest);
    if (mostRecentOrder) {
        return new Date(mostRecentOrder.orderedAt);
    }
    return null;
}

// Segments

function getSegmentMemberships(guest) {
    const segmentMemberships = [];
    for (let i = 0; i < guest.segmentMemberships.length; i++) {
        segmentMemberships.push(guest.segmentMemberships[i].name);
    }
    return segmentMemberships;
}

function isInSegment(guest, segmentName) {
    for (let i = 0; i < guest.segmentMemberships.length; i++) {
        if (guest.segmentMemberships[i].name === segmentName) {
            return true;
        }
    }
    return false;
}



module.exports = {
    getTotalNumberOfEvents, getAllEventsOfType, getAllEventsOfType, hasOrders, getMostRecentOrder, getNumberOfSessions, getMostRecentWebSession, getCurrentWebSession, sessionContainsEventOfType, getNumberOfEventsInSession, getMostRecentAbandonedSession, getDataExtensionWithName, getDataExtensionValue, getDataExtensionValue, getMapFromDataExtension, getFirstEventOfType, hasOrders, getMostRecentOrder, getMostRecentOrderDate, getSegmentMemberships, isInSegment
};
