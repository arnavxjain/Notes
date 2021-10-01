import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Notes</Text>
            
            <TouchableOpacity style={styles.link} activeOpacity={0.2}>
                <Text style={{ color: "#FF5D5D", fontWeight: "700" }}>More About Notes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} activeOpacity={0.16} onPress={() => navigation.navigate("AllNotes")}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Entypo name="list" style={styles.listItemIcon}  size={24} color="black" />
                    <Text style={styles.listItemText}>All Notes</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" style={{ marginRight: 2 }}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} activeOpacity={0.16}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Feather name="lock" size={23} style={styles.listItemIcon} color="black" />
                    <Text style={styles.listItemText}>Locked</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" style={{ marginRight: 2 }}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} activeOpacity={0.16}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name="staro" style={styles.listItemIcon} size={23} color="black" />
                    <Text style={styles.listItemText}>Starred</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" style={{ marginRight: 2 }}/>
            </TouchableOpacity>

            <View style={styles.hr}></View>

            <TouchableOpacity style={styles.listItemAbsolute} activeOpacity={0.16}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="ios-settings-outline" style={styles.listItemIcon} size={24} color="black" />
                    <Text style={styles.listItemText}>Settings</Text>
                </View>
                <Entypo name="chevron-small-right" size={24} color="black" style={{ marginRight: 2 }}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.newButton}>
                <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: 90,
        backgroundColor: "white",
        height: "100%"
    },
    bold: {
        fontWeight: "bold",
        fontSize: 40,
        color: "black",
        marginLeft: 20,
    },
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
    listItemIcon: {
        marginHorizontal: 4
    },
    listItemAbsolute: {
        width: "92%",
        backgroundColor: "#F9F9F9",
        padding: 7,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 13,
        marginLeft: "4%",
        marginRight: "4%",
        justifyContent: "space-between",
        marginVertical: 4,
        // position: "absolute",
        // bottom: "1%",
    },
    hr: {
        width: "92%",
        marginRight: "auto",
        marginLeft: "auto",
        height: 1,
        backgroundColor: '#e3e3e3',
        borderRadius: 4,
        marginVertical: 6
    },
    newButton: {
        position: "absolute",
        right: 20,
        bottom: 40,
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#FF5D5D"
    },
    link: {
        // position: "absolute",
        // bottom: 55,
        // left: 30,
        marginLeft: 22,
        marginBottom: 18,
    }
});
