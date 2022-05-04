import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { SafeAir } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';

import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import { RestaurantsInfo } from "../../restaurants/components/restaurant-info-card.component";

import { FavouritesContext } from '../../../services/favourites/favourites.context';

const NoFavouritesArea = styled(SafeAir)`
    align-items: center;
    justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {

    const { favourites } = useContext(FavouritesContext);

    return favourites.length ? (
        <SafeAir>

            <RestaurantList 
                data={ favourites }
                renderItem={ ({ item }) => {

                    return (
                    <TouchableOpacity onPress={ () => navigation.navigate('RestaurantsDetail', { item }) }>
                        <RestaurantsInfo restaurant={ item } />
                    </TouchableOpacity>
                    )
                } }
                keyExtractor={ (item) => `${item.icon} + ${item.name} - number${Math.floor(Math.random() *(10-1))}` }
                contentContainerStyle={{ padding: 16 }}
            />

        </SafeAir>
    ) 

    :

    (
        <NoFavouritesArea>
            <Text>No Favorites Yet</Text>
        </NoFavouritesArea>
    )

}