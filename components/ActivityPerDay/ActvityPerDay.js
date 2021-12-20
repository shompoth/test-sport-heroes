import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ActvityPerDay = ({ item }) => {
    // Fonctions
    const getDate = date => {
        const newDate = new Date(date);
        const options = {
            weekday: "long",
            month: "long",
            day: "numeric",
        };
        return newDate.toLocaleDateString("fr-FR", options);
    };

    return (
        <View>
            <Text>{getDate(item.date)} </Text>
        </View>
    );
};

export default ActvityPerDay;

const styles = StyleSheet.create({});
