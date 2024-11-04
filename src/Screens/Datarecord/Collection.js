import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
// import data from "../../components/Jsondata/chartdata.json";
import {Todaycollection, MTD} from '../../Jsondata/chart';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

const Collection = (props) => {

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#007AFF',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barRadius: 5,
  };

  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View style={styles.cardView}>
          <Text style={styles.cardheadingText}>Today's Collection</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View>
              <Text style={{marginLeft: '2%'}}> Collection comparison </Text>
              <View style={styles.barchartview}>
                <BarChart
                  data={Todaycollection}
                  width={80}
                  hideYAxisText="false"
                  hideAxesAndRules="false"
                  hideOrigin="false"
                  showYAxisLine="false"
                  xAxisColor={'white'}
                  yAxisColor={'#2E3156'}
                  // hideRules="false"
                  height={150}
                  barWidth={20}
                  frontColor={'black'}
                  hideRules={true}
                />

                <View style={styles.flexView}>
                  <View
                    style={[
                      styles.valuedata,
                      {backgroundColor: '#FEFEFE'},
                    ]}></View>
                  <Text styles={{color: '#FEFEFE'}}>
                    {Todaycollection[0].label}
                  </Text>
                  <Text styles={{color: '#FEFEFE', marginLeft: '5%'}}>
                    {Todaycollection[0].value}
                  </Text>
                </View>
                <View style={styles.flexView}>
                  <View
                    style={[
                      styles.valuedata,
                      {backgroundColor: '#F5882F'},
                    ]}></View>
                  <Text styles={{color: '#F5882F'}}>
                    {Todaycollection[1].label}
                  </Text>
                  <Text styles={{backgroundColor: 'white', marginLeft: '5%'}}>
                    {Todaycollection[1].value}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.uppersubheading}>ER Channel</Text>
              <View style={styles.upperview2}>
                <View style={styles.badgeview}>
                  <Text style={{alignSelf: 'center', color: '#E08913'}}>
                    DEM
                  </Text>
                </View>
                <View style={styles.badgeview}>
                  <Text style={{alignSelf: 'center', color: 'black'}}>
                    HUBS
                  </Text>
                </View>
                <View style={styles.badgeview}>
                  <Text style={{alignSelf: 'center', color: '#E08913'}}>
                    SOLAR
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={()=>props.navigation.navigate('Viewdetails')}>
                  <View style={styles.buttonview}>
                    <Text style={{alignSelf: 'center', color: 'white'}}>
                      View Details
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardView2}>
          <View style={{marginTop: '10%', marginLeft: '5%'}}>
            <Text style={styles.cardheadingText}>MTD Collection</Text>
          </View>
          <Text style={styles.uppersubheading}>Collection Comparision</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.chartview}>
              <PieChart
                data={MTD}
                donut
                strokeColor="#fff"
                strokeWidth={5}
                radius={100}
                // showValuesAsLabels="true"
                showValuesAsLabels={true}
                // showText={true}
              />
            </View>
            <View>
              {MTD &&
                MTD.map(item => (
                  <View style={{flexDirection: 'row', margin: '2%'}}>
                    <View
                      style={[
                        styles.colorbox,
                        {backgroundColor: item.color, borderRadius: 50},
                      ]}></View>
                    <Text>
                      {item.value}:
                      <Text style={{color: 'black', fontWeight: '600'}}>
                        {item.label}
                      </Text>
                    </Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Collection;



const styles = StyleSheet.create({
  mainview: {
    backgroundColor: '#E8ECF7',
    flex: 1,
  },
  cardView: {
    backgroundColor: '#FEFEFE',
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '15%',
    borderRadius: 15,
    padding: '10%',
  },
  cardheadingText: {
    color: 'black',
    fontWeight: '500',
    marginTop: '-5%',
    marginBottom: '5%',
    marginLeft: '2%',
    fontSize: 22,
  },
  barchartview: {
    backgroundColor: '#2E3156',
    borderRadius: 15,
    marginRight: '2%',
  },
  target: {
    marginTop: '10%',
    marginLeft: '14%',
    fontSize: 10,
  },
  actual: {
    marginTop: '10%',
    marginLeft: '14%',
    fontSize: 10,
  },
  remaining: {
    marginTop: '10%',
    marginLeft: '14%',
    fontSize: 10,
  },
  chartview: {
    marginTop: '10%',
    marginLeft: '2%',
    marginBottom: '10%',
    // backgroundColor: 'red',
  },
  colorbox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  uppersubheading: {
    marginTop: '1%',
    marginLeft: '8%',
    fontSize: 14,
  },
  badgeview: {
    backgroundColor: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 15,
    padding: '4%',
    marginTop: '10%',
  },
  buttonview: {
    backgroundColor: '#F5882F',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 15,
    padding: '4%',
    marginTop: '9%',
    marginBottom: '15%',
  },
  upperview2: {
    backgroundColor: '#E8ECF7',
    borderRadius: 15,
    marginLeft: '2%',
  },
  valuedata: {
    marginLeft: '-15%',
    borderRadius: 50,
    height: 15,
    width: 15,
  },
  flexView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  cardView2: {
    backgroundColor: '#FEFEFE',
    marginTop: '10%',
    borderRadius: 15,
    marginBottom: '15%',
    marginLeft: '3%',
    marginRight: '3%',
  },
});