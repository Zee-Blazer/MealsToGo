import React, { useState, useEffect } from 'react';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

// Firebase initialize config
import firebase from 'firebase/compat/app';

import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';

import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';


export default function App() {

  const [oswaldLoaded] = useOswald({ Oswald_400Regular, });
  const [latoLoaded] = useLato({ Lato_400Regular, });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCOPAAvhxnb9xTEq27U5Nb9OGvGy-p580E",
    authDomain: "mealstogo-nigeria.firebaseapp.com",
    projectId: "mealstogo-nigeria",
    storageBucket: "mealstogo-nigeria.appspot.com",
    messagingSenderId: "1054606048271",
    appId: "1:1054606048271:web:bdee9b8f8ea2fb6384777a"
  };
  
  // Checking if Firebase has been initialized
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  else{
    firebase.app();
  }
  

  return (
    <>
      <ThemeProvider theme={ theme }>
        
        <AuthenticationContextProvider>

          <Navigation />
          
        </AuthenticationContextProvider>

      </ThemeProvider>
      
      <ExpoStatusBar style='auto' />
    </>
  );
}

