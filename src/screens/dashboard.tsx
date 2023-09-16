import { Header } from '@rneui/themed';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const DashboardScreen = () => {
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Header' }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View />
      </ScrollView>
    </SafeAreaProvider>
  );
};
