import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../donorMate.jpg")} style={styles.logo}/>
        <Text style={styles.quote}>{`     "Every two seconds, \n                     someone need blood" \n\n                                       -Johnson & Johnson`}</Text>
        <TouchableHighlight style={styles.button} onPress={()=> Actions.History()}><Text style={styles.buttonText}>Donation History</Text></TouchableHighlight>
        <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Find a Blood Bank</Text></TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={()=> Actions.Donor()}><Text style={styles.buttonText}>Find a Blood Donor</Text></TouchableHighlight>
        <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Blood Facts</Text></TouchableHighlight>
        <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Profile</Text></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#990100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote:{
    color:'#fff',
    marginBottom:50,
    fontSize:20,
  },
  logo:{
    width:130,
    height:130,
  },
  button:{
    borderRadius:20,
    // borderColor:'#A1D4E9',
    // borderWidth:4,
    padding:8,
    margin:10,
    width:300,
    backgroundColor:'#fff',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  buttonText:{
    fontSize:18,
    marginLeft:'auto',
    marginRight:'auto',
    color:'#70A3B8'
  }
});
