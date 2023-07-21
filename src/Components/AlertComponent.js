import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const saved = ()=>{
        Alert.alert("Yeah!!", "Your data saved successfully !!")
    }

    const deleteData = () =>{
        Alert.alert(
        'Delete Post',
        'Are you sure ?',
        [
            {
            text:'Cancel',
            onPress: ()=> console.log('Cancel Pressed'),
            style:'cancel'
            },
            {
            text:'Confirm',
            // onPress: ()=> deletePost(postId),
            onPress: () => console.log("Deleted!"),
            style:'cancel'
            }
        ],
        {cancelable:false}
        )
    }


  return (
    <View style={styles.container}>
        <Button title='Save' onPress={()=>saved()}/>
        <View>
            <Button color='red' title='Delete' onPress={()=>deleteData()}/>
        </View>
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})