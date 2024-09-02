import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#333",
        },
        headerTintColor: "#eee",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: () => <Header />,
      }}
    >
      <Stack.Screen
        name="About Page"
        component={About}
        options={{ title: "About Details" }}
      />
    </Stack.Navigator>
  );
}
