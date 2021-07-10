import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase  from 'firebase';
import db from '../config';

export default class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: '',
            firstName: '',
            lastName: '',
            isModalVisible: 'false' 
        }
    }
    
    render(){
        return(
            <View style = {styles.mainview}>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}></View>
                {this.showModal()}

                <TextInput style = {styles.loginandsignup} keyboardType = 'email-address' placeholder = "Email Id" onChangeText = {(text) => {
                    this.setState({
                        emailId: text
                    });
                }}/>

                <TextInput style = {styles.loginandsignup} secureTextEntry = {true} placeholder = "Password" onChangeText = {(text) => {
                    this.setState({
                        password: text
                    });
                }}/>

                <TouchableOpacity style = {styles.loginbutton} onPress = {() => {
                    this.userLogin(this.state.emailId, this.state.password);
                }}><Text style = {{fontSize: 20}}>Login</Text></TouchableOpacity>

                <Text></Text>

                <TouchableOpacity style = {styles.loginbutton} onPress = {() => 
                    this.setState({
                        isModalVisible: true
                    })
                }><Text style = {{fontSize: 20}}>Sign up</Text></TouchableOpacity>

            </View>
        );
    }

    userLogin = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() => {
            this.props.navigation.navigate('main')
        })
        .catch((error) => {
            var code = error.code;
            var message = error.message;
            return Alert.alert(code + " " + message)
        })
    }

    userSignUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(() => {
            return Alert.alert('User added successfully',
                '',
                [
                {text: 'ok', onPress: () => this.setState({
                    "isModalVisible": false
                })}
            ]);
        })
        .catch((error) => {
            var code = error.code;
            var message = error.message;
            return Alert.alert(code + " " + message)
        }) 
    }

    showModal = () => {
        return(
            <Modal animationType = "fade"
            transparent = {true}
            visible = {this.state.isModalVisible}
            >
            <View style = {styles.modalContainer}>
                <ScrollView style = {{width: '100%'}}>
                    <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>

                        <View style = {{alignItems: 'center'}}>
                            <Text style = {{alignItems: 'center', fontSize: 20}}>Registration</Text>
                        </View>

                        <Text></Text>

                        <TextInput style = {styles.formtextinput} placeholder = {"First Name"}
                        maxLength = {20} onChangeText = {(text)=>{
                            this.setState({
                                firstName: text
                            })
                        }}/>
                        
                        <TextInput style = {styles.formtextinput} placeholder = {"Last Name"}
                        maxLength = {20} onChangeText = {(text)=>{
                            this.setState({
                                lastName: text
                            })
                        }}/>
                        
                        <TextInput style = {styles.formtextinput} placeholder = {"Email Id"}
                        keyboardType = {'email-address'} onChangeText = {(text)=>{
                            this.setState({
                                emailId: text
                            })
                        }}/>
                        
                        <TextInput style = {styles.formtextinput} placeholder = {"Password"}
                        secureTextEntry = {true} onChangeText = {(text)=>{
                            this.setState({
                                password: text
                            })
                        }}/>

                        <Text></Text>
                        
                        <View style = {styles.modalBackButton}>
                            <TouchableOpacity style = {styles.modalbutton}
                            onPress = {() => this.userSignUp(this.state.emailId, this.state.password)}>
                                <Text style = {styles.registarButtonText}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Text></Text>
                        
                        <View style = {styles.modalBackButton}>
                            <TouchableOpacity style = {styles.modalbutton}
                            onPress = {() => this.setState({
                                "isModalVisible": false
                            })}>
                                <Text style = {{color: '#FF5722'}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View></Modal>
        )
    }
}

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginandsignup: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#000000',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    },
    loginbutton: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderColor: '#000000',
        alignItems: 'center',
        borderRadius: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#ffff',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 80,
        marginBottom: 80
    },
    formtextinput: {
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderColor: '#000000',
        paddingLeft: 10,
        paddingTop: 20,
        fontSize: 15
    },
    modalbutton: {
        width: 80,
        height: 40,
        borderWidth: 2,
        borderColor: '#000000',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 5
    }
})