import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ScrollView,
  View
} from 'react-native';
import { Header } from '@rneui/themed';

const App = () => {
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff'
        }}
        centerComponent={{ text: 'Header' }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default App;