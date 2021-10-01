import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Note from '../components/Note';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const AllNotes = ({ navigation }) => {

    const notes = [
        {
            id: 1415,
            title: 'Passwords',
            content: 'Notes Trial 01 Content. Notes Trial 01 Content. Notes Trial 01 Content.',
            starred: false,
            locked: true
        },
        {
            id: 2653,
            title: 'Physics',
            content: 'Notes Trial 02 Content. Notes Trial 02 Content. Notes Trial 02 Content.',
            starred: false,
            locked: false
        },
        {
            id: 4381,
            title: 'List',
            content: 'Notes Trial 03 Content. Notes Trial 03 Content. Notes Trial 03 Content.',
            starred: true,
            locked: true
        }
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate("Home")}>
                <Entypo name="chevron-small-left" size={40} color="black"/>
            </TouchableOpacity>
            <Text style={styles.bold}>All Notes</Text>
            {
                notes.map((note) => {
                    return (
                        <Note key={note.id} noteTitle={note.title} id={note.id} content={note.content} starred={note.starred} locked={note.locked}/>
                    )
                })
            }
            </ScrollView>
            <TouchableOpacity style={styles.newButton}>
                <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default AllNotes

const styles = StyleSheet.create({
    container: {
        // paddingTop: 90,
        backgroundColor: "white",
        height: "100%"
    },
    bold: {
        fontWeight: "bold",
        fontSize: 40,
        color: "black",
        marginLeft: 20,
    },
    backIcon: {
        // position: "absolute",
        // top: 45,
        // left: 80,
        marginTop: 45,
        marginLeft: 7,
        // marginBottom: 10
    },
    newButton: {
        position: "absolute",
        right: 20,
        bottom: 40,
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#FF5D5D"
    },
});
