import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class CoffeeDrinkScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            serving_size: 0,
            caffeine_serving: 0,
        };
    }

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
                </View>
            </View>
        );
    }
}
