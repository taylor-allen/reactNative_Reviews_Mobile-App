import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
            <Text>This is an app that I'm working on to build my React Native skills.</Text>
            <Button
        onPress={() => navigation.navigate('Home')}
        title="Return to Home Screen"
      />
        </View>
    );
}
