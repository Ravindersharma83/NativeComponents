import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

const AnimationComponent = () => {
    const fandeAnim = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        console.log(fandeAnim);
    },[])

    const fadeIn = ()=>{
        Animated.timing(fandeAnim,{
            toValue:1,
            duration:2000,
            useNativeDriver:true
        }).start();
    }

    const fadeOut = ()=>{
        Animated.timing(fandeAnim,{
            toValue:0,
            duration:2000,
            useNativeDriver:true
        }).start();
    }
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.fadingContainer,{opacity:fandeAnim}]}
        >
            <Text style={styles.fadingText}>Fading View</Text>
      </Animated.View>
            <View style={styles.buttonRow}>
                <Button title='Fade In' onPress={()=>fadeIn()}/>
                <Button title='Fade Out' onPress={()=>fadeOut()}/>
            </View>
    </View>
  )
}

export default AnimationComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fadingContainer:{
        padding:20,
        backgroundColor:'yellow'
    },
    fadingText:{
        fontSize:30
    },
    buttonRow:{
        justifyContent:'center',
        marginVertical:35
    }
})