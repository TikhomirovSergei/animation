import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from './navigation';
import { DashboardScreen } from './screens/dashboard';
import { AnimationListScreen } from './screens/animationList';
import { AnimationScreen } from './screens/animation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Dashboard'}
          screenOptions={{
            animation: 'slide_from_right',
            gestureEnabled: false,
            headerShown: false
          }}>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="AnimationList" component={AnimationListScreen} />
          <Stack.Screen name="Animation" component={AnimationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
