import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;