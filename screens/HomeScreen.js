import React, {Component} from 'react';
import {Button, Text, TouchableHighlight, View} from 'react-native';

import DrinkButton from "../components/DrinkButton";

import CoffeeDrinkModel from '../models/CoffeeDrinkModel';

// import {Ionicons} from '@expo/vector-icons';

export default class HomeScreen extends Component {
    static navigationOptions = {
        // tabBarIcon: ({focused, color, size}) => {
        //     return <Ionicons name="coffee" size={32} color="black"/>;
        // },
    };

    constructor(props) {
        super(props);

        this.state = {
            drinks: [],
        };

        this.props.navigation.addListener('didFocus', payload => {
            console.log('got reloaded');
            this.fetchDrinks();
        });

        this.fetchDrinks();
    }

    fetchDrinks() {
        let drinkModel = new CoffeeDrinkModel();

        console.log("Fetching drinks");

        drinkModel.listDrinks((drinks) => {
            this.setState({drinks: drinks});
            console.log("\n\n\nDRINKS\n\n");
            console.log(this.state.drinks)
        });


    }

    deleteDrink(id) {
        console.log('Deleting ' + id);

        let drinkModel = new CoffeeDrinkModel();

        drinkModel.deleteDrink(id).then(
            this.setState({
                drinks: this.state.drinks.filter(drink => {
                    return drink.id !== id;
                }),
            }),
        );
    }

    render() {
        // this.fetchDrinks();

        return (
            <View>
                <Text>Current Caffeine: 0 mg</Text>

                <View>
                    {this.state.drinks.map((drink) => {
                            return (<TouchableHighlight
                                key={drink.id}
                                onLongPress={() => {
                                    this.deleteDrink(drink.id);
                                }}>
                                {/* Create drink button here*/}
                                <DrinkButton
                                    title={drink.name}
                                />
                            </TouchableHighlight>);
                    })}
                </View>
            </View>
        );
    }
}
