import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const TransformComponent = () => {
  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>

        <View style={styles.box}>
            <Text style={styles.text}>Original Object</Text>
        </View>

        <View style={[styles.box,{transform:[{scale:2}]}]}>
            <Text style={styles.text}>Scale by 2</Text>
        </View>

        <View style={[styles.box,{transform:[{scaleX:2}]}]}>
            <Text style={styles.text}>scaleX by 2</Text>
        </View>

        <View style={[styles.box,{transform:[{scaleY:2}]}]}>
            <Text style={styles.text}>scaleY by 2</Text>
        </View>

        <View style={[styles.box,{transform:[{rotate:"45deg"}]}]}>
            <Text style={styles.text}>Rotate by 45 deg</Text>
        </View>

        <View style={[styles.box,{transform:[{rotateX:"45deg"},{rotateZ:"45deg"}]}]}>
            <Text style={styles.text}>Rotate X by 45 deg</Text>
        </View>

        <View style={[styles.box,{transform:[{rotateX:"45deg"},{rotateZ:"45deg"}]}]}>
            <Text style={styles.text}>Rotate x and z by 45 deg</Text>
        </View>

        <View style={[styles.box,{transform:[{rotateX:"45deg"},{rotateY:"45deg"}]}]}>
            <Text style={styles.text}>Rotate x and y by 45 deg</Text>
        </View>

        <View style={[styles.box,{transform:[{skewX:"45deg"}]}]}>
            <Text style={styles.text}>SkewX by 45 deg</Text>
        </View>

        <View style={[styles.box,{transform:[{skewY:"45deg"}]}]}>
            <Text style={styles.text}>SkewY by 45 deg</Text>
        </View>

        <View style={[styles.box,{transform:[{translateX:-50}]}]}>
            <Text style={styles.text}>Translate X by -50</Text>
        </View>

        <View style={[styles.box,{transform:[{translateY:50}]}]}>
            <Text style={styles.text}>Translate Y by 50</Text>
        </View>
        </ScrollView>
    </View>
  )
}

export default TransformComponent

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollContentContainer:{
        alignItems:'center',
        paddingBottom:60
    },
    box:{
        height:100,
        width:100,
        borderRadius:5,
        marginVertical:40,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        margin:8,
        color:'black',
        textAlign:'center'
    }
})