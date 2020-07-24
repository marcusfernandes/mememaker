import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

import Home from '../pages/Home';
import Meme from '../pages/Meme';

import favicon from '../assets/favicon.png';

const App = createStackNavigator();

const Routes = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors.background},
      }}>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Meme" component={Meme} />
    </App.Navigator>
  );
};

export default Routes;
