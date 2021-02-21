import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    ImageBackground,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
} from 'react-native';

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
                    <View style={styles.box}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                            placeholder='Type your name ...'
                        />
                        <Text style={styles.text}>Choose a Background Color:</Text>
                        <View style={styles.colorContainer}>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel='Black background'
                                accessibilityHint='Choose background color'
                                accessibilityRole='button'
                                style={styles.color1}
                                onPress={() => { this.setState({ color: '#090C08' }) }}
                            >
                            </TouchableOpacity>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel='Purple background'
                                accessibilityHint='Choose background color'
                                accessibilityRole='button'
                                style={styles.color2}
                                onPress={() => { this.setState({ color: '#474056' }) }}
                            >
                            </TouchableOpacity>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel='Grey background'
                                accessibilityHint='Choose background color'
                                accessibilityRole='button'
                                style={styles.color3}
                                onPress={() => { this.setState({ color: '#8A95A5' }) }}
                            >
                            </TouchableOpacity>
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel='Green background'
                                accessibilityHint='Choose background color'
                                accessibilityRole='button'
                                style={styles.color4}
                                onPress={() => { this.setState({ color: '#B9C6AE' }) }}
                            >
                            </TouchableOpacity>
                        </View>
                        <Button
                            accessible={true}
                            accessibilityLabel='Chat Button'
                            accessibilityHint='Navigate to chat room'
                            accessibilityRole='button'
                            color='#b094c2'
                            onPress={() => {
                                this.props.navigation.navigate('Chat', { name: this.state.name, color: this.state.color })
                            }}
                            title="Chat"
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    colorContainer: {
        flexDirection: 'row',
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 10
    },
    box: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 5,
        margin: 250,
        padding: 10,
        width: '88%',
        backgroundColor: '#fff',
        textAlign: 'center',

    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#757083',
        marginTop: 20,
        textAlign: 'center',
        opacity: 50
    },
    image: {
        flex: 1
    },
    textInput: {
        height: 50,
        width: '90%',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: '300',
        opacity: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
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