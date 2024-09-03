import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../screens/homePage';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name !== "Home Screen", 
        headerStyle: {
          backgroundColor: "#475D8C",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: 'white',
      })}
    >
      <Stack.Screen
        name="Home Screen"
        component={HomePage}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
}
