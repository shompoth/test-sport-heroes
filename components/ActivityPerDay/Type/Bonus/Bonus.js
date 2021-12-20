import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Composant
import globalStyles from "../../../../styles/globalStyles";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

// Style
import defaultStyles from "../../../../styles/defaultStyles";

// SVG
import SvgStar from "../../../../shared/SvgIcon/SvgStar";

const Bonus = ({ points }) => {
    return (
        <View style={styles.containerBonus}>
            <View style={styles.svgAndDescription}>
                <View style={defaultStyles.mr15}>
                    <SvgStar />
                </View>
                <Text style={styles.textBonus}>Bonus Challenge</Text>
            </View>
            <View style={defaultStyles.flexRow}>
                <Text>{points}</Text>
                <MaterialIcons name="bolt" size={17} color={globalStyles.primary} />
            </View>
        </View>
    );
};

export default Bonus;

const styles = StyleSheet.create({
    containerBonus: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textBonus: {
        color: globalStyles.gold,
    },
    svgAndDescription: {
        flexDirection: "row",
        alignItems: "center",
    },
});
