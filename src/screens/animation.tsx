import { NavigationContainerRef, ParamListBase, useNavigation } from '@react-navigation/native';
import { Header } from '@rneui/themed';
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const AnimationScreen = () => {
  const navigation: NavigationContainerRef<ParamListBase> = useNavigation();

  return (
    <SafeAreaProvider>
      <Header
        barStyle="light-content"
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack()
        }}
        centerComponent={{ text: 'Анимация', style: { color: '#000', fontSize: 18 } }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body} />
        <View />
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
