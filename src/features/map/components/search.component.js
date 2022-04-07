import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/location.context';

const ViewSearch = styled(View)`
  padding: ${ props => props.theme.space[3] };
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

const SearchBar = styled(Searchbar)`
  border-radius: 50px;
`;

export const Search = () => {

    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect( () => {
        setSearchKeyword(keyword);
    }, [ keyword ] )

    return (
        <ViewSearch>
            <SearchBar 
                placeholder='Search for a location'
                icon="map"
                value={ keyword }
                onSubmitEditing={ () => {
                    search(searchKeyword);
                } }
                onChangeText={ text => {
                    setSearchKeyword(text);
                } }
                onIconPress={ () => console.log("Pressed Icon") }
            />
      </ViewSearch>
    )
}