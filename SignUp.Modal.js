import React, {Component} from 'react';
import {View, Text, SafeAreaView, Alert, StyleSheet, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import CustomInput from '../Components/CustomInput';
import firebase from 'firebase';
import {Icon} from 'react-native-elements';
import { patchWebProps } from 'react-native-elements/dist/helpers';
const SignUpModal = props=>(
    <Modal animationType = "fade" transparent = {true} visible = {props.visible}>
        <View style = {styles.container}>
            <ScrollView style = {{width: "100%"}}>
                <KeyboardAvoidingView style = {styles.UpperContainer}>
                    <View style = {{flexDirection: "row"}}>
                        <Text style = {styles.title}>
                            Sign Up
                        </Text>
                        <Icon name = {"cross"}
                        type = {"entypo"}
                        size = {50}
                        color = {"#6fc0b8"}
                        onPress = {props.onCancel}
                        />
                    </View>
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"First Name"}
                    maxLength = {8}
                    onChangeText = {text=>props.setFirstName(text)}
                    />
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Last Name"}
                    maxLength = {8}
                    onChangeText = {text=>props.setLastName(text)}
                    />
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Contact"}
                    maxLength = {10}
                    keyboardType = {"numeric"}
                    onChangeText = {text=>props.setContact(text)}
                    />
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Address"}
                    multiline = {true}
                    onChangeText = {text=>props.setAddress(text)}
                    />
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Email"}
                    keyboardType = {"email-address"}
                    onChangeText = {text=>props.setEmail(text)}
                    />
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Password"}
                    secureTextEntry = {true}
                    onChangeText = {text=>props.setPassword(text)}
                    />
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Confirm Password"}
                    secureTextEntry = {true}
                    onChangeText = {text=>props.setConfirmPassword(text)}
                    />
                    <CustomInput
                    title = {"Submit"}
                    onPress = {props.onSubmit}
                    style = {styles.button}
                    />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    </Modal>
)
export default SignUpModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 45, 
        borderTopRightRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff",
        marginTop: 80


    },
    upperContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{justifyContent: "center", 
alignSelf: "center", 
fontSize: 30,
fontWeight: 500,
color: "#6fc0b8",
marginTop: 30
},
icon: {
position: "absolute",
left: 195,
top: 8,
bottom: 20
},
input: {
    width: "75%",
    height: 55,
    marginTop: 20,
    borderColor:"#6fc0b8",
    borderWidth: 1.5,
    fontSize: 20,
    fontWeight: 400
},
button:{marginTop: 20}
})