import React from 'react';

import { 
    AccountBackground, 
    AccountCover, 
    AccountContainer, 
    AuthButton,
    Spacer
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
    return <AccountBackground>
        <AccountCover />
        <AccountContainer>

            <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={ () => navigation.navigate("Login") }
            >Login</AuthButton>

            <Spacer />

            <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={ () => navigation.navigate("Register") }
            >Register</AuthButton>

        </AccountContainer>
    </AccountBackground>
}