import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack"; // Import the stack navigator for the Home screen
import AboutStack from "./aboutStack"; // Import the stack navigator for the About screen
import React from 'react';
import Header from "../shared/header";

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <Header />,
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
        name="Home Page"
        component={HomeStack} 
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStack} // Use AboutStack instead of About directly
        options={{ drawerLabel: "About" }}
      />
    </Drawer.Navigator>
  );
}
