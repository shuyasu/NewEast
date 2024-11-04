import {View, Text} from 'react-native';
import React from 'react';
import {Image, Dimensions, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SideDrawer from './components/Drawer';
// import Login from './src/Screens/Onboarding/Login';
// import {Login} from '../Screens/Onboarding/Login';
import Login from '../src/Screens/Onboarding/Login';
import Dashboard from '../src/Screens/Home/Dashboard';
// import Sales from './Screens/Datarecord/DetailsSales';
import COGS from '../src/Screens/Datarecord/COGS';
import Collection from '../src/Screens/Datarecord/Collection';
import Mainsales from './Screens/Datarecord/Mainsales';
import DetailsSales from './Screens/Datarecord/DetailsSales';
import Viewdetails from './Screens/Datarecord/Viewdetails';
// import {Collection} from './src/Screens/Datarecord/Collection';
import Production from '../src/Screens/Datarecord/Production';
import Stocks from '../src/Screens/Datarecord/Stocks';
import Transit_stock from '../src/Screens/Datarecord/Transit_stock';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// function DrawerStack() {
//   return (
//     // <Drawer.Navigator initialRouteName="Dashboard">
//     <Drawer.Navigator>
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
const Route = props => {
  console.log('loginid123-->>', props.logindata);
  const Id = props.logindata;
  return (
    <>
      <NavigationContainer>
        {props.logindata?.EMP_ID != undefined ? (
          <Drawer.Navigator
            drawerContent={props => <SideDrawer {...props} />}
            headerMode={false}
            backBehavior="history">
            <Drawer.Screen
              name="Dashboard"
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="COGS"
              component={COGS}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Collection"
              component={Collection}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Mainsales"
              component={Mainsales}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="DetailsSales"
              component={DetailsSales}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Viewdetails"
              component={Viewdetails}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Production"
              component={Production}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Stocks"
              component={Stocks}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Transit_stock"
              component={Transit_stock}
              options={{headerShown: false}}
            />
          
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

const mapStateToProps = state => {
  console.log('state12345', state);
  return {
    // favourateroute: state.favourateroute.favouriteroute,
    logindata: state.loginid.logindata,
  };
};
// export default Route;
export default connect(mapStateToProps, {})(Route);
