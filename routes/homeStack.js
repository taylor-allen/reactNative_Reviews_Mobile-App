import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import About from '../screens/about';
import HomePage from '../screens/homePage';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
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
        headerTitle: () => <Header/>,
      }}
    >
      <Stack.Screen
        name="Home Screen"
        component={HomePage}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
      />
    </Stack.Navigator>
  );
}
