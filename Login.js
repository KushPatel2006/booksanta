import React, {Component} from 'react';
import {View, Text, SafeAreaView, Alert, StyleSheet} from 'react-native';
import CustomInput from '../Components/CustomInput';
import firebase from 'firebase';
import db from '../config';
import {SignUpModal} from '../screens/SignUp.Modal';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            confirmPassword: '',
            isModalvisible: false
        }
    }
    handleSignUp = ()=>{
        this.setState({isModalVisible: true})
    }
    handleLoginIn = (email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(Response=>{
            Alert.alert("Login In Successfully")
        })
        .catch(error=>{Alert.alert(error.message)})
    }
    render(){
        var {email, password} = this.state
        return(
            <View style = {styles.container}>
                <SafeAreaView/>
                <View style = {styles.upperContainer}>
                    <Image source = {require('../assets/santa.png ')} style = {styles.image}/>
                    
                </View>
               <View style = {styles.middleContainer}>
                <CustomInput
                placeholder = {'abc@example.com'}
                keyboardType = {'email-address'}
                onChangeText = {text=>{
                    this.setState({
                        email: text
                    })
                }} 
                />
                <CustomInput
                secureTextEntry = {true}
                placeholder = {"Enter Password"}
                onChangeText = {text=>{
                    this.setState({
                        password: text
                    })
                }}
                />
                <CustomInput title = {'Login'} onPress = {()=>{
                    this.handleLoginIn(email, password)
                }}/>
                <CustomInput title = {'SignUp'} onPress = {()=>{
                    this.handleSignUp()
                }}/>
                
               </View>
               <View style = {styles.lowwerContainer}>
                   <Image source = {require('../assets/book.png')} style = {styles.bookImage}/>
               </View>
                <SignUpModal
                setFirstName = {text=>this.setState({firstName: text})}
                setLastName = {text=>this.setState({lastName: text})}
                setContact = {text=>this.setState({contact: text})}
                setAddress = {text=>this.setState({address: text})}
                setPassword = {text=>this.setState({password: text})}
                setConfirmPassword = {text=>this.setState({confirmPassword: text})}
                onSubmit = {()=>{
                    this.handleSubmit()
                }}
                onCancel = {()=>{
                    this.setState({isModalvisible: fasle})
                }}
                visible = {isModalVisible}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#6fc0b8" }, upperContainer: { flex: 0.25, justifyContent: "center", alignItems: "center" }, image: { width: 250, height: 250, resizeMode: "contain" }, middleContainer: { flex: 0.42, alignItems: "center", justifyContent: "space-evenly" }, lowerContainer: { flex: 0.33, justifyContent: "center", alignItems: "center" }, bookImage: { width: "100%", height: "100%", resizeMode: "contain" } });
