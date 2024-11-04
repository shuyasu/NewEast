import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Nav from '../../components/header/Nav'

const Transit_stock = (props) => {
  return (
    <>
      <Header>
        <Nav
          leftComponent={props.icon}
          centerComponent={
            <Text style={{color: 'black', fontSize: 18}}>Transit Stock</Text>
          }
        />
      </Header>

      <View>
        <Text>Transit_stock</Text>
      </View>
    </>
  );
}

export default Transit_stock