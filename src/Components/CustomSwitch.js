import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'

const CustomSwitch = (props) => {
  return (
    <View style={{marginLeft:10}}>
      <Switch
        trackColor={{false:'grey' , true:'green'}}
        thumbColor={props.enabled ? 'yellow':'black'}
        onValueChange={props.toggleSwitch}
        value={props.enabled}
        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
      />
    </View>
  )
}

export default CustomSwitch

const styles = StyleSheet.create({})