import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionListDemo = () => {
    const DATA = [
        {
            title:"Main Items",
            admin:'Ravinder',
            data:["Pizza","Burger"],
        },
        {
            title:"Sides",
            admin:'Ravinder',
            data:["French Fries","Paneer Tika"],
        },
        {
            title:"Drinks",
            admin:'Ravinder',
            data:["Coca-Cola","Sprite","Water"],
        },
        {
            title:"Desserts",
            admin:'Nik',
            data:["Gulab-Jamun","Ice-Cream"],
        },
    ]

  return (
    <View style={styles.container}>
    <SectionList
      sections={DATA}
    //   keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title,admin}}) => (
        <>
        <Text style={styles.header}>Owner - {admin}</Text>
        <Text style={styles.header}>{title}</Text>
        </>
      )}
    />
    </View>
  )
}

export default SectionListDemo

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        padding:20,
        backgroundColor:'white'
    },
    item:{
        backgroundColor:'pink',
        padding:20,
        marginVertical:10
    },
    header:{
        fontSize:30
    },
    title:{
        fontSize:25
    }
})