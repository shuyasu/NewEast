import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Nav from '../../components/header/Nav'
import Header from '../../components/Header'
import {useNavigation} from '@react-navigation/native';



const {width, height} = Dimensions.get('window');

const Viewdetails = (props) => {
    // const navigation = useNavigation();

  return (
    <View>
      <Header>
        <Nav
          leftComponent={
            <View
              style={{
                flexDirection: 'row',
                width: '400%',
                alignItems: 'center',
                marginTop: '15%',
              }}>
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Image source={require('../../assets/Sidebar.png')} />
              </TouchableOpacity>
            </View>
          }
           centerComponent={
              <View>
                <Image
                  style={{
                    width: width * 0.3, // 20% of the viewport width
                    height: height * 0.05, // 5% of the viewport height
                  }}
                  source={require('../../assets/Eastman_logo2.png')}
                />
              </View>
            }
        />
      </Header>

      <Text>hello</Text>
    </View>
  ); 
 
}

export default Viewdetails