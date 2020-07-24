import React from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';

import {
  Container,
  GeneratedMeme,
  TextButton,
  BackContainer,
  Back,
} from './styles';

const Meme = ({route, navigation}) => {
  const handleBack = () => {
    navigation.pop();
  };

  return (
    <>
      <BackContainer>
        <Back onPress={handleBack}>
          <Icon name="back" color="#FFF" size={30} />
        </Back>
      </BackContainer>
      <Container>
        <GeneratedMeme
          source={{uri: route.params.image}}
          width={Dimensions.get('window').width}
        />
        <Button>
          <TextButton>Baixar Meme</TextButton>
        </Button>
      </Container>
    </>
  );
};

export default Meme;
