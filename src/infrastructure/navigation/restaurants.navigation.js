import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantsDetail } from '../../features/restaurants/screens/details.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            headerMode="none" 
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
            }}
        >
            <RestaurantStack.Screen 
                name="Restaurants" 
                component={ RestaurantsScreen } 
            />

            <RestaurantStack.Screen 
                name="RestaurantsDetail"
                component={ RestaurantsDetail }
            />
        </RestaurantStack.Navigator>
    )
}