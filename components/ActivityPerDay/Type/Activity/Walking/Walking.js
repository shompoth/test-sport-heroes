import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

// Style
import globalStyles from "../../../../../styles/globalStyles";
import defaultStyles from "../../../../../styles/defaultStyles";

// Svg
import SvgWalking from "../../../../../shared/SvgIcon/SvgWalking";

const Walking = ({ steps, points }) => {
    // Fonction
    const numberSpace = number => {
        const splitNumString = number.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
        return splitNumString;
    };

    return (
        <TouchableOpacity style={styles.containerWalking} activeOpacity={0.8}>
            <View style={defaultStyles.svgAndDescription}>
                <View style={defaultStyles.mr15}>
                    <SvgWalking />
                </View>
                <View>
                    <View style={defaultStyles.mb3}>
                        <Text>Marche</Text>
                    </View>
                    <Text>{numberSpace(steps)} pas</Text>
                </View>
            </View>
            <View style={defaultStyles.flexRow}>
                <Text>{points}</Text>
                <MaterialIcons name="bolt" size={17} color={globalStyles.primary} />
            </View>
        </TouchableOpacity>
    );
};

export default Walking;

const styles = StyleSheet.create({
    containerWalking: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
