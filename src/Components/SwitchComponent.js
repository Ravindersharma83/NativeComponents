import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const SwitchComponent = () => {
    const[enabled,setEnabled] = useState(false);

    const toggleSwitch = ()=>{
        setEnabled(previousState=>!previousState)
        console.log(enabled);
    }
  return (
    <View style={[styles.conatiner,{backgroundColor:enabled ? 'grey' : 'white'}]}>
        {enabled ? <Image source={require('../images/bulbOn.png')} style={{height:100,width:100}}/>
        : <Image source={require('../images/bulbOff.png')} style={{height:100,width:100}}/>
        }
        <Switch
        trackColor={{false:'grey' , true:'green'}}
        thumbColor={enabled ? 'yellow':'black'}
        onValueChange={toggleSwitch}
        value={enabled}
        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] , marginTop:40 }}
      />
    </View>
  )
}

export default SwitchComponent

const styles = StyleSheet.create({
    conatiner:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },

})