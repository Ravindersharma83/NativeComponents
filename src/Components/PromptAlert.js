import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const PromptAlert = () => {
    const[name,setName] = useState('');
    
    const openPrompt = () =>{
        // It's only work in ios
        Alert.prompt(
            "Welcome to Prompt Box",
            [
                {
                    text:"Submit",
                    onPress:(text)=>setName(text)
                },
                {
                    text:"Cancel",
                    onPress:()=>console.log('canceled')
                }
            ],"plain-text","Name")
    }
  return (
    <View style={styles.container}>
         <Text>{name}</Text>
         <Button title='Enter Name' onPress={()=>openPrompt()}/>
    </View>
  )
}

export default PromptAlert

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})