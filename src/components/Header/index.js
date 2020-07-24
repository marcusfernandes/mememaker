import React, {useState, useContext} from 'react';
import {ThemeContext} from 'styled-components';
import { Switch } from 'react-native';
import { Container, AmaleLogo } from './styles';

import favicon from '../../assets/favicon.png'

const Header = ({toggleTheme}) => {
  const {colors, title} = useContext(ThemeContext)

  return <Container>
    <AmaleLogo source={favicon}/>
    <Switch 
      onValueChange={toggleTheme}
      value={title === 'dark'}
      trackColor={{false: colors.primary, true: colors.secundary}}
      thumbColor={title === 'dark' ? colors.secundary : colors.primary }
    />
  </Container>;
}

export default Header;