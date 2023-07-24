import { StyleSheet, Text, View, ToastAndroid, Button } from 'react-native'
import React from 'react'

const ToastAndroidComponent = () => {
    const showToast = () =>{
        ToastAndroid.show("Hello Nik !",ToastAndroid.SHORT);
    }

    const showToastWithGravity = () =>{
        ToastAndroid.showWithGravity(
            "Hello Nik !",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }

    const showToastWithGravityAndOffSet = () =>{
        ToastAndroid.showWithGravityAndOffset(
            "Hello Nik !",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            10,
            10
        );
    }
  return (
    <>
    <View style={{fontSize:24,textAlign:'center',marginTop:40,margin:10,padding:20}}>
      <Button title='Show Toast' onPress={()=>showToast()}/>
    </View>
    <View style={{fontSize:24,textAlign:'center',margin:10,padding:20}}>
      <Button title='Show Toast With Gravity' onPress={()=>showToastWithGravity()}/>
    </View>
    <View style={{fontSize:24,textAlign:'center',margin:10,padding:20}}>
      <Button title='Show Toast With Gravity And OffSet' onPress={()=>showToastWithGravityAndOffSet()}/>
    </View>
    </>
  )
}

export default ToastAndroidComponent

const styles = StyleSheet.create({})