import React, { useEffect, useRef } from 'react';
 import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   ImageBackground,
   Image,
   TouchableOpacity,
    Animated,
   WithoutFeedback
 } from 'react-native';
import * as Animatable from 'react-native-animatable';
 const {width, height} = Dimensions.get('window');

 const Viewcard = ({
   title,
   content,
   Price,
   cardstyle,
   titlestyle,
   contentstyle,
   pricestyling,
   imageSource,
   ImageStyle,
   percentage,
   percentagestyle,
   titleImageSource,
   ImageStylemain,
   onPress,
 }) => {
  const zoomIn = useRef(new Animated.Value(0)).current;
   useEffect(() => {
     Animated.timing(zoomIn, {
       toValue: 1,
       duration: 500,
       useNativeDriver: true,
     }).start();
   }, []);

  //  console.log({imggggg: imageSource});
   return (
     <>
       {/* <Animatable.View
         animation="fadeInUp"
         delay={500}
         style={{opacity: fadeInUp}}> */}
       <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
         <ImageBackground
           source={imageSource}
           style={[styles.card, cardstyle]}
           imageStyle={{borderRadius: 10}} // Optional to round the corners of the image
         >
           <View>
             <View
               style={{
                 flexDirection: 'row',
                 justifyContent: 'space-between',
               }}>
               <Text style={[styles.title, titlestyle]}>{title}</Text>
               <Text style={[styles.percentage, percentagestyle]}>
                 {percentage}
               </Text>
             </View>
             {titleImageSource !== null && <Animatable.View
               animation="zoomIn"
               delay={800}
               style={{opacity: zoomIn}}>
              <Image
                 source={titleImageSource}
                 style={[styles.titleImage, ImageStylemain]} // Apply dynamic styles to the image
               />
             </Animatable.View>}
             {/* <View style={{flexDirection: 'row',justifyContent:"center"}}>
               <Image source={require('../../assets/₹.png')} /> */}
               <Text style={[styles.price, pricestyling]}>{Price}</Text>
             {/* </View> */}
           </View>
         </ImageBackground>
       </TouchableOpacity>
       {/* </Animatable.View> */}
     </>
   );
 };

 const styles = StyleSheet.create({
   card: {
     backgroundColor: '#fff',
     borderRadius: 10,
     padding: '10%',
     //  shadowColor: '#000',
     //  shadowOffset: {width: 0, height: 2},
     //  shadowOpacity: 0.1,
     //  shadowRadius: 6,
     //  elevation: 3,
     //  margin: 10,
     marginTop: '5%',
     marginLeft: '4%',
     marginRight: '-1%',
     width: width * 0.45,
     height: height * 0.27,
     borderRadius: 20,
   },
   title: {
     fontSize: 18,
     fontWeight: 'bold',
     marginBottom: 10,
   },
   content: {
     fontSize: 16,
     color: '#333',
   },
   titleImage: {
     width: width * 0.2, // Set a width for the title image
     height: height * 0.1, // Set a height for the title image
     marginVertical: 10, // Add some margin for spacing
     alignSelf: 'center',
   },
   percentage: {
     fontSize: 16,
   },
   price:{
    fontSize: 20,
    fontWeight:"bold",
    alignSelf:"center",
    marginTop:"3%"
   }
 });

 export default Viewcard;
