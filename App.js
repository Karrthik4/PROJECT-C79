import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
//import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default function App() {
    return (
      <AppContainer/>
    )
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator},
  //Drawer: {screen: AppDrawerNavigator},
})

const AppContainer = createAppContainer(switchNavigator);