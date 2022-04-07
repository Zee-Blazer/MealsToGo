import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsNavigator } from './restaurants.navigation';

import { SettingsScreen } from '../../features/restaurants/screens/settings.screen';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

    return (
        <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Restaurants"
                headerMode="none" 
                screenOptions={{
                  tabBarActiveTintColor: '#e91e63',
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
                <Tab.Screen name="Settings" component={ SettingsScreen } 
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="settings" size={ size } color={ color } />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
    )
}