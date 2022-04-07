import React from 'react';
import styled from 'styled-components/native'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

import { Spacer } from '../../../components/spacer/spacer.component';
import { 
        Icon, 
        RestaurantCard, 
        RestaurantCardCover, 
        Address, 
        Rating, 
        Section, 
        SectionEnd, 
        Open, 
        Para, 
        Info 
    } from './restaurant-info-card.styles';



export const RestaurantsInfo = ({ restaurant = {} }) => {
    
    const { 
        name = "Chicken Republic", 
        icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCe2_qZneiTUkw64y19r8um5CjRiBS6KavQ&usqp=CAU", 
        photos = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCe2_qZneiTUkw64y19r8um5CjRiBS6KavQ&usqp=CAU" ], 
        address = "Marraba road", 
        isOpenNow = true, 
        rating = 4, 
        isCloseTemporarily,
        placeId
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    // console.log(restaurant);

    return (
        <>
            <RestaurantCard elevation={5}>

                <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>

                <Card.Content>
                    <Info />
                    <Para>{ name }</Para>

                    <Section>
                        <Rating>
                            {
                                ratingArray.map( (_, i) => 
                                    (
                                        <SvgXml 
                                            key={`star-${placeId}-${i}`} 
                                            xml={ star } 
                                            width={20} 
                                            height={20}
                                        />
                                    ) 
                                )
                            }
                        </Rating>

                        <SectionEnd>
                            { isCloseTemporarily && (
                                <Text variant="label" style={{ color: 'red' }}>
                                    CLOSED TEMPORARILY
                                </Text>
                            ) }

                            { isOpenNow && <SvgXml xml={open} width={20} height={20} /> }

                            <View style={ styles.spacer } />
                            <Icon source={{ uri: icon }} />
                        </SectionEnd>
                    </Section>

                    <Address>{ address }</Address>
                </Card.Content>

            </RestaurantCard>
        </>
    )
}

const styles = StyleSheet.create({
    cover: {
        padding: 9,
    },
    spacer: {
        marginLeft: 12
    }
});

//{
    // { isOpen && <Open xml={open} width={20} height={20} /> }
// }