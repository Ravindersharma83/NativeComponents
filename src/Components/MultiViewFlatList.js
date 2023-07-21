import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useState } from 'react'

const MultiViewFlatList = () => {
    const[data,setData] = useState([
        {
            name: 'John Doe',
            age: 25,
            mobile: '+1234567890',
            isBlocked:false,
          },
          {
            name: 'Jane Smith',
            age: 30,
            mobile: '+9876543210',
            isBlocked:true,
          },
          {
            name: 'Alice Johnson',
            age: 28,
            mobile: '+1122334455',
            isBlocked:true,
          },
          {
            name: 'Bob Williams',
            age: 32,
            mobile: '+9988776655',
            isBlocked:false,
          },
          {
            name: 'Eve Anderson',
            age: 27,
            mobile: '+5544332211',
            isBlocked:false,
          },
    ]);
  return (
    <View>
      <Text>MultiViewFlatList</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View>
                {item.isBlocked ? (<View style={{ borderBottomColor: '#000', borderBottomWidth: 0.5, marginBottom: 20, marginTop: 20, padding: 20, elevation: 3, backgroundColor:'#c5c9c6' }}>
                <Text style={{color:'red'}}>Blocked*</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Name: {item.name}</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Age: {item.age}</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Mobile: {item.mobile}</Text>
            </View>) : (<View style={{ borderBottomColor: '#000', borderBottomWidth: 0.5, marginBottom: 20, marginTop: 20, padding: 20, elevation: 3, backgroundColor:'#fff' }}>
                <Text style={{ fontSize: 16, padding: 10 }}>Name: {item.name}</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Age: {item.age}</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Mobile: {item.mobile}</Text>
            </View>)}

            </View>
          )}}
        />
    </View>
  )
}

export default MultiViewFlatList

const styles = StyleSheet.create({})