import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NavigationParamList = {
  Dashboard: undefined;
};

export const Stack = createNativeStackNavigator<NavigationParamList>();
