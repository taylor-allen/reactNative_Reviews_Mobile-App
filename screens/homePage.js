import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomePage({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Amazing game with stunning visuals and gameplay.', key: '1'},
        { title: 'Super Mario Odyssey', rating: 4, body: 'Great platforming experience with creative levels.', key: '2'},
        { title: 'The Legend of Zelda: Breath of the Wild', rating: 3, body: 'A revolutionary open-world experience.', key: '3'},
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews} 
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review Details', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.key} // Ensure unique keys
            />
        </View>
    );
}
