import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';

const FavouritesWrapper = styled.View`
    padding: 4px 10px;
`;

const SpaceBar = styled.View`
    margin: 4px 16px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {

    if(!favourites.length){
        return null;
    }

    return (
        <FavouritesWrapper>
    
            <SpaceBar>
                <Text variant="caption">Favourites</Text>
            </SpaceBar>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    
                { favourites.map( restaurant => {
                    const key = restaurant.name.split(" ").join('');
    
                    return (
                        <SpaceBar key={ key } >
                            <TouchableOpacity 
                                onPress={ () => onNavigate('RestaurantsDetail', { item: restaurant }) }
                            >
                                <CompactRestaurantInfo restaurant={ restaurant } />
                            </TouchableOpacity>
                        </SpaceBar>
                    )
                } ) }
            </ScrollView>
        </FavouritesWrapper>
    );
}
