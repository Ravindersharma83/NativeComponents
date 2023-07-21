import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const DismissKeyboard = () => {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.conatiner}>
      <TextInput style={styles.input} placeholder='Enter your name'/>
      <TextInput style={styles.input} placeholder='Enter your email'/>
      <TextInput style={styles.input} placeholder='Enter your description'/>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard

const styles = StyleSheet.create({
    conatiner:{
        marginTop:40,
        padding:20,
        backgroundColor:'#fff',
        flex:1
    },
    input:{
        backgroundColor:'#f5c9e0',
        padding:20,
        margin:20
    }
})