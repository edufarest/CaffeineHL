import React, {Component} from 'react';
import {Button, Image, Text, TouchableHighlight, View} from 'react-native';

const size = 75;

/*
background-color:#ffffff;
	border-radius:5px;
	border:1px solid #ebebeb;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:17px;
	padding:15px 15px;
	text-decoration:none;
 */

export default class DrinkButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: size,
                    borderRadius: 5,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#ebebeb',
                    // border: '1px solid #ebebeb',
                    margin: 15,
                }}>
                <Text style={{textAlign: 'center'}}>
                    {this.props.drinkName}
                </Text>
                <Image
                    style={{width: size, height: size, resizeMode: 'contain'}}
                    source={{uri: this.props.image}}
                />
            </View>
        );
    }
}
