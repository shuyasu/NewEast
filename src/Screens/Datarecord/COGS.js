import {View, Text, Image, PermissionsAndroid,Platform, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Nav from '../../components/header/Nav';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const COGS = props => {
  // const isvalid = {};
  const [location, setLocation] = useState({});
  const [longitude , setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  // console.log("location--->>>",location)

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        console.log("granted-->>", granted)
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied by google');
          return;
        }
      }
      getCurrentLocation();
    };

    requestLocationPermission();
     }, []);

  const getCurrentLocation = () => {
    // console.log('in geolocation');
    Geolocation.getCurrentPosition(
      position => {
        console.log( 'currentposition.coords1234',position.coords);
        // const {latitude, longitude} = position.coords
        // setLocation({latitude,longitude})
        console.log(position.coords.latitude , 'latitudessss');
        console.log(position.coords.longitude, 'longitude')
        setLongitude(position.coords.longitude);
        setLatitude( position.coords.latitude);
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: false, timeout: 30000, maximumAge: 0},
    );
  };


  return (
    <>
      <Header>
        <Nav
          leftComponent={props.icon}
          centerComponent={
            <Text style={{color: 'black', fontSize: 18}}>COGS</Text>
          }
        />
      </Header>
      {/* <View
        style={{
          backgroundColor: '#E8ECF7',
          flex: 1,
          justifyContent: 'center',
          // alignSelf: 'center',
        }}>
        <Image
          source={require('../../assets/nodatalogo.png')}
          style={{alignSelf: 'center'}}
        /> */}
      <View>
        <View style={{marginBottom: '20%', borderRadius: '25'}}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: '900'}}>
            Find Driver Location
          </Text>
          {/* <Text style={{fontSize: 22}}>{location}</Text> */}
        </View>
        
        <View
          style={{
            height: '50%',
            marginLeft: '2%',
            width: '96%',
            borderWidth: 3,
            borderColor: 'black',
            borderRadius:10
          }}>
          {longitude && latitude  ? (
            <MapView
              style={{height: '100%'}}
              initialRegion={{
                latitude: latitude,
                longitude:longitude,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0043,
              }}
            >
            <Marker 
            coordinate={{ latitude: latitude, longitude: longitude}}
            />
            </MapView>
          ) : (
            // <MapView
            //   style={{height: '100%'}}
            //   initialRegion={{
            //     latitude: 28.755828792857994,
            //     longitude: 77.49702044833919,
            //     latitudeDelta: 0.0343,
            //     longitudeDelta: 0.0343,
            //   }}
            // />
            <Text style={{fontSize:18, alignSelf:"center", justifyContent:"center", color:"black", marginTop:"40%"}}>Searching...</Text>
          )}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFB116',
            margin: '5%',
            alignItems: 'center',
            padding: '4%',
            borderRadius: 25,
            borderRadius: 15,
          }}
          onPress={() => {
            onPress = getCurrentLocation();
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '900'}}>
            Get Current Location
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default COGS;
