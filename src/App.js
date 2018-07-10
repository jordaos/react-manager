import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {

  componentWillMount() {
    const firebase = require("firebase");
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
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;