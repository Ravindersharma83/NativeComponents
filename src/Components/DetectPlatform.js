import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const DetectPlatform = () => {
  return (
    <View style={styles.container}>
      <Text>OS</Text>
      <Text style={styles.value}>{Platform.OS}</Text>

      <Text>OS Version</Text>
      <Text style={styles.value}>{Platform.Version}</Text>

      <Text>is-TV</Text>
      <Text style={styles.value}>{Platform.isTV.toString()}</Text>

       {Platform.OS === 'ios' && <>
        <Text>is-Pad</Text>
        <Text style={styles.value}>{Platform.isPad.toString()}</Text>
       </>}

       <Text>Constants</Text>
       <Text style={styles.value}>{JSON.stringify(Platform.constants,null,2)}</Text>
    </View>
  )
}

export default DetectPlatform

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    value:{
        fontWeight:'bold',
        padding:5,
        marginBottom:10
    }
})