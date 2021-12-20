import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import globalStyles from "../../../../../styles/globalStyles";
import defaultStyles from "../../../../../styles/defaultStyles";

// SVG
import SvgBiking from "../../../../../shared/SvgIcon/SvgBiking";

const Cycling = ({ distance, duration, points }) => {
    // Fonction
    const convertToKm = num => (num / 1000).toFixed(1).replace(/[.,]0$/, "");

    const convertToHours = num => {
        let h = Math.floor(num / 3600);
        let m = Math.floor((num % 3600) / 60);
        let s = Math.floor((num % 3600) % 60);

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        return h + ":" + m + ":" + s;
    };

    return (
        <TouchableOpacity style={styles.containerCycling} activeOpacity={0.8}>
            <View style={defaultStyles.svgAndDescription}>
                <View style={defaultStyles.mr15}>
                    <SvgBiking />
                </View>
                <View>
                    <View style={defaultStyles.mb3}>
                        <Text>Vélo</Text>
                    </View>
                    <View style={defaultStyles.flexRow}>
                        <Text>{convertToKm(distance)} km</Text>
                        <Text> - </Text>
                        <Text>{convertToHours(duration)}</Text>
                    </View>
                </View>
            </View>
            <View style={defaultStyles.flexRow}>
                <Text>{points}</Text>
                <MaterialIcons name="bolt" size={17} color={globalStyles.primary} />
            </View>
        </TouchableOpacity>
    );
};

export default Cycling;

const styles = StyleSheet.create({
    containerCycling: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
