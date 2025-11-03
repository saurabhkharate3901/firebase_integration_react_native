import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { logEvent, startScreenTimer, logScreenTime } from './firebase';

const ProfileScreen = ({ navigation }) => {
    useEffect(() => {
        logEvent('ProfileScreen', 'view', 'UserNavigation');
        startScreenTimer('ProfileScreen');

        return () => {
            logScreenTime('ProfileScreen');
        };
    }, []);

    return (
        <View>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => {
                    logEvent('HomeScreen', 'button_click', 'GoToHome');
                    navigation.navigate('HomeScreen');
                }}
            />
        </View>
    );
};

export default ProfileScreen;
