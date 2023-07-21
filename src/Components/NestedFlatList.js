import { FlatList, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import Users from './Users';

const NestedFlatList = () => {
  const [userData, setUserData] = useState(Users);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  const select = (index) => {
    setSelectedUserIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>NestedFlatList</Text>
      <FlatList
        data={userData}
        renderItem={({ item, index }) => {
          return (
            <View style={{ borderBottomColor: '#000', borderBottomWidth: 0.5, marginBottom: 20, marginTop: 20, padding: 20, elevation: 3 }}>
              <TouchableOpacity activeOpacity={.2} onPress={() => select(index)}>
                <Text style={{ fontSize: 16, padding: 10 }}>Name: {item.name}</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Age: {item.age}</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Mobile: {item.mobile}</Text>
                <Text style={{ fontSize: 16, padding: 10 }}>Social Accounts: </Text>
                {selectedUserIndex === index && (
                  <FlatList
                    data={Object.entries(item.socialAccounts)}
                    renderItem={({ item: [platform, account] }) => {
                      return (
                        <View style={{ flex: 1 }}>
                          <Text style={{ marginLeft: 40, padding: 10, fontSize: 16 }}>
                            {platform}: {account}
                          </Text>
                        </View>
                      );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                  />
                )}
                {selectedUserIndex === index ? (
                  <Image
                    style={{ height: 20, width: 20, position: 'absolute', top: 20, right: 20 }}
                    source={require('../images/up.png')}
                  />
                ) : (
                  <Image
                    style={{ height: 20, width: 20, position: 'absolute', top: 20, right: 20 }}
                    source={require('../images/down.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default NestedFlatList;

const styles = StyleSheet.create({});
