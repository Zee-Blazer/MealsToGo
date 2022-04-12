import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Main" 
            component={ () => <Text>Main Screen</Text> } 
        />

        <Stack.Screen 
            name="Login" 
            component={ () => <Text>Login Screen</Text> } 
        />
    </Stack.Navigator>
)