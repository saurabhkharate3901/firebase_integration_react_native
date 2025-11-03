import analytics from '@react-native-firebase/analytics';

/**
 * Log an event to Firebase Analytics.
 * @param {string} screenName - Name of the screen.
 * @param {string} eventName - Name of the event.
 * @param {string} featureName - Feature associated with the event.
 */
export const logEvent = async (screenName, eventName, featureName) => {
    try {
        await analytics().logEvent(eventName, {
            screen_name: screenName,
            feature_name: featureName,
            timestamp: new Date().toISOString(),
        });
        console.log(`Logged event: ${eventName} on ${screenName} for ${featureName}`);
    } catch (error) {
        console.error('Error logging event:', error);
    }
};





let screenStartTime = {};

/**
 * Start tracking time for a screen.
 * @param {string} screenName - Name of the screen.
 */
export const startScreenTimer = (screenName) => {
    screenStartTime[screenName] = Date.now();
};

/**
 * Log time spent on a screen.
 * @param {string} screenName - Name of the screen.
 */
export const logScreenTime = async (screenName) => {
    if (!screenStartTime[screenName]) return;

    const timeSpent = Date.now() - screenStartTime[screenName];
    delete screenStartTime[screenName];

    try {
        await analytics().logEvent('screen_time', {
            screen_name: screenName,
            duration_ms: timeSpent,
            timestamp: new Date().toISOString(),
        });
        console.log(`Logged time spent on ${screenName}: ${timeSpent}ms`);
    } catch (error) {
        console.error('Error logging screen time:', error);
    }
};
