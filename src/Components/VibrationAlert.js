import { Button, StyleSheet, Text, View, Vibration } from 'react-native'
import React from 'react'

const VibrationAlert = () => {
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1*ONE_SECOND_IN_MS,
        2*ONE_SECOND_IN_MS,
        3*ONE_SECOND_IN_MS
    ];

    const PATTERN_DESC = "Wait 1s, vibrate 2s, wait 3s"
  return (
    <View style={styles.container}>
        <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
        <View>
            <Button title='Vibrate Once' onPress={()=>Vibration.vibrate()}/>
        </View>

        <View>
            <Button title='Vibration for 10 seconds' onPress={()=>Vibration.vibrate(10*ONE_SECOND_IN_MS)}/>
        </View>

        <Text style={styles.paragraph}>Pattern : {PATTERN_DESC}</Text>

        <Button title='Vibrate with pattern' onPress={()=>Vibration.vibrate(PATTERN)} />

        <Button title='Vibrate with pattern until cancelled' onPress={()=>Vibration.vibrate(PATTERN,true)} />

        <Button title='stop vibration pattern' color='red' onPress={()=>Vibration.cancel()}/>
    </View>
  )
}

export default VibrationAlert

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 44,
      padding: 8,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    paragraph: {
      margin: 24,
      textAlign: 'center',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  