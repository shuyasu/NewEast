import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Carousel from 'react-native-snap-carousel';
// import {carsolar} from '../../assets/carsolar';
// import battery from '../../assets/battery';
import api from '../../Utils/api';
import {login} from '../../Utils/api';
import axios from 'axios';
import {Loginid} from '../../redux/actions/Loginid';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
const Login = props => {
  const image = [{uri: '../../assets/carsolar'}, {uri: '../../assets/battery'}];
  // console.log();
  const [loginuser, setLoginuser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [incorrect, setIncorrect] = useState('');
  const handelInput = (name, value) => {
    if (name == 'userID') {
      setLoginuser(value);
    } else if (name == 'password') {
      setPassword(value);
    }
  };

  const handelSubmit = () => {
    if (
      loginuser == '' ||
      (loginuser.length <= 0 && password == '') ||
      password.length <= 0
    ) {
      setError(true);
      Snackbar.show({
        text: 'Please enter valid userid and password',
        backgroundColor: 'red',
      });
      return;
    }
    props
      .Loginid(loginuser, password)
      .then(res => {
        console.log(res);
        if (res == 'success') {
          props.navigation.navigate('Dashboard');

          Snackbar.show({
            text: 'Login Successfully',
            backgroundColor: 'green',
          });
          // setLoginuser('');
          // setPassword('');
        }
      })
      .catch(err => {
        setIncorrect(true);
        Snackbar.show({
          text: 'login unsuccessfull',
          backgroundColor: 'red',
        });
      });
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.mainview}>
          <View
            style={{
              marginTop: '2%',
            }}>
            <Image
              source={require('../../../src/assets/battery.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.Card}>
            <Text style={styles.loginheader}>LOGIN</Text>

            <TextInput
              placeholder="UserName"
              placeholderTextColor="white"
              style={styles.inputfield}
              onChangeText={text => handelInput('userID', text)}
              value={loginuser}
            />
            {error && loginuser.length <= 0 ? (
              <Text style={[styles.mandatory, {marginBottom: '2%'}]}>
                This Field is mandatory
              </Text>
            ) : (
              ''
            )}
            {/* {incorrect ? (
              <Text style={[styles.mandatory, {marginBottom: '2%'}]}>
                Incorrect please check id
              </Text>
            ) : (
              ''
            )} */}

            <TextInput
              placeholder="Password"
              placeholderTextColor="white"
              style={styles.inputfield}
              onChangeText={text => handelInput('password', text)}
              value={password}
              secureTextEntry
            />
            {error && password.length <= 0 ? (
              <Text style={styles.mandatory}>This Field is mandatory</Text>
            ) : (
              ''
            )}
            {/* {incorrect ? (
              <Text style={[styles.mandatory, {marginBottom: '2%'}]}>
                Incorrect please check you password
              </Text>
            ) : (
              ''
            )} */}

            <TouchableOpacity
              style={styles.Touchablebutton}
              onPress={handelSubmit}>
              <Text style={styles.loginbutton}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.forgottext}>Forgot Password</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {
    // orderDetails: state.bookingdetails.bookingdetails,
  };
};

export default connect(mapStateToProps, {Loginid})(Login);

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#1f2548',
  },
  image: {
    height: height * 0.4,
    width: width * 1,
  },
  Card: {
    marginLeft: '7%',
    marginRight: '7%',
    borderColor: 'grey', // Set the border color here
    borderWidth: 2, // Add border width to make it visible
    borderRadius: 15,
  },
  inputfield: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10, // Add border radius here
    paddingLeft: 8,
    marginBottom: 20,
    color: 'white',
    marginLeft: '5%',
    marginRight: '5%',
  },
  Touchablebutton: {
    backgroundColor: '#F5882F',
    color: '#841584',
    marginRight: '5%',
    marginLeft: '5%',
    borderRadius: 40,
    marginTop: '2%',
  },
  loginheader: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    marginBottom: '5%',
    marginTop: '5%',
  },
  loginbutton: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    paddingTop: '2%',
    paddingBottom: '2%',
    fontWeight: '500',
  },
  forgottext: {
    alignSelf: 'center',
    color: 'white',
    marginTop: '5%',
    marginBottom: '10%',
  },
  mandatory: {
    color: 'white',
    marginTop: '-3%',
    marginLeft: '5%',
  },
});
