import React, { Component } from 'react';
import { View, Text, Button, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

const firebase = require('firebase');
require('firebase/firestore');

export default class Chat extends React.Component {
    constructor() {
        super(),
            this.state = {
                messages: [],
                uid: 0,
                user: {
                    _id: '',
                    name: '',
                    avatar: '',
                },
                image: null
            };

        const firebaseConfig = {
            apiKey: "AIzaSyA-qOL8Ku_BUEV7ZT-Kt01sGpQm4hRFrAM",
            authDomain: "chatapp-2-3c711.firebaseapp.com",
            projectId: "chatapp-2-3c711",
            storageBucket: "chatapp-2-3c711.appspot.com",
            messagingSenderId: "873180423101",
            appId: "1:873180423101:web:6f68197db5b6f9d410a8d4",
            measurementId: "G-ZCQ8B3RHV0"
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.referenceChatMessages = firebase.firestore().collection("messages");
    }




    componentDidMount() {
        this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
            this.setState({
                uid: user.uid,
                messages: [],
            });
            this.unsubscribe = this.referenceChatMessages
                .orderBy("createdAt", "desc")
                .onSnapshot(this.onCollectionUpdate);
        });
    }
    // Updates messages state

    onCollectionUpdate = (querySnapshot) => {
        const messages = [];
        // Iterate through each document
        querySnapshot.forEach((doc) => {
            let data = doc.data(); // Grabs QueryDocumentSnapshot's data
            messages.push({
                _id: data._id,
                text: data.text,
                createdAt: data.createdAt.toDate(),
                user: data.user
            });
        });
        this.setState({ messages });
    };
    componentWillUnmount() {
        // Stops listening for changes
        this.authUnsubscribe();
    }
    addMessage = () => {
        const message = this.state.messages[0];
        this.referenceChatMessages.add({
            _id: message._id,
            text: message.text || "",
            createdAt: message.createdAt,
            user: message.user,
            image: message.image || null,
            location: message.location || null,
        });
    };
    saveMessages = async () => {
        try {
            await AsyncStorage.setItem(
                "messages",
                JSON.stringify(this.state.messages)
            );
        } catch (error) {
            console.log(error.message);
        }
    };


    onSend = (messages = []) => {
        this.setState(
            (previousState) => ({
                messages: GiftedChat.append(previousState.messages, messages),
            }),
            () => {
                this.addMessage();
                this.saveMessages();
            }
        );
    };

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#1E3AEA'
                    },
                }} />
        );
    }
    render() {
        let name = this.props.route.params.name;
        let color = this.props.route.params.color;
        this.props.navigation.setOptions({ title: name });

        return (
            <View style={{ flex: 1, backgroundColor: color }}>
                <GiftedChat
                    renderBubble={this.renderBubble.bind(this)}
                    messages={this.state.messages}
                    onSend={(messages) => this.onSend(messages)}
                    user={{
                        id: this.state.uid,
                        avatar: 'https://placeimg.com/140/140/any',
                        name: name,
                    }} />
                {Platform.OS === "android" ? (
                    <KeyboardAvoidingView behavior="height" />
                ) : null}
            </View>
        );
    };
}