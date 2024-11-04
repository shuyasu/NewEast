import { Text, Image, ImageBackground, Dimensions, Touchable, TouchableOpacity} from 'react-native';
import {View, Animated} from 'react-native'
import React, {useRef, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import Viewcard from '../../components/cardview/viewcard';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Header from '../../components/Header';
import Nav from '../../components/header/Nav';



const {width, height} = Dimensions.get('window');

const Dashboard = (props) => {

     const navigation = useNavigation(); // Get the navigation object
      const fadeInUp = useRef(new Animated.Value(0)).current;
     const zoomInUp = useRef(new Animated.Value(0)).current;
       useEffect(() => {
         Animated.timing(fadeInUp, {
           toValue: 1,
           duration: 500,
           useNativeDriver: true,
         }).start();
       }, []);
  return (
    <>
      <Header>
        <Nav
          leftComponent={
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Image source={require('../../../src/assets/Sidebar.png')} />
            </TouchableOpacity>
          }
          centerComponent={
            <View>
              <Image
                style={{
                  width: width * 0.3,
                  height: height * 0.05,
                }}
                source={require('../../assets/Eastman_logo2.png')}
              />
            </View>
          }
        />
      </Header>

      <View style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../../assets/eastman_dashboardbg.png')}>
          <View style={{flexDirection: 'row', marginTop: '10%'}}>
            <Animatable.View
              animation="fadeInUp"
              delay={100}
              style={{opacity: fadeInUp}}>
              <Viewcard
                title="Collection"
                Price="26,516"
                pricestyling={{color: 'white'}}
                percentage="+3.8%"
                percentagestyle={{color: 'white'}}
                cardstyle={{backgroundColor: ' rgba(239, 160, 63, 1)'}}
                titlestyle={{color: 'white'}}
                // percentagestyle={{color: 'white'}}
                titleImageSource={require('../../assets/Collectionicon.png')}
                onPress={() => navigation.navigate('Collection')}
              />
            </Animatable.View>
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={{opacity: fadeInUp}}>
              <Viewcard
                title="Sales"
                Price="24,316"
                pricestyling={{color: 'white'}}
                percentage="+8.2%"
                percentagestyle={{color: 'white'}}
                cardstyle={{backgroundColor: '#2E3156'}}
                titlestyle={{color: 'white'}}
                titleImageSource={require('../../assets/Sales.png')}
                onPress={() => navigation.navigate('Mainsales')}
              />
            </Animatable.View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Animatable.View
              animation="fadeInUp"
              delay={300}
              style={{opacity: fadeInUp}}>
              <Viewcard
                title="Production"
                Price="15,208"
                pricestyling={{color: 'black'}}
                percentage="-3.5%"
                percentagestyle={{color: 'black'}}
                cardstyle={{backgroundColor: '#E8ECF7'}}
                titlestyle={{color: 'black'}}
                titleImageSource={require('../../assets/Productionicon.png')}
                onPress={() => navigation.navigate('Production')}
              />
            </Animatable.View>
            <Animatable.View
              animation="fadeInUp"
              delay={400}
              style={{opacity: fadeInUp}}>
              <Viewcard
                title="Stocks"
                Price="65,464"
                pricestyling={{color: 'white'}}
                percentage="+9.5%"
                percentagestyle={{color: 'white'}}
                cardstyle={{backgroundColor: '#2E3156'}}
                titlestyle={{color: 'white'}}
                titleImageSource={require('../../assets/stocksicon.png')}
                onPress={() => navigation.navigate('Stocks')}
              />
            </Animatable.View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Animatable.View
              animation="fadeInUp"
              delay={500}
              style={{opacity: fadeInUp}}>
              <Viewcard
                title="Transit Stock"
                Price="45,464"
                pricestyling={{color: 'white'}}
                percentage="+2.5%"
                percentagestyle={{color: 'white'}}
                imageSource={require('../../assets/newtransit.png')}
                titlestyle={{color: 'white'}}
                onPress={() => navigation.navigate('Transit_stock')}
              />
            </Animatable.View>
            <Animatable.View
              animation="fadeInUp"
              delay={600}
              style={{opacity: fadeInUp}}>
              <Viewcard
                title="COGS"
                Price="54,516"
                pricestyling={{color: 'black'}}
                percentage="+5.6%"
                percentagestyle={{color: 'black'}}
                cardstyle={{backgroundColor: '#E8ECF7'}}
                titlestyle={{color: 'black'}}
                titleImageSource={require('../../assets/COGSicon.png')}
                onPress={() => navigation.navigate('COGS')}
              />
            </Animatable.View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Dashboard;
