import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Users from './Users';

const NestedFlatList = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>NestedFlatList</Text>
      <FlatList
        data={Users}
        renderItem={({ item,index }) => {
          return (
            <View style={{ borderBottomColor: '#000', borderBottomWidth: 0.5, marginBottom: 20, marginTop: 20 , padding:20, elevation:3}}>
              <Text style={{fontSize:16,padding:10}}>Name: {item.name}</Text>
              <Text style={{fontSize:16,padding:10}}>Age: {item.age}</Text>
              <Text style={{fontSize:16,padding:10}}>Mobile: {item.mobile}</Text>
              <Text style={{fontSize:16,padding:10}}>Social Accounts: </Text><Image style={{height:20,width:20}} source={require('../images/down.png')}/>
              <FlatList
                data={Object.entries(item.socialAccounts)}
                renderItem={({ item: [platform, account], index }) => {
                  return (
                    <View style={{flex:1}}>
                      <Text style={{marginLeft:40,padding:10,fontSize:16}}>{platform}: {account}</Text>
                    </View>
                  );
                }}
              />

            </View>
          );
        }}
      />
    </View>
  );
};

export default NestedFlatList;

const styles = StyleSheet.create({});
