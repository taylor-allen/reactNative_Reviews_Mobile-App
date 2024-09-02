import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../screens/homePage';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#475D8C",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home Screen"
        component={HomePage}
        options={{
          title: "Home",
          headerTitle: () => <Header title="Home" />,
        }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{
          title: "Review Details",
          headerTitle: () => <Header title="Review Details" />,
        }}
      />
    </Stack.Navigator>
  );
}
