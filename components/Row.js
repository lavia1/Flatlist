import React from "react";
import { Pressable, StyleSheet,  Text } from "react-native";

export default function Row({person, selectedId, select, styles}) {
    const backgroundColor = person.id === selectedId ? '#c0c0c0' : '#f5f5f5';

    return (
        <Pressable onPress={() => select(person.id)}>
            <Text
                style={[styles.row,{backgroundColor, padding: 10}]}>
                    {person.lastname}, {person.firstname}
            </Text>
        </Pressable>
    );
}