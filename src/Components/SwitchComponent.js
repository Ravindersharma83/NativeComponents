import { Image, StyleSheet, Switch, Text, View, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomSwitch from './CustomSwitch';
import Contacts from 'react-native-contacts';
import Torch from 'react-native-torch';


const SwitchComponent = () => {
    const[camera,setCamera] = useState(false);
    const[contact,setContact] = useState(false);

    const[enabled,setEnabled] = useState(false);
    const [isTorchOn, setIsTorchOn] = useState(false);

    const toggleSwitch = ()=>{
        setEnabled(previousState=>!previousState)
        Torch.switchState(!isTorchOn);
        setIsTorchOn(!isTorchOn);
        console.log(enabled);
    }

    useEffect(()=>{

    },[])

    const toggleCamera = ()=>{
        setCamera(previousState=>!previousState)
        if(!camera){
            requestCameraPermission();
        }
    }
    const toggleContact = ()=>{
        setContact(previousState=>!previousState)
        if(!contact){
            requestContactPermission();
        }
    }

    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
            setCamera(true);
          } else {
            console.log('Camera permission denied');
            setCamera(false);
          }
        } catch (err) {
          console.warn(err);
        }
      };

      const requestContactPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: 'Cool Contact App Contacts Permission',
              message:
                'Cool Contact App needs access to your contacts ' +
                'so you can find friends easily.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          ).then((res)=>{
            console.log('Permission',res);
            Contacts.getAll()
            .then((contacts)=>{
                console.log('contacts--',contacts);
            })
            .catch((error)=>{
                console.log('err--',error);
            })
          }).catch((error)=>{
            console.log('Permission Error',error);
          });
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the contact');
            setContact(true);
          } else {
            console.log('Contact permission denied');
            setContact(false);
          }
        } catch (err) {
          console.warn(err);
        }
      };
      
  return (
    <View style={[styles.conatiner,{backgroundColor:enabled ? 'gray' : 'white'}]}>
        {enabled ? <Image source={require('../images/bulbOn.png')} style={{height:100,width:100}}/>
        : <Image source={require('../images/bulbOff.png')} style={{height:100,width:100}}/>
        }
        <Switch
        trackColor={{false:'grey' , true:'green'}}
        thumbColor={enabled ? 'yellow':'black'}
        onValueChange={toggleSwitch}
        value={enabled}
        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] , marginTop:40 }}
      />

      {/* <View style={{borderBottomWidth:1,marginBottom:20}}>
        <View style={{flexDirection:'row',margin:20}}>
            <Text style={{marginLeft:-10,color:camera ? 'green' : 'red'}}>Camera permisson is {camera ? 'Enabled' : 'Disabled'}</Text>
            <CustomSwitch enabled={camera} toggleSwitch={toggleCamera}/>
        </View>
      </View>
      <View>
      <View style={{flexDirection:'row',margin:20}}>
        <Text style={{marginLeft:-10,color:contact ? 'green' : 'red'}}>Contact permisson is {contact ? 'Enabled' : 'Disabled'}</Text>
        <CustomSwitch enabled={contact} toggleSwitch={toggleContact}/>
      </View>
      </View> */}
    </View>
  )
}

export default SwitchComponent

const styles = StyleSheet.create({
    conatiner:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },

})