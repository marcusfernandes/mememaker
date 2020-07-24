import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: 'Roboto-Regular';
  margin: 20px 0;
`;

export const MemeListWrapper = styled.View`
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
`;

export const MemeImage = styled.Image`
  width: 100%;
  height: 150px;
  flex: 1;
`;

export const Meme = styled.TouchableOpacity`
  height: 120px;
  background: ${({theme}) => theme.colors.primary};
  width: 120px;
  margin: 0 4px;
  padding: 3px;
  border-radius: 5px;
`;
