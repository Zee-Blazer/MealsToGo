import React from 'react';

import { 
    AccountBackground, 
    AccountCover, 
    AccountContainer, 
    AuthButton,
    Spacer,
    Title
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
    return <AccountBackground>
        <AccountCover />

        <Title>Meals To Go</Title>
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