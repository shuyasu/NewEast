import React from 'react';
import {Provider} from 'react-redux';
import {Text} from "react-native";
import 'react-native-gesture-handler';
import {persistor} from './src/redux/store';
import {store} from './src/redux/store'
import Route from './src/Route'
// import MainComponent from './src/Screens'; // Example main component
import {PersistGate} from 'redux-persist/integration/react';


function App() {
  if (Text.defaultProps) {
    Text.defaultProps.allowFontScaling = false;
  } else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  return (
    // <Route />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
}

export default App;


// import {View, Text} from 'react-native';
// import React from 'react';
// import {Image, Dimensions, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './src/Screens/Onboarding/Login';
// import Dashboard from './src/Screens/Home/Dashboard';
// import Sales from './src/Screens/Datarecord/Sales';
// import COGS from './src/Screens/Datarecord/COGS';
// import Collection from './src/Screens/Datarecord/Collection';
// import Production from './src/Screens/Datarecord/Production';
// import Stocks from './src/Screens/Datarecord/Stocks';
// import Transit_stock from './src/Screens/Datarecord/Transit_stock';

// const {width, height} = Dimensions.get('window');
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerStack() {
//   return (
//     // <Drawer.Navigator initialRouteName="Dashboard">
//       <Drawer.Navigator >
//       {/* <Drawer.Screen name="Dashboard" component={Dashboard} /> */}
//       <Drawer.Screen name="Collection" component={Collection} />
//       <Drawer.Screen name="Sales" component={Sales} />
//       <Drawer.Screen name="Production" component={Production} />
//       <Drawer.Screen name="Stocks" component={Stocks} />
//       <Drawer.Screen name="Transit_stock" component={Transit_stock} />
//       <Drawer.Screen name="COGS" component={COGS} />
//     </Drawer.Navigator>
//   );
// }
// const App = () => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Login">
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{
//               headerShown: true,
//               // Custom title with image
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')} // Path to your image
//                   style={{
//                     width: width * 0.6, // 20% of the viewport width
//                     height: height * 0.09, // 5% of the viewport height
//                   }}
//                   // Set your image dimensions
//                   resizeMode="contain" // Adjust image scaling
//                 />
//               ),
//               headerTitleAlign: 'center', // Align the image title in the center
//             }}
//           />
//           <Stack.Screen
//             name="Dashboard"
//             component={Dashboard}
//             options={{
//               headerShown: true,
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')}
//                   style={{width: width * 0.6, height: height * 0.09}}
//                   resizeMode="contain" // Adjust image scaling
//                 />
//               ),
//               headerTitleAlign: 'center', // Align the image title in the center
//               headerLeft: () => (
//                 <TouchableOpacity onPress={() => DrawerStack()}>
//                   <Image
//                     source={require('../East/src/assets/sidebarlogo.png')} // Replace with your left-side image
//                     style={{width: width * 0.15, height: height * 0.09}}
//                     resizeMode="contain"
//                   />
//                 </TouchableOpacity>
//               ),
//               headerBackVisible: false,
//             }}
//           />
//           {/* <Stack.Screen
//           name="DrawerStack"
//           component={DrawerStack}
//           options={{
//             headerShown: true,
//             headerTitle: () => (
//               <Image
//                 source={require('../East/src/assets/Eastman_logo2.png')} // Your logo here
//                 style={{width: width * 0.6, height: height * 0.09}}
//                 resizeMode="contain"
//               />
//             ),
//             headerTitleAlign: 'center',
//             // Custom image on the left side
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => console.log('Open Drawer')}>
//                 <Image
//                   source={require('../East/src/assets/sidebarlogo.png')} // Your left-side image
//                   style={{width: width * 0.15, height: height * 0.09}}
//                   resizeMode="contain"
//                 />
//               </TouchableOpacity>
//             ),
//             headerBackVisible: false, // Remove back button
//           }}
//         /> */}

//           <Stack.Screen
//             name="Collection"
//             component={Collection}
//             options={{
//               headerShown: true,
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')}
//                   style={{width: width * 0.6, height: height * 0.07}}
//                   resizeMode="contain" // Adjust image scaling
//                 />
//               ),
//               headerTitleAlign: 'center', // Align the image title in the center
//               headerLeft: () => (
//                 <TouchableOpacity onPress={() => DrawerStack()}>
//                   {/* <Image
//                     source={require('../East/src/assets/sidebarlogo.png')} // Replace with your left-side image
//                     style={{width: width * 0.15, height: height * 0.09}}
//                     resizeMode="contain"
//                   /> */}
//                 </TouchableOpacity>
//               ),
//               headerBackVisible: true,
//             }}
//           />
//           <Stack.Screen
//             name="Stocks"
//             component={Stocks}
//             options={{
//               headerShown: true,
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')}
//                   style={{
//                     width: width * 0.6,
//                     height: height * 0.09,
//                   }}
//                   resizeMode="contain"
//                 />
//               ),
//               headerTitleAlign: 'center',
//             }}
//           />
//           <Stack.Screen
//             name="Sales"
//             component={Sales}
//             options={{
//               headerShown: true,
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')}
//                   style={{
//                     width: width * 0.6,
//                     height: height * 0.09,
//                   }}
//                   resizeMode="contain"
//                 />
//               ),
//               headerTitleAlign: 'center',
//               headerLeft: () => (
//                 <TouchableOpacity onPress={() => DrawerStack()}>
//                   {/* <Image
//                     source={require('../East/src/assets/sidebarlogo.png')} // Replace with your left-side image
//                     style={{width: width * 0.15, height: height * 0.09}}
//                     resizeMode="contain"
//                   /> */}
//                 </TouchableOpacity>
//               ),
//               headerBackVisible: true,
//             }}
//           />
//           <Stack.Screen
//             name="Production"
//             component={Production}
//             options={{
//               headerShown: true,
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')}
//                   style={{
//                     width: width * 0.6,
//                     height: height * 0.09,
//                   }}
//                   resizeMode="contain"
//                 />
//               ),
//               headerTitleAlign: 'center',
//             }}
//           />
//           <Stack.Screen
//             name="COGS"
//             component={COGS}
//             options={{
//               headerShown: true,
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')}
//                   style={{
//                     width: width * 0.6,
//                     height: height * 0.09,
//                   }}
//                   resizeMode="contain"
//                 />
//               ),
//               headerTitleAlign: 'center',
//             }}
//           />
//           <Stack.Screen
//             name="Transit_stock"
//             component={Transit_stock}
//             options={{
//               headerShown: true,
//               headerTitle: () => (
//                 <Image
//                   source={require('../East/src/assets/Eastman_logo2.png')}
//                   style={{
//                     width: width * 0.6,
//                     height: height * 0.09,
//                   }}
//                   resizeMode="contain"
//                 />
//               ),
//               headerTitleAlign: 'center',
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;
