import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

// firebase
import { initializeApp } from "firebase/app";

import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';

import { Navigation } from './src/infrastructure/navigation';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';


// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCOPAAvhxnb9xTEq27U5Nb9OGvGy-p580E",
  authDomain: "mealstogo-nigeria.firebaseapp.com",
  projectId: "mealstogo-nigeria",
  storageBucket: "mealstogo-nigeria.appspot.com",
  messagingSenderId: "1054606048271",
  appId: "1:1054606048271:web:bdee9b8f8ea2fb6384777a"
};

const app = initializeApp(firebaseConfig);

export default function App() {

  const [oswaldLoaded] = useOswald({ Oswald_400Regular, });
  const [latoLoaded] = useLato({ Lato_400Regular, });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <>
      <ThemeProvider theme={ theme }>
        
        <FavouritesContextProvider>

          <LocationContextProvider>

            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>

          </LocationContextProvider>

        </FavouritesContextProvider>

      </ThemeProvider>
      
      <ExpoStatusBar style='auto' />
    </>
  );
}

