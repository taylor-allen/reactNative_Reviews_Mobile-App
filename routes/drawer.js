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
      }}
    >
      <Drawer.Screen
        name="Home Page"
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
