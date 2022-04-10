import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

const ViewSearch = styled(View)`
  padding: ${ props => props.theme.space[3] };
`;

const SearchBar = styled(Searchbar)`
  border-radius: 50px;
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {

    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect( () => {
        setSearchKeyword(keyword);
    }, [ keyword ] )

    return (
        <ViewSearch>
            <SearchBar 
                icon={ isFavouritesToggled ? 'heart' : 'heart-outline' }
                placeholder='Search for a location'
                value={ keyword }
                onSubmitEditing={ () => {
                    search(searchKeyword);
                } }
                onChangeText={ text => {
                    setSearchKeyword(text);
                } }
                onIconPress={ onFavouritesToggle }
            />
      </ViewSearch>
    )
}