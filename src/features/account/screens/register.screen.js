import React, { useState, useContext } from 'react';

import { Text } from '../../../components/typography/text.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { 
    AccountBackground,
    AccountContainer,
    AccountCover, 
    InputElement,
    AuthButton,
    Spacer,
    Title,
    ErrorContainer
} from '../components/account.styles';


export const RegisterScreen = ({ navigation }) => {
    
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
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
                    value={ pwd } 
                    autoCapitalize="none"
                    onChangeText={ setPwd }
                />

                <InputElement 
                    placeholder='Confirm Password' 
                    secureTextEntry 
                    value={ confirmPwd } 
                    autoCapitalize="none"
                    onChangeText={ setConfirmPwd }
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
                        icon="email-outline" 
                        mode='contained'
                        onPress={ () => onRegister(email, pwd, confirmPwd) }
                    >Register</AuthButton>
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