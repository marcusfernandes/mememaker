import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: ${({theme}) => theme.colors.whiteText};
  font-size: 20px;
`;
