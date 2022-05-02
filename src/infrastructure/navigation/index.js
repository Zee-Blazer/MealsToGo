import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppNavigation } from './app.navigation';

import { NavigationContainer } from '@react-navigation/native';

import { AccountNavigator } from './account.navigation';

import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Navigation = () => {

    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <NavigationContainer independent={true}>
            { isAuthenticated ? <AppNavigation /> : <AccountNavigator /> }
        </NavigationContainer>
    )
}
