import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Home from './Components/Home';
import History from './Components/History';
import Donor from './Components/FindBloodDonor';

export default class App extends React.Component {

  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#990100'}}>
        <Scene key="root">
              <Scene key="home" component={ Home } title="Donor Mate"/>
              <Scene key="History" component={History} />
              <Scene key="Donor" component={Donor} title=""/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#990100',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    fontSize:18,
    marginLeft:'auto',
    marginRight:'auto',
    color:'#70A3B8'
  }
});
