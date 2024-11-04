import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react'
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {data, data2, batterydata, electronicdata, solarPanneldata, solarCCSMUdata} from '../../Jsondata/chart';

const DetailsSales = () => {
  console.log(data);
  return (
    <ScrollView>
      <View style={styles.mainview}>
        <View style={styles.cardview}>
          <Text style={styles.headertext}>Battery</Text>
          <Text style={styles.innertext}>
            Sales <Text>comparision</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: '5%',
              overflow: 'hidden',
            }}>
            <View style={styles.barchartview}>
              <BarChart
                data={batterydata}
                width={80}
                barWidth={20}
                hideYAxisText="false"
                // xAxisThickness={20}
                xAxisColor={'white'}
                yAxisColor={'#2E3156'}
                // xAxisExtraHeight={1}
                hideAxesAndRules="false"
                hideOrigin="false"
                showYAxisLine="false"
                // hideRules="false"
                height={100}
                // frontColor={'black'}
                hideRules={true}
              />
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: batterydata[0].frontColor},
                  ]}></View>
                <View style={{marginLeft: '5%'}}>
                  <Text style={{color: 'white'}}>
                    {batterydata[0].label} {batterydata[0].value}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: batterydata[1].frontColor},
                  ]}></View>
                <View style={{marginLeft: '5%'}}>
                  <Text style={{color: 'white'}}>
                    {batterydata[1].label} {batterydata[1].value}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{backgroundColor: '#E8ECF7', borderRadius: 15}}>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#E08913', fontWeight: '500'}}>
                  ER Channel
                </Text>
              </View>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#121D38', fontWeight: '500'}}>
                  ER OEM
                </Text>
              </View>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#E76432', fontWeight: '500'}}>
                  Inverter Battery
                </Text>
              </View>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#409269', fontWeight: '500'}}>
                  Solar Battery
                </Text>
              </View>
              <TouchableOpacity style={styles.touchablebutton}>
                <Text style={{color: '#FEFEFE', fontWeight: '600'}}>
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.headertext}>Electronics</Text>
          <Text style={styles.innertext}>
            Sales <Text>comparision</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: '5%',
              overflow: 'hidden',
            }}>
            <View style={styles.barchartview}>
              <BarChart
                data={electronicdata}
                width={80}
                hideYAxisText="false"
                xAxisColor={'white'}
                yAxisColor={'#2E3156'}
                // xAxisExtraHeight={1}
                hideAxesAndRules="false"
                hideOrigin="false"
                showYAxisLine="false"
                // hideRules="false"
                height={100}
                barWidth={20}
                frontColor={'black'}
                hideRules={true}
              />
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: electronicdata[0].frontColor},
                  ]}></View>
                <View style={{marginLeft: '5%'}}>
                  <Text style={{color: 'white'}}>
                    {electronicdata[0].label} {electronicdata[0].value}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: electronicdata[1].frontColor},
                  ]}></View>
                <View style={{marginLeft: '5%'}}>
                  <Text style={{color: 'white'}}>
                    {electronicdata[1].label} {electronicdata[1].value}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{backgroundColor: '#E8ECF7', borderRadius: 15}}>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#E08913', fontWeight: '500'}}>
                  ER Channel
                </Text>
              </View>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#121D38', fontWeight: '500'}}>
                  ER OEM
                </Text>
              </View>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#E76432', fontWeight: '500'}}>
                  Inverter Battery
                </Text>
              </View>
              <View style={styles.innerviewcard}>
                <Text style={{color: '#409269', fontWeight: '500'}}>
                  Solar Battery
                </Text>
              </View>
              <TouchableOpacity style={styles.touchablebutton}>
                <Text style={{color: '#FEFEFE', fontWeight: '600'}}>
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardview}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={styles.headertext}>Solar Pannel</Text>
            <Text style={styles.headertext}>Solar CC/SMU</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={styles.innertext}>
              Sales <Text>comparision</Text>
            </Text>
            <Text style={styles.innertext}>
              Sales <Text>comparision</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: '5%',
              overflow: 'hidden',
            }}>
            <View style={styles.barchartview}>
              <BarChart
                data={solarPanneldata}
                width={80}
                hideYAxisText="false"
                xAxisColor={'white'}
                yAxisColor={'#2E3156'}
                // xAxisExtraHeight={1}
                hideAxesAndRules="false"
                hideOrigin="false"
                showYAxisLine="false"
                // hideRules="false"
                height={100}
                barWidth={20}
                frontColor={'black'}
                hideRules={true}
              />
            </View>
            <View style={styles.barchartview}>
              <BarChart
                data={solarCCSMUdata}
                width={80}
                hideYAxisText="false"
                xAxisColor={'white'}
                yAxisColor={'#2E3156'}
                // xAxisExtraHeight={1}
                hideAxesAndRules="false"
                hideOrigin="false"
                showYAxisLine="false"
                // hideRules="false"
                height={100}
                barWidth={20}
                frontColor={'black'}
                hideRules={true}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View
              style={{
                backgroundColor: '#2E3156',
                padding: '5%',
                borderRadius: 10,
                // flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: solarPanneldata[0].frontColor},
                  ]}></View>
                <Text style={{color: 'white'}}>{solarPanneldata[0].label}</Text>
                <Text style={{color: 'white'}}>{solarPanneldata[1].value}</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: solarPanneldata[1].frontColor},
                  ]}></View>
                <Text style={{color: 'white'}}>{solarPanneldata[1].label}</Text>
                <Text style={{color: 'white'}}>{solarPanneldata[1].value}</Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#2E3156',
                padding: '5%',
                borderRadius: 10,
                // flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: solarCCSMUdata[0].frontColor},
                  ]}></View>
                <Text style={{color: 'white'}}>{solarCCSMUdata[0].label}</Text>
                <Text style={{color: 'white'}}>{solarCCSMUdata[0].value}</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%'}}>
                <View
                  style={[
                    styles.circlecolor,
                    {backgroundColor: solarCCSMUdata[1].frontColor},
                  ]}></View>
                <Text style={{color: 'white'}}>{solarCCSMUdata[1].label}</Text>
                <Text style={{color: 'white'}}>{solarCCSMUdata[1].value}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsSales;


const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#E8ECF7',
  },
  cardview: {
    backgroundColor: '#FEFEFE',
    marginTop: '10%',
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 15,
  },
  headertext: {
    fontSize:25,
    color: 'black',
    fontWeight: '500',
    marginTop: '5%',
    marginLeft: '5%',
  },
  innertext: {
    // color: 'black',
    fontWeight: '800',
    marginTop: '5%',
    marginLeft: '5%',
    // marginRight:"3%"
  },
  circlecolor: {
    height: 20,
    width: 20,
    borderRadius: 15,
  },
  innerviewcard: {
    backgroundColor: '#F5F5F2',
    margin: '4%',
    padding: '5%',
    borderRadius: 25,
    alignSelf: 'center',
  },
  touchablebutton: {
    backgroundColor: '#F5882F',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 50,
    alignSelf: 'center',
    padding: '7%',
  },
  barchartview: {
    backgroundColor: '#2E3156',
    overflow: 'hidden',
    borderRadius: 15,
    padding: '10%',
  },
});