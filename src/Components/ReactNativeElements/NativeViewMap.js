import { StyleSheet, Text, View , PermissionsAndroid, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';

//---- API KEY MAP ANDROID -----  AIzaSyD8sSrmOvP6y2NREPe_S1Gp8oOtHPzMKrw  -----

const ViewMap = () => {

  const [region, setRegion] = useState({
    latitude:26.9048,
    longitude:75.7489,
    latitudeDelta: 0,
    longitudeDelta: 0.1,
  });
  const [showCurrentLocation, setShowCurrentLocation] = useState(false); // New state to track the button click

  // const onRegionChange = (newRegion) => {
  //   setRegion(newRegion);
  // };

  useEffect(()=>{
    requestLocationPermission();
  },[])
  const requestLocationPermission = async () => {
    try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
        },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
    } else {
        console.log('You cannot use Geolocation');
        return false;
    }
    } catch (err) {
    return false;
    }
};

  const getLocation = ()=>{
    Geolocation.getCurrentPosition(
      position => {
          console.log(position);
          setRegion({...region,latitude:position.coords.latitude,longitude:position.coords.longitude})
          setShowCurrentLocation(true); // Set the state to true to trigger marker update
      },
      error => {
          console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
  }
  return (
    <View style={{flex:1}}>
      <MapView
        style={{width:'100%',height:'100%'}}
        region={region}
        // onRegionChange={onRegionChange}
      >
        {showCurrentLocation && (
          <Marker
            coordinate={{ latitude: region.latitude, longitude: region.longitude }}
            title="Marker Title"
            description="Marker Description"
          />
        )}
        </MapView>

      <TouchableOpacity style={{width:'90%',height:50,alignSelf:'center',position:'absolute',bottom:20,backgroundColor:'orange', justifyContent:'center',alignItems:'center'}} onPress={getLocation}>
        <Text style={{color:'white'}}>Get Current Location</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ViewMap

const styles = StyleSheet.create({})