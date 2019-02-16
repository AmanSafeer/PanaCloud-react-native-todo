import React, {Component} from 'react';
import store from './src/store/index';
import {Provider} from 'react-redux';
import{createStackNavigator, createAppContainer } from 'react-navigation';
import Details from './src/components/details';
import Home from './src/components/home';
import Profile from './src/components/Profile';


const AppRoutes = createStackNavigator({
  Home:Home,
  Profile:Profile,
  Details:Details
},{headerMode:"none"})

const AppContainer = createAppContainer(AppRoutes)

export default class App extends Component{
  
render() {
    return (
        <Provider store={store}>
            <AppContainer/>
         </Provider>
    );
  }
}

