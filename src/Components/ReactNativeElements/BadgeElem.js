import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';
const BadgeElem = () => {
    // By using React Native Elements Ui package , we use many different components
    // (https://reactnativeelements.com/docs)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Badge value="3" status='success'/>
      <Badge status='error'/>
      <Badge status='primary'/>
      <Badge status='warning'/>

    <Badge value="3" status="success" />
    <Badge value="99+" status="error" />
    <Badge value="500" status="primary" />
    <Badge value="10" status="warning" />

      <View>
          <Avatar
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
            size="medium"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 5, left: 40 }}
          />
        </View>

        <View>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/40.jpg',
            }}
            size="large"
          />
          <Badge
            status="primary"
            value={10}
            containerStyle={{ position: 'absolute', top: 5, left: 60 }}
          />
        </View>
    </View>
  )
}

export default BadgeElem

const styles = StyleSheet.create({})