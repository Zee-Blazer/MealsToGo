import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { Text } from '../../../components/typography/text.component';

import { List, Avatar } from 'react-native-paper';
import  { SafeAir } from "../../../components/utility/safe-area.component";

import { Spacer } from '../../account/components/account.styles';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsItem = styled(List.Item)`
    padding: ${ props => props.theme.space[3] }
`;

const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {

    const { onLogout, user } = useContext(AuthenticationContext);

    return (
        <SafeAir> 

            <AvatarContainer>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                <Spacer>
                    <Text variant="label">{ user.email }</Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem 
                    title="Favourites"
                    description="View your favourites"
                    left={ props => <List.Icon {...props} color="black" icon="heart" /> }
                    onPress={ () => navigation.navigate('Favourites') }
                />

                <SettingsItem 
                    title="Logout"
                    left={ props => <List.Icon {...props} color="black" icon="logout" /> }
                    onPress={ onLogout }
                />
            </List.Section>
        </SafeAir>
    )
}