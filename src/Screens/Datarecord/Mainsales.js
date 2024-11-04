import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts'
import { TotalSales } from '../../Jsondata/chart'

const Mainsales = ({navigation}) => {
    const handlenavigate = () =>{
        navigation.navigate('DetailsSales')
    }
  return (
    <View style={{flex: 1, backgroundColor: '#E8ECF7'}}>
      <View style={styles.mainview}>
        <Text style={styles.mainheading}>MTD Sales</Text>
        <Text style={styles.subheading}>
          Total <Text>sales</Text>
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.chartview}>
            <BarChart
              data={TotalSales}
              width={80}
              hideYAxisText="false"
              hideAxesAndRules="false"
              hideOrigin="false"
              showYAxisLine="false"
              xAxisColor={'white'}
              yAxisColor={'#2E3156'}
              // hideRules="false"
              height={140}
              barWidth={20}
              frontColor={'black'}
              hideRules={true}
            />
          </View>

          <View style={{marginLeft: '2%', alignSelf: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[styles.colorbox, {backgroundColor: '#2E3156'}]}></View>
              <Text style={{color: '#2E3156', fontWeight: '600', fontSize: 17}}>
                {TotalSales[0].label}
              </Text>
              <Text
                style={{
                  color: '#2E3156',
                  fontWeight: '600',
                  fontSize: 17,
                  marginLeft: '10%',
                }}>
                {TotalSales[0].value.toLocaleString('en-IN')}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  styles.colorbox,
                  {backgroundColor: TotalSales[1].frontColor},
                ]}></View>
              <Text
                style={{
                  color: TotalSales[1].frontColor,
                  fontWeight: '600',
                  fontSize: 17,
                  // marginLeft:"3%"
                }}>
                {TotalSales[1].label}
              </Text>
              <Text
                style={{
                  color: TotalSales[1].frontColor,
                  fontWeight: '600',
                  fontSize: 17,
                  marginLeft: '10%',
                }}>
                {TotalSales[1].value}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.greyrow}>
          <View style={styles.badgeview}>
            <Text style={styles.badgeText}>E-Rikshaw</Text>
          </View>
          <View style={styles.amountView}>
            <Text style={styles.amounttext}>14,200</Text>
          </View>
        </View>

        <View style={styles.greyrow}>
          <View style={styles.badgeview}>
            <Text style={styles.badgeText}>HUPS & IB</Text>
          </View>
          <View style={styles.amountView}>
            <Text style={styles.amounttext}>4,600</Text>
          </View>
        </View>
        <View style={styles.greyrow}>
          <View style={styles.badgeview}>
            <Text style={styles.badgeText}>SOLAR</Text>
          </View>
          <View style={styles.amountView}>
            <Text style={styles.amounttext}>5,516</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handlenavigate} style={styles.button}>
          <Text style={styles.buttontext}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Mainsales


const styles = StyleSheet.create({
  mainview: {
    backgroundColor: '#FEFEFE',
    marginTop: '20%',
    marginLeft: '5%',
    marginBottom: '25%',
    marginRight: '5%',
    borderRadius: 15,
  },
  mainheading: {
    marginLeft: '3%',
    fontWeight: '600',
    fontSize: 22,
    color: 'black',
    marginTop:"5%"
  },
  subheading:{
    fontWeight: '600', 
    marginLeft: '3%', 
    marginTop:"3%", 
    marginBottom:"3%",
    fontSize:20
  },
  colorbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 50,
    marginBottom: '10%',
  },
  chartview: {
    backgroundColor: '#2E3156',
    borderRadius: 15,
    //   marginRight: '2%',
    marginLeft: '5%',
    width: '40%',
    height: '100%',
    marginTop: '3%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#F5882F',
    padding: '5%',
    borderRadius: 25,
    marginTop: '5%',
    marginBottom: '20%',
    marginLeft: '25%',
    marginRight: '25%',
    alignSelf: 'center',
  },
  badgeview: {
    backgroundColor: '#FFF6EE',
    padding: '3%',
    borderRadius: 25,
    borderWidth: 1,
    alignSelf: 'center',
  },
  badgeText: {
    fontWeight: '700',
    color: 'black',
    margin: '5%',
    alignSelf: 'center',
  },
  greyrow: {
    backgroundColor: '#E8ECF7',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 15,
    flexDirection: 'row',
    padding: '2%',
    justifyContent: 'space-evenly',
  },
  amountView: {
    alignSelf: 'center',
  },
  amounttext: {
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },
  buttontext: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
  
});