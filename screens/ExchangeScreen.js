import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import db from '../config';
import firebase from 'firebase'
import MyHeader from "../components/MyHeader";

export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      itemName: "",
      description: ""
    }
  }    

  addRequest = (itemName, description) => {
    db.collection('exchange_requests').add({
      "username": this.state.userId,
      "item_name": this.state.itemName,
      "description": this.state.description,
    })
    this.setState({
      itemName: '',
      description: ''
    })

    return alert(
      'Request Added Successfully'),
      [
      {
        text: 'OK', onPress: () => {
          this.props.navigation.navigate('Home')
        }
      }
      ]

  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            <MyHeader title="Exchange"/>
          </View>

          <KeyboardAvoidingView style={styles.keyBoardStyle}>
            <TextInput
              style={styles.formTextInput}
              placeholder={"Item"}
              onChangeText={(text) => {
                this.setState({
                  itemName: text
                })
              }}
              value={this.state.itemName}
            />
            <TextInput
              style={styles.formTextInput}
              multiline
              numberOfLines={8}
              placeholder={"Description"}
              onChangeText={(text) => {
                this.setState({  
                  description: text
                })
              }}
              value={this.state.description}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => { this.addRequest(this.state.itemName, this.state.description) }}
            >
              <Text>Add Request</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formTextInput: {
    width: "80%",
    height: 40,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20
  },
}
)
