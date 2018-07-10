import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from 'firebase';

import reducers from "./reducers";

class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDlUtpkFIoaUlIoRnSdxX6cxsHtbMGzNDY",
      authDomain: "manager-dbad0.firebaseapp.com",
      databaseURL: "https://manager-dbad0.firebaseio.com",
      projectId: "manager-dbad0",
      storageBucket: "manager-dbad0.appspot.com",
      messagingSenderId: "999914894879"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text> textInComponent </Text>
        </View>
      </Provider>
    );
  }
}

export default App;