import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Note = ({ id, noteTitle, content, starred, locked }) => {
    return (
        <TouchableOpacity style={styles.listItem} id={id}>
            <Text style={styles.listItemText}>{noteTitle}</Text>
            <View style={styles.iconDiv}>
                {
                    locked && (
                        <FontAwesome name="lock" size={18} color="black" style={ { marginTop: 2 }, starred && locked && { marginRight: 5 } } />
                    )
                }
                {
                    starred && (
                        <AntDesign name="star" style={styles.listItemIcon} size={16} color="black" />
                    )
                }
                <Entypo name="chevron-small-right" size={24} color="black" style={{ marginRight: 2, marginLeft: 4 }}/>
            </View>
        </TouchableOpacity>
    )
}

export default Note;

const styles = StyleSheet.create({
    listItem: {
        width: "92%",
        backgroundColor: "#F9F9F9",
        padding: 7,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 13,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "space-between",
        marginVertical: 4
    },
    listItemText: {
        fontSize: 18,
        fontWeight: "500"
    },
    iconDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
});
