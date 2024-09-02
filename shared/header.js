import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View>
            <View>
                <Text style={styles.headerText}>Taylor's Reviews App</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    }
});