import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NavigationParamList = {
  Dashboard: undefined;
  AnimationList: undefined;
  Animation: undefined;
};

export const Stack = createNativeStackNavigator<NavigationParamList>();
