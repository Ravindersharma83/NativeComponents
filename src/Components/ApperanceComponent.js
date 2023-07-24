import { StyleSheet, Text, View, TextInput, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApperanceComponent = () => {
    // Apperance use for implementing light and dark mode functionality apperance in our mobile device
    const colorScheme = Appearance.getColorScheme();
    const [name,setName] = useState("");
    const[age,setAge] = useState(0);
    useEffect(()=>{
        console.log(colorScheme);
    },[])
  return (
    <View style={{
        flex:1,
        padding:20,
        backgroundColor: colorScheme === 'light' ? 'white' : 'gray'
    }}>
      <TextInput style={{
            marginTop:20,
            backgroundColor:colorScheme === 'light' ? 'gray' : 'white',
            color:colorScheme === 'light' ? 'white' : 'black'
      }}
        placeholder='Enter Name'
        placeholderTextColor={colorScheme === 'light' ? 'white' : 'black'}
        onChangeText={(text)=>setName(text)}
      />
        <TextInput style={{
            marginTop:20,
            backgroundColor:colorScheme === 'light' ? 'gray' : 'white',
            color:colorScheme === 'light' ? 'white' : 'black'
      }}
        placeholder='Enter Age'
        placeholderTextColor={colorScheme === 'light' ? 'white' : 'black'}
        onChangeText={(text)=>setAge(text)}
      />
      <Text style={{
        fontSize:20,
        marginTop:20,
        color:colorScheme === 'light' ? 'black' : 'white'
      }}>{name} {age == 0 ? '' : age}</Text>
    </View>
  )
}

export default ApperanceComponent

const styles = StyleSheet.create({})