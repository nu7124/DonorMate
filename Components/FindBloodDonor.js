import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Type A+', value: 0 },
    {label: 'Type A-', value: 1 },
    {label: 'Type B+', value: 2 },
    {label: 'Type B-', value: 3 },
    {label: 'Type AB+', value: 4 },
    {label: 'Type AB-', value: 5 },
    {label: 'Type O+', value: 6 },
    {label: 'Type O- ', value: 7 }
];

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
        value:0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={require("../donorMate.jpg")} style={styles.logo}/> */}
        <Text style={styles.title}>Find A Blood Donor</Text>
        <Text style={styles.subTitle}>Blood Type</Text>
        <View style={styles.radio}>
            <RadioForm
            radio_props={radio_props}
            buttonColor={'#fff'}
            buttonSize={20}
            buttonOuterSize={25}
            labelStyle={{fontSize: 20, color: '#fff'}}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#990100',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    logo:{
      width:130,
      height:130,
    },
    title:{
        fontSize:35,
        color:'#fff',
        textAlign:'center'
    },
    subTitle:{
        margin:15,
        fontSize:25,
        color:'#fff',
        textAlign:'center'
    },
    radio:{
        flex:1,
        marginLeft:15,
        marginRight:'auto'
    }
  });
