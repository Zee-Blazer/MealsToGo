import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';

import { RestaurantsInfo } from '../components/restaurant-info-card.component';

import { SafeAir } from '../../../components/utility/safe-area.component';

export const RestaurantsDetail = ({ route }) => {

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const { item } = route.params;

    return (
        <SafeAir>
            <RestaurantsInfo restaurant={ item } />

            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    // left={ (props) => <ListIcon {...props} icon="bread-slice" /> }
                    expanded={ breakfastExpanded }
                    onPress={ () => setBreakfastExpanded(!breakfastExpanded) }
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" /> 
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    // left={ (props) => <ListIcon {...props} icon="hamburger" /> }
                    expanded={ lunchExpanded }
                    onPress={ () => setLunchExpanded(!lunchExpanded) }
                >
                    <List.Item title="Burger w/ Fries" />
                    <List.Item title="Steak Sandwich" />
                    <List.Item title="Mushroom soup" />
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    // left={ (props) => <ListIcon {...props} icon="food-variant" /> }
                    expanded={ dinnerExpanded }
                    onPress={ () => setDinnerExpanded(!dinnerExpanded) }
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                    <List.Item title="Steak Frites" />
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    // left={ (props) => <ListIcon {...props} icon="cup" /> }
                    expanded={ drinksExpanded }
                    onPress={ () => setDrinksExpanded(!drinksExpanded) }
                >
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Modelo" />
                    <List.Item title="Coke" />
                    <List.Item title="Fanta" />
                    <List.Item title="Beer" />
                </List.Accordion>
            </ScrollView>

        </SafeAir>
    )
}