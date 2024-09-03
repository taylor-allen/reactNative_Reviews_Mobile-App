import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import React from 'react';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#E4A793',
        },
        drawerLabelStyle: {
          color: '#F7F9F9',
          fontSize: 18,
          fontWeight: 'bold',
        },
        drawerActiveBackgroundColor: '#868DA5', 
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack} 
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStack} 
        options={{ drawerLabel: "About" }}
      />
    </Drawer.Navigator>
  );
}
