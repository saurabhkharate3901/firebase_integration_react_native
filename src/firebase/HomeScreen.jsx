import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { logEvent, startScreenTimer, logScreenTime } from './firebase';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        logEvent('HomeScreen', 'view', 'UserNavigation');
        startScreenTimer('HomeScreen');
        return () => {
            logScreenTime('HomeScreen');
        };
    }, []);

    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => {
                    logEvent('HomeScreen', 'button_click', 'GoToProfile');
                    navigation.navigate('ProfileScreen');
                }}
            />
            <Text>Map</Text>

        </View>
    );
};

export default HomeScreen;
