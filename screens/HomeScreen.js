import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';

export default class HomeScreen extends Component {
    static navigationOptions = {
        // tabBarIcon: ({focused, color, size}) => {
        //     return <Ionicons name="coffee" size={32} color="black"/>;
        // },
    };

    render() {
        return (
            <View>
                <Text>This is the home screen</Text>
            </View>
        );
    }
}
