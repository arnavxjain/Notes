import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Note = ({ noteTitle, id, content, starred, locked }) => {
    return (
        <View style={styles.container}>
            <View>Title</View>
        </View>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        paddingTop: 90,
        backgroundColor: "white",
        height: "100%"
    }
});
