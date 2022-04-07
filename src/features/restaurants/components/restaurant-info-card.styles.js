import styled from 'styled-components/native';
import { Card, Paragraph } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';

const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;

const RestaurantCard = styled(Card)`
    margin-top: 16px;
    border-radius: 7px;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 12px;
`;

const Para = styled.Text`
    font-family: ${ props => props.theme.fonts.heading };
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${props => props.theme.space[3]};
`;

const Address = styled.Text`
    font-family: ${ props => props.theme.fonts.body };
    font-size: ${props => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${props => props.theme.space[2]};
    padding-bottom: ${props => props.theme.space[2]};
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Open = styled(SvgXml)`
    flex-direction: row;
`;


export {
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
};