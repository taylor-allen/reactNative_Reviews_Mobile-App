import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
            <Button
        onPress={() => navigation.navigate('Home Page')}
        title="Go to Home Screen"
      />
        </View>
    );
}
