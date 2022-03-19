import React from 'react';
import styled from 'styled-components/native'
import { View, Text, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const Para = styled.Text`
    color: red;
    padding-top: 6px;
`;

export const RestaurantsInfo = ({ restaurant = {} }) => {
    
    const { 
        name = "Chickenr Republic", 
        icon, 
        photos = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCe2_qZneiTUkw64y19r8um5CjRiBS6KavQ&usqp=CAU" ], 
        address = "Marraba road", 
        isOpenNow = true, 
        rating = 4, 
        isCloseTemporarily 
    } = restaurant;

    return (
        <>
            <Card elevation={5} style={ styles.cardContainer }>

                <Card.Cover key={name} style={ styles.cover } source={{ uri: photos[0] }}/>

                <Card.Content>
                    <Para>{ name }</Para>
                </Card.Content>

            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 12,
        borderRadius: 7
    },
    cover: {
        padding: 9,
    }
});