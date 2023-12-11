import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Cep from './src/cep';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Cep />
    </SafeAreaView>
  );
};

export default App;
