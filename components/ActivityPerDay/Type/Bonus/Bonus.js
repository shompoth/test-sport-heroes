import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        <TouchableOpacity style={styles.containerBonus} activeOpacity={0.8}>
            <View style={styles.svgAndDescription}>
                <View style={defaultStyles.mr15}>
                    <SvgStar />
                </View>
                <Text style={styles.textBonus}>Bonus Challenge</Text>
            </View>
            <View style={defaultStyles.flexRow}>
                <Text style={{ color: globalStyles.white }}>{points}</Text>
                <MaterialIcons name="bolt" size={17} color={globalStyles.primary} />
            </View>
        </TouchableOpacity>
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
