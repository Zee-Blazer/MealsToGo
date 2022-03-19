import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantsInfo } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.search }>
        <Searchbar 
          style={ styles.searchBar }
          placeholder='Search'
          onIconPress={ () => console.log("Pressed Icon") }
        />
      </View>
      
      <View style={ styles.list }>
        <RestaurantsInfo />
        <RestaurantsInfo />
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      marginTop: StatusBar.currentHeight,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    search: {
      // flex: 0.1,
      padding: 12,
    },
    searchBar: {
      borderRadius: 50
    },
    list: {
      flex: 1,
      padding: 12,
      backgroundColor: 'blue'
    },
  });
  