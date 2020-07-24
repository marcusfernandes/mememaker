import React, {useCallback, useRef, useEffect, useState} from 'react';
import {Image, ScrollView, FlatList} from 'react-native';
import {Form} from '@unform/mobile';
import api from '../../services/api';
import qs from 'qs'

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/mememaker-logo.png';

import {
  Container,
  Title,
  MemeImage,
  Meme,
  MemeListWrapper,
  Logo,
} from './styles';

const Home = ({navigation}) => {
  const formRef = useRef(null);
  const [memes, setMeme] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState({});
  const [boxes, setBoxes] = useState([])

  const handleSubmit = useCallback(async (data) => {

    const params = qs.stringify(
      {
        template_id:selectedMeme.id,
        username:'amale',
        password:'saudade2',
        boxes:Object.values(data).map(text => ({text}))
      }
    )
    const {data: responseData} = await api.post(`/caption_image?${params}`);
    navigation.push('Meme',{image:responseData.data.url})
  });

  const handleMemeSelect = useCallback((selected) => {
    setSelectedMeme(selected);
  });

  const reset = useCallback(() => {
    console.log('teste')
    setSelectedMeme({});
  })

  async function loadMemes() {
    const {data} = await api.get('get_memes');
    setMeme(data.data.memes);
  }
  

  useEffect(() => {
    const resetFields = navigation.addListener('transitionEnd', () =>{
      setSelectedMeme({})
    })
    loadMemes();
    return resetFields
  }, [navigation]);

  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      keyboardShouldPersistTaps="handled">
     
      <Container>
        <Logo source={logo} />
        <MemeListWrapper>
          <FlatList
            data={memes}
            renderItem={({item}) => (
              <Meme
                onPress={() => {
                  handleMemeSelect(item);
                }}>
                <MemeImage source={{uri: item.url}} />
              </Meme>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </MemeListWrapper>
        <Form ref={formRef} onSubmit={handleSubmit} style={{width: '100%'}}>
          {new Array(selectedMeme.box_count).fill('').map((_, index) => (
            <Input
              key={String(Math.random())}
              name={`text${index + 1}`}
              placeholder={`Texto #${index + 1}`}
            />
          ))}
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}>
            Gerar
          </Button>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default Home;
