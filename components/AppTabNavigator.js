import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';

export const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/home.png")} style={{width:20, height:20}}/>,
            tabBarLabel: "HOME SCREEN"
        }
    },
    Exchange: {
        screen: ExchangeScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/exchange.png")} style={{width:20, height:20}}/>,
            tabBarLabel: "EXCHANGE SCREEN"
        }
    }
})