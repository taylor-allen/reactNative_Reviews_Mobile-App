import React, { useState } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Super Mario Odyssey', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'The Legend of Zelda: Breath of the Wild', rating: 3, body: 'lorem ipsum', key: '3'},
      ]);

  return (
    <View style={globalStyles.container}>
      <FlatList 
        data={reviews} 
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Review Details', item)}>
                <Text style={globalStyles.titleText}>{ item.title }</Text>
            </TouchableOpacity>
        )}>
      </FlatList>
    </View>
  );
}
