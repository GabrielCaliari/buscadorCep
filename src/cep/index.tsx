import React, {useRef, useState} from 'react';

import api from '../services/api';
import {
  Button,
  ButtonSecond,
  ButtonText,
  Container,
  ItemText,
  SecondView,
  TextOne,
  ThirdView,
  Input,
  Logo,
} from './styled';
import {Alert, Keyboard, SafeAreaView} from 'react-native';
import iconCep from '../assets/iconCep.png';

const Cep = () => {
  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if (cep === '') {
      Alert.alert('Erro', 'Digite um cep valido');
      setCep('');
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log('ERROR:' + error);
    }
  }

  function limpar() {
    setCep('');

    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
    setCepUser(null);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Logo source={iconCep} resizeMode="contain" />
        <TextOne>Digite o cep desejado</TextOne>
        <Input
          placeholder="Ex: 37177000"
          value={cep}
          onChangeText={texto => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </Container>
      <SecondView>
        <Button onPress={buscar}>
          <ButtonText>Buscar</ButtonText>
        </Button>

        <ButtonSecond onPress={limpar}>
          <ButtonText>Limpar</ButtonText>
        </ButtonSecond>
      </SecondView>

      {cepUser && (
        <ThirdView>
          <ItemText>CEP: {cepUser.cep}</ItemText>
          <ItemText>Logradouro: {cepUser.logradoura}</ItemText>
          <ItemText>Bairro:{cepUser.bairro}</ItemText>
          <ItemText>Cidade: {cepUser.localidade}</ItemText>
          <ItemText>Estado: {cepUser.uf}</ItemText>
        </ThirdView>
      )}
    </SafeAreaView>
  );
};

export default Cep;
