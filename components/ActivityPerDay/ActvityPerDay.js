import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Composants
// import Activity from "./Type/Activity/Activity";
import Bonus from "../../components/ActivityPerDay/Type/Bonus/Bonus";
import Challenge from "../../components/ActivityPerDay/Type/Challenge/Challenge";
import Cycling from "./Type/Activity/Cycling/Cycling";
import Walking from "./Type/Activity/Walking/Walking";

// Styles
import globalStyles from "../../styles/globalStyles";

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

    const getComponentByType = (type, item) => {
        if (type === "activity") {
            if (item.payload.type === "Cycling") {
                return (
                    <Cycling
                        distance={item.payload.distance}
                        duration={item.payload.duration}
                        points={item.payload.points}
                    />
                );
            } else if (item.payload.type === "Walking") {
                return (
                    <Walking steps={item.payload.steps} points={item.payload.points} />
                );
            }
        } else if (type === "bonus") {
            return <Bonus points={item.payload.points} />;
        } else if (type === "challenge") {
            return (
                <Challenge
                    title={item.payload.display.title}
                    start={item.payload.timeframe.start}
                    end={item.payload.timeframe.end}
                    badge={item.payload.display.badge}
                />
            );
        }
    };

    return (
        <View style={styles.containerActivity}>
            <View style={styles.divDateStyle}>
                <Text style={styles.textDateStyle}>{getDate(item.date)} </Text>
            </View>
            <View>{getComponentByType(item.type, item)}</View>
        </View>
    );
};

export default ActvityPerDay;

const styles = StyleSheet.create({
    containerActivity: {
        marginBottom: 20,
    },
    divDateStyle: {
        marginBottom: 5,
        fontWeight: "bold",
    },
    textDateStyle: {
        fontWeight: "bold",
        color: globalStyles.white,
    },
});
