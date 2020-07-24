import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import usePersistedState from './utils/usePersistedState';

import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#191622" />
        <View style={{flex: 1, backgroundColor: theme.colors.background}}>
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
