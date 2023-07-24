// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import Slider from '@react-native-community/slider'

// const SliderComponent = () => {
//     const [range,setRange] = useState(0);
//   return (
//     <View style={styles.container}>
//         <Text style={{opacity:range}}>Visibility</Text>
//         <Text>{Math.floor(range * 100)}</Text>
    //   <Slider
    //     style={{width: 300, height: 40}}
    //     minimumValue={0}
    //     maximumValue={1}
    //     // minimumTrackTintColor="#FFFFFF"
    //     // maximumTrackTintColor="#000000"
    //     thumbTintColor='pink'
    //     onValueChange={(value)=>setRange(value)}
    //   />
//     </View>
//   )
// }

// export default SliderComponent

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems:'center'
//       },
// })

import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider';

const SliderComponent = () => {
    const [name,setName] = useState(null);
    const [age,setAge] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Enter Name' value={name} onChangeText={(val)=>setName(val)} />
      <Text>{Math.floor(age)}</Text>
      <Text style={{marginVertical:20}}>Select Date</Text>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={18}
        maximumValue={100}
        thumbTintColor='pink'
        onValueChange={(value)=>setAge(value)}
      />
      <Button title='Submit' onPress={()=>Alert.alert(`welcome ${name}. Your age is ${Math.floor(age)}`)} />
    </View>
  )
}

export default SliderComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderWidth:1,
        width:200
    }
})