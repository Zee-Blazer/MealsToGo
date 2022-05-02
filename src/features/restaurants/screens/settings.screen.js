import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { SafeAir } from '../../../components/utility/safe-area.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const SettingsScreen = () => {

    const { onLogout } = useContext(AuthenticationContext);

    return (
        <SafeAir> 
            <Text>The Settings Screen</Text> 
            <Button title="Logout" onPress={ () => onLogout() } />
        </SafeAir>
    )
}