/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Coinstack from './src/Components/CoinsStack';
import {View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <CoinsStack/>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
