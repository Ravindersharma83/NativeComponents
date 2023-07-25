import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';
const AvatarElem = () => {
  const dataList= [
    {
      image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
    },
    ];
  return (
    <View>
        {dataList.map((item,index)=>{
          return(
            <Avatar
            size={64}
            rounded
            source={item.image_url ? { uri: item.image_url } : {}}
            key={index}
          />
          )
        })}

<Avatar
          size={64}
          rounded
          icon={{ name: 'pencil', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#6733b9' }}
        />
        <Avatar
          size={64}
          rounded
          icon={{ name: 'rowing' }}
          containerStyle={{ backgroundColor: '#00a7f7' }}
        />
        <Avatar
          size={64}
          rounded
          icon={{ name: 'heartbeat', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#eb1561' }}
        />
    </View>
  )
}

export default AvatarElem

const styles = StyleSheet.create({})