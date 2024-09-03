import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/header';
import React from 'react';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

export default function ReviewDetailsStack({ navigation }) {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitle: () => <Header navigation={navigation} title='Review Details'/>,
    }}
    >
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{ title: "Review Details"}}
      />
    </Stack.Navigator>
  );
}
