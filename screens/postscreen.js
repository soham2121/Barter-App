import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default class postscreen extends React.Component{
    constructor(){
        super();
        this.state = {
            give: '',
            want: '',
            amountgive: '',
            amountwant: '',
        }
    }

    postbutton = () => {
        if(this.state.give != '' && this.state.amountgive != '' && this.state.want != '' && this.state.amountwant != ''){
            return Alert.alert("Posted successfully")
        }
        else{
            return Alert.alert("Filling everything is necessary")
        }
    }

    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                    <Text style = {styles.title}>Post Trade</Text>
                </View>

                <View style = {{alignItems: 'center', paddingTop: 50}}>
                    <TextInput style = {styles.textinputs} placeholder = {"Item To Trade"} maxLength = {20}
                        onChangeText = {(text)=>{
                            this.setState({
                                give: text
                            })
                        }}
                    />

                    <TextInput style = {styles.textinputs} placeholder = {"Amount Of Your Item"} maxLength = {5}
                        onChangeText = {(text)=>{
                            this.setState({
                                amountgive: text
                            })
                        }}
                    />

                    <TextInput style = {styles.textinputs} placeholder = {"Item You Want"} maxLength = {20}
                        onChangeText = {(text)=>{
                            this.setState({
                                want: text
                            })
                        }}
                    />

                    <TextInput style = {styles.textinputs} placeholder = {"Amount Of The Item You Want"} maxLength = {5}
                        onChangeText = {(text)=>{
                            this.setState({
                                amountwant: text
                            })
                        }}
                    />
                </View>

                <View style = {{paddingLeft: 20}}>
                    <Text style = {{paddingTop: 50, textAlign: 'center', fontSize: 20}}>Post will look like: </Text>
                    <Text style = {{fontSize: 15, paddingTop: 10, textAlign: 'center'}}>I have {this.state.amountgive} {this.state.give} that i can trade for {this.state.amountwant} {this.state.want}</Text>
                </View>

                <View style = {{paddingTop: 50}}>
                    <TouchableOpacity style = {styles.postbutton} visible = {this.state.visible} onPress = {() => {
                        this.postbutton()
                    }}>
                        <Text style = {{fontSize: 20}}>Post</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 40
    },
    textinputs: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingTop: 50,
        borderBottomWidth: 2,
        width: 300,
        fontSize: 15,
        fontStyle: 'italic'
    },
    postbutton: {
        height: 40,
        width: 100,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#DDDDDD'
    }
})