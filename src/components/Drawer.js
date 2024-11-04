import {StyleSheet, View, Text, Image} from 'react-native';
import {Icon, Divider} from 'react-native-elements';
// import {LogOut} from 'react-native-feather';
import React, {Component, useEffect, useState} from 'react';
// import Typography from '../Components/typography';
// import {theme} from '../Config/theme';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import {Loginid} from '../redux/actions/Loginid';
import {logout} from '../redux/actions/Loginid';
// import { logout } from '../redux/actions/Loginid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Drawer = props => {
  const navigation = useNavigation();
  let data = props.userdata;
  console.log('newdataaaaaa', data);

  //   const [iddata, setIdData] = useState([]);

  //   useEffect(() => {
  //     if (props.userdata) {
  //       setIdData(props.userdata.Items[0]);
  //     }
  //   }, [props.userdata]);
  // console.log("statedataaaa",iddata.USER_NAME)
  // const logout = ()=>{
  // props.userdata.Items[0].USER_NAME="";
  // props.navigation.navigate("Login")
  // props.logout()

  // }

  // useEffect(()=>{
  //       logout();
  // },[]);

  return (
    <View style={styles.mainView}>
      <DrawerContentScrollView {...props}>
        <View>
          <View
            style={[
              styles.AvatarView,
              {backgroundColor: '#E8ECF7', marginBottom: 5},
            ]}>
            <View style={styles.topviewflex}>
              <Avatar
                rounded
                borderRadius={150 / 2}
                borderWidth={1}
                borderColor={'white'}
                size={40}
                source={require('../assets/battery.png')}
              />
              <View style={{marginLeft: 10, marginTop: 3}}>
                <Text style={styles.username}>{data.EMP_NAME}</Text>
              </View>
              <Image source={require('../assets/Sidebar.png')} />
            </View>
          </View>

          <DrawerItem
            style={[styles.titleposition, {marginTop: '20%'}]}
            labelStyle={styles.ScreenTitle}
            label="Collection"
            onPress={() => props.navigation.navigate('Collection')}
          />
          <Divider style={styles.divider} />
          <DrawerItem
            style={styles.titleposition}
            labelStyle={styles.ScreenTitle}
            label="Sales"
            onPress={() => props.navigation.navigate('Sales')}
          />
          <Divider style={styles.divider} />
          <DrawerItem
            style={styles.titleposition}
            labelStyle={styles.ScreenTitle}
            label="Production"
            onPress={() => props.navigation.navigate('Production')}
          />
          <Divider style={styles.divider} />
          <DrawerItem
            style={styles.titleposition}
            labelStyle={styles.ScreenTitle}
            label="Stocks"
            onPress={() => props.navigation.navigate('Stocks')}
          />
          <Divider style={styles.divider} />
          <DrawerItem
            style={styles.titleposition}
            labelStyle={styles.ScreenTitle}
            label="Transit_stock"
            onPress={() => props.navigation.navigate('Transit_stock')}
          />
          <Divider style={styles.divider} />
          <DrawerItem
            style={styles.titleposition}
            labelStyle={styles.ScreenTitle}
            label="COGS"
            onPress={() => props.navigation.navigate('COGS')}
          />
          <Divider style={styles.divider} />
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              props.logout();
            }}>
            <View style={styles.logoutview}>
              <Text style={styles.logouttext}>Logout</Text>
              <Image
                style={{marginLeft: '5%'}}
                source={require('../assets/logout.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#E8ECF7',
    borderRadius: 15,
    flex: 1,
    borderRadius: 25,
    overflow: 'hidden',
  },
  username: {
    fontSize: 16,
    color: 'black',
    marginTop: '5%',
    marginLeft: '25%',
    fontWeight: 'bold',
  },
  AvatarView: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    // marginLeft: 10,
    marginTop: -10,
    marginBottom: -10,
    alignItems: 'center',
  },
  ScreenTitle: {
    fontSize: 20,
    fontFamily: 'Nunito',
    fontWeight: '900',
    color: '#293FA6',
  },
  titleposition: {
    marginTop: 5,
    marginLeft: '30%',
  },
  divider: {
    backgroundColor: 'grey',
    height: 0.4,
    marginLeft: -3,
  },
  topviewflex: {
    marginTop: '7%',
    flexDirection: 'row',
    marginBottom: '5%',
    marginLeft: 10,
  },
  touchable: {
    backgroundColor: '#E8ECF7',
    borderWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
    marginRight: '20%',
    borderRadius: 25,
    marginTop: '90%',
  },
  logoutview: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '8%',
    marginTop: '4%',
    marginBottom: '4%',
  },
  logouttext: {
    marginLeft: '6%',
    fontSize: 16,
    color: '#293FA6',
  },
});

const mapStateToProps = state => {
  return {
    userdata: state.loginid.logindata,
  };
};

export default connect(mapStateToProps, {Loginid, logout})(Drawer);


// icon={({focused, color, size}) => (
//   <Icon
//     color={'#210635'}
//     size={30}
//     name="happy-outline"
//     type={'ionicon'}
//   />
// )}
