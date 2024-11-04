import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import Nav from '../../components/header/Nav';

const Stocks = (props) => {
  return (
    <>
      <Header>
        <Nav
          leftComponent={props.icon}
          centerComponent={
            <Text style={{color: 'black', fontSize: 18}}>Stocks</Text>
          }
        />
      </Header>
      <View
        style={{
          backgroundColor: '#E8ECF7',
          flex: 1,
          justifyContent: 'center',
          alignItem: 'center',
        }}>
        <Image
          source={require('../../assets/nodatalogo.png')}
          style={{alignSelf: 'center'}}
        />
      </View>
    </>
  );
}

export default Stocks