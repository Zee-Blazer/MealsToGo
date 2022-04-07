import React, { createContext, useState, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';


export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(() => {
        if(!keyword.length) return;
        locationRequest(keyword.toLocaleLowerCase())
        .then( locationTransform )
        .then( result => {
            const locate = result.results[0].geometry.location;
            const { lat, lng } = locate;
            const viewport = result.results[0].geometry.viewport;
            setIsLoading(false);
            setLocation({ lat, lng, viewport });
        } )
        .catch(err => {
            setIsLoading(false);
            setError(err);
        })
    }, [keyword]);
 
    return (
        <LocationContext.Provider value={{ 
            isLoading, 
            error, 
            location, 
            search: onSearch,
            keyword
        }}>
            { children }
        </LocationContext.Provider>
    )
}
