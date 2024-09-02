import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack"; // Import the stack navigator for the Home screen
import About from "../screens/about";

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack} // Use HomeStack instead of Home directly
        options={{ drawerLabel: "Home" }}
        
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: "About" }}
      />
    </Drawer.Navigator>
  );
}
