import React from 'react';
import { View } from 'react-native';
import { Text } from "@gluestack-ui/themed";

const SettingsScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>
                This is a Account Page
            </Text>              
        </View>
    );
}

export default SettingsScreen;
