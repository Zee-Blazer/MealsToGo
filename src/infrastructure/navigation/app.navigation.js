import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsNavigator } from './restaurants.navigation';

import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

    return (
        <FavouritesContextProvider>

          <LocationContextProvider>

            <RestaurantsContextProvider>

              <Tab.Navigator
                initialRouteName="Restaurants"
                screenOptions={{
                  tabBarActiveTintColor: '#e91e63',
                  headerShown: false
                }}
              >
                <Tab.Screen name="Restaurants" component={ RestaurantsNavigator } 
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="food" color={color} size={size} />
                    ),
                  }}
                />
                <Tab.Screen name="Map" component={ MapScreen } 
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <FontAwesome name="map-marker" size={ size } color={ color } />
                    ),
                  }}
                />
                <Tab.Screen name="Settings" component={ SettingsNavigator } 
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="settings" size={ size } color={ color } />
                    ),
                  }}
                />
              </Tab.Navigator>

            </RestaurantsContextProvider>

          </LocationContextProvider>

        </FavouritesContextProvider>
          
    )
}