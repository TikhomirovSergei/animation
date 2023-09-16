import { NavigationContainerRef, ParamListBase, useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/base';
import { Header } from '@rneui/themed';
import React from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const DashboardScreen = () => {
  const navigation: NavigationContainerRef<ParamListBase> = useNavigation();

  return (
    <SafeAreaProvider>
      <Header
        barStyle="light-content"
        centerComponent={{ text: 'Темы', style: { color: '#000', fontSize: 18 } }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <Card containerStyle={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('AnimationList')}>
              <Card.Title>Анимации</Card.Title>
              <Card.Divider />
              <View style={styles.cardView}>
                <Image
                  style={styles.cardImage}
                  resizeMode="contain"
                  source={{
                    uri: 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4'
                  }}
                />
              </View>
            </TouchableOpacity>
          </Card>
        </View>
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
  },
  card: {
    width: '45%'
  },
  cardView: {
    alignItems: 'center'
  },
  cardImage: {
    width: '100%',
    height: 100
  }
});
