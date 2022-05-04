import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, View, Pressable } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { SafeAir } from '../../../components/utility/safe-area.component';
import { FadeInView } from '../../../components/animations/fade.animation';

import { RestaurantsInfo } from '../components/restaurant-info-card.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { Search } from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

import { RestaurantList } from '../components/restaurant-list.styles';

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
                <FadeInView>
                  <RestaurantsInfo restaurant={ item } />
                </FadeInView>
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
  