import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Composants
import Marche from "../../components/ActivityPerDay/Type/Marche/Marche";
import Bonus from "../../components/ActivityPerDay/Type/Bonus/Bonus";
import Challenge from "../../components/ActivityPerDay/Type/Challenge/Challenge";

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

    const getComponentByType = type => {
        if (type === "activity") {
            return <Marche />;
        } else if (type === "bonus") {
            return <Bonus />;
        } else if (type === "challenge") {
            return <Challenge />;
        }
    };

    return (
        <View style={styles.ContainerActivity}>
            <Text>{getDate(item.date)} </Text>
            <View>{getComponentByType(item.type)}</View>
        </View>
    );
};

export default ActvityPerDay;

const styles = StyleSheet.create({
    ContainerActivity: {
        marginBottom: 10,
    },
});
