import React, { useState, useContext } from 'react';

import { Text } from '../../../components/typography/text.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { 
    AccountBackground, 
    AccountCover,
    AccountContainer,
    AuthButton,
    InputElement,
    Spacer,
    Title,
    ErrorContainer
} from '../components/account.styles';

export const LoginScreen = ({ navigation }) => {

    const { onLogin, isLoading, error } = useContext(AuthenticationContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(error);

    return (
        <AccountBackground>
            <AccountCover />

            <Title>Meals To Go</Title>

            <AccountContainer>
                
                <InputElement 
                    placeholder="Email" 
                    value={ email } 
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={ setEmail } 
                />

                <InputElement 
                    placeholder='Password' 
                    secureTextEntry 
                    value={ password } 
                    autoCapitalize="none"
                    onChangeText={ setPassword }
                />

                <Spacer />

                { err && (
                    <ErrorContainer>
                        <Text variant="error">{ err }</Text>
                    </ErrorContainer>
                ) }

                <Spacer />

                { !isLoading ? 
                    <AuthButton 
                        icon="lock-open-outline" 
                        mode='contained'
                        onPress={ () => onLogin(email, password) }
                    >Login</AuthButton>
                    :
                    <ActivityIndicator animating={true} color={Colors.blue800} />
                }

            </AccountContainer>

            <Spacer />

            <AuthButton mode="contained" onPress={ () => navigation.goBack() }>
                Back
            </AuthButton>

        </AccountBackground>
    )
}