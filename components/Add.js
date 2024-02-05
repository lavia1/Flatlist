import React from "react";
import { View, TextInput, Button, StyleSheet} from 'react-native';
import { useState } from "react";

export default function Add({items, setItems}) {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            lastname: lastname,
            firstname: firstname,
        }
        const tempItems = [...items,newPerson]
            setItems(tempItems)
            setFirstName('')
            setLastName('')
    }



    return (
        <View style={styles.container}>
            <TextInput
                value={firstname}
                onChangeText={text => setFirstName(text)}
                placeholder="Firstname..."
            />
            <TextInput
                value={lastname}
                onChangeText={text => setLastName(text)}
                placeholder="Lastname..."
            />
            <Button title='Save' onPress={save} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
})
