import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({theme}) => theme.colors.black};
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.inputTextColor,
  keyboardAppearance: 'dark',
}))`
  flex: 1;
  color: ${({theme}) => theme.colors.inputTextColor};
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;
