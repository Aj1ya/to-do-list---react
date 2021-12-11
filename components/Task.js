import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";

const Task = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <View style={styles.square}></View>
                <Text style={StyleSheet.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemleft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square:{
        width: 24,
        height: 24,
        backgroundColor: '#2ff74a',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#2ff74a',
    }


});

export default Task;