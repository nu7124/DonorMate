import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  
  componentDidMount() {
    Font.loadAsync({
      'STSong': require('./STSong.TTF'),
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./donorMate.jpg")} style={styles.logo}/>
        <Text style={styles.quote}>{`     "Every two seconds, \n                     someone need blood" \n\n                                       -Johnson & Johnson`}</Text>
        <View style={styles.button}><Text style={styles.buttonText}>Donation History</Text></View>
        <View style={styles.button}><Text style={styles.buttonText}>Find a Blood Bank</Text></View>
        <View style={styles.button}><Text style={styles.buttonText}>Find a Blood Donor</Text></View>
        <View style={styles.button}><Text style={styles.buttonText}>Blood Facts</Text></View>
        <View style={styles.button}><Text style={styles.buttonText}>Profile</Text></View>
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
    fontSize:20
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
    fontFamily:'STSong',
    fontSize:18,
    marginLeft:'auto',
    marginRight:'auto',
    color:'#70A3B8'
  }
});
