import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar, StyleSheet, View, FlatList, Pressable } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { SafeAir } from '../../../components/utility/safe-area.component';

import { RestaurantsInfo } from '../components/restaurant-info-card.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { Search } from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

export const RestaurantsScreen = ({ navigation }) => {

  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);

  const { favourites } = useContext( FavouritesContext );

  return (
    <SafeAir>
      <Search 
        isFavouritesToggled={ isToggled } 
        onFavouritesToggle={ () => setIsToggled(!isToggled) } 
      />

      { isToggled && <FavouritesBar favourites={ favourites } onNavigate={ navigation.navigate } /> }

      { isLoading ? 
        (
          <View style={ styles.loader }>
            <ActivityIndicator animating={true} size="large" color={Colors.blue300} /> 
          </View>
        )
        :
        <RestaurantList 
        data={ restaurants }
        renderItem={ ({ item }) => {

          return (
            <Pressable onPress={ () => navigation.navigate('RestaurantsDetail', { item }) }>
              <RestaurantsInfo restaurant={ item } />
            </Pressable>
          )
        } }
        keyExtractor={ (item) => `${item.icon} + ${item.name} - number${Math.floor(Math.random() *(10-1))}` }
        contentContainerStyle={{ padding: 16 }}
      />
      }

    </SafeAir>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      marginTop: StatusBar.currentHeight,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%'
    }
  });
  