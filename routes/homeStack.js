import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { Button } from 'react-native';
import About from '../screens/about';

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
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
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
