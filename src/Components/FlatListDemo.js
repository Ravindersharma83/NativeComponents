import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const FlatListDemo = () => {
    const[products,setProducts] = useState(null);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setProducts(json)
            console.log(json);
        })
    },[])
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24,textAlign:'center',margin:10}}>FlatList Example</Text>
      <View style={{marginTop:50}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item)=>item.id}
        renderItem={({item,index})=>{
            return (
                <View style={styles.itemView}>
                    <Image source={{uri:item.image}} style={styles.productImage}/>
                    <View style={styles.nameView}>
                        <Text>{item.title.length > 15 ? item.title.substring(0,15)+'...' : item.title}</Text>
                        <Text>{item.description.length > 30 ? item.description.substring(0,30)+'...' : item.description}</Text>
                        <Text style={styles.price}>$ {item.price}</Text>
                    </View>
                </View>
            )
        }}
      />
      </View>

    </View>
  )
}

export default FlatListDemo

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    // itemView:{
    //     width:'90%',
    //     height:100,
    //     backgroundColor:'#fff',
    //     alignSelf:'center',
    //     marginTop:10,
    //     flexDirection:'row'
    // },
    itemView:{
        width:200,
        height:230,
        backgroundColor:'#fff',
        marginLeft:10,
        elevation:5,
        borderRadius:10,
        marginBottom:10
    },
    productImage:{
        width:100,
        height:100,
    },
    nameView:{
        paddingLeft:20,
        paddingRight:10
    },
    price:{
        fontSize:20,
        fontWeight:'600',
        color:'green',
        marginTop:10
    }
})