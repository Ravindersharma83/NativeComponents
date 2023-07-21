import { FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const RefreshingFlatlist = () => {
    const[products,setProducts] = useState(null);
    const[loading,setLoading] = useState(false);
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = ()=>{
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            setLoading(false);
            setProducts(json)
        })
    }
  return (
    <View style={styles.container}>
    <RefreshControl
        refreshing={loading}
        onRefresh={()=>{
            getProducts();
        }}
    >
      <Text style={{fontSize:24,textAlign:'center',margin:10}}>FlatList Example</Text>
      <FlatList
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
      </RefreshControl>
    </View>
  )
}

export default RefreshingFlatlist

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemView:{
        width:'90%',
        height:100,
        backgroundColor:'#fff',
        alignSelf:'center',
        margin:10,
        flexDirection:'row',
        elevation:5
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