/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

// Models
import CoffeeDrinkModel from './models/CoffeeDrinkModel';

// Screens
import HomeScreen from './screens/HomeScreen';
import CoffeeDrinkScreen from './screens/CoffeeDrinkScreen';

const CoffeeDrink = new CoffeeDrinkModel();
CoffeeDrink.init();

const MainNavigator = createMaterialBottomTabNavigator(
    {
        Home: {screen: HomeScreen},
        CoffeeDrink: {screen: CoffeeDrinkScreen},
    },
    {
        initialRouteName: 'Home',
        activeColor: '#FFFFFF',
        inactiveColor: '#5D5D5D',
        barStyle: {backgroundColor: '#2F2F2F'},
    },
);

const App = createAppContainer(MainNavigator);

export default App;
