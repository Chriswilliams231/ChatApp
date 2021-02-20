import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

//import image background
const image = require('../assets/Background-Image.png')
export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            color: ''
        };
    }

    render() {
        return (
            <ImageBackground source={image} style={styles.image}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.title}>Start Chat</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 250 }}
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                        placeholder='Type your name ...'
                    />
                    <Text style={styles.text}>Choose a Background Color:</Text>
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.color1}
                            onPress={() => { this.setState({ color: '#090C08' }) }}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.color2}
                            onPress={() => { this.setState({ color: '#474056' }) }}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.color3}
                            onPress={() => { this.setState({ color: '#8A95A5' }) }}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.color4}
                            onPress={() => { this.setState({ color: '#B9C6AE' }) }}
                        >
                        </TouchableOpacity>
                    </View>
                    <Button
                        color='#b094c2'
                        onPress={() => {
                            this.props.navigation.navigate('Chat', { name: this.state.name, color: this.state.color })
                        }}
                        title="Chat"
                    />

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 200,
        margin: 10
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#757083',
        marginTop: 20,
        opacity: 50
    },
    image: {
        flex: 1
    },
    color1: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#090C08',
        marginRight: 10,
        marginTop: 10,
    },
    color2: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#474056',
        marginRight: 10,
        marginTop: 10,
    },
    color3: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#8A95A5',
        marginRight: 10,
        marginTop: 10,
    },
    color4: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#B9C6AE',
        marginRight: 10,
        marginTop: 10,
    },
    button: {
        color: '#FFFFFF',

    }
})