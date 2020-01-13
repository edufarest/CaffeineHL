import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

import CoffeeDrinkModel from '../models/CoffeeDrinkModel';

export default class CoffeeDrinkScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            serving_size: 0,
            caffeine_serving: 0,
        };
    }

    createDrink = () => {
        const name = this.state.name || ' ';
        const serving_size = this.state.serving_size || 0;
        const caffeine_serving = this.state.caffeine_serving || 0;

        let drinkModel = new CoffeeDrinkModel();

        // drinkModel.init();
        drinkModel
            .createDrink(name, serving_size, caffeine_serving)
            .then(() => {
                console.log('Created Drink');
                // Send back to home screen after creation
                this.props.navigation.navigate('Home');
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <View>
                <Text>Add your drinks here</Text>
                <View>
                    <TextInput
                        placeholder="Drink Name"
                        onChangeText={text => {
                            this.setState({name: text});
                        }}
                        value={this.state.name}
                    />
                    <Text>Serving Size (ml)</Text>
                    <TextInput
                        placeholder="Serving size"
                        keyboardType={'numeric'}
                        onChangeText={num => {
                            this.setState({serving_size: num});
                        }}
                        value={this.state.serving_size.toString()}
                    />
                    <Text>Caffeine per Serving (mg)</Text>
                    <TextInput
                        onChangeText={num => {
                            this.setState({caffeine_serving: num});
                        }}
                        keyboardType={'numeric'}
                        value={this.state.caffeine_serving.toString()}
                    />
                    <Button title="Create Drink" onPress={this.createDrink} />
                </View>
            </View>
        );
    }
}
