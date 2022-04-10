import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        }catch(e){
            console.log("Error storing", e);
        }
    }

    const loadFavourites = async () => {
        try{
            const value = await AsyncStorage.getItem("@favourites");
            if(value !== null){
                setFavourites(JSON.parse(value));
            }
        } catch(e) {
            console.log("Error loading", e)
        }
    }

    const add = (restaurant) => {
        console.log("clicked")
        setFavourites([...favourites, restaurant]);
    }

    useEffect( () => {
        loadFavourites();
    }, [] )

    useEffect( () => {
        saveFavourites(favourites);
    }, [favourites] );

    return <FavouritesContext.Provider value={{
        favourites,
        addToFavourites: add
    }} >
        { children }
    </FavouritesContext.Provider>
}
