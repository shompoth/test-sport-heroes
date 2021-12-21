import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

// Style
import globalStyles from "../../../../styles/globalStyles";
import defaultStyles from "../../../../styles/defaultStyles";

// Redux
import { useSelector } from "react-redux";

// SVG
import SvgStar from "../../../../shared/SvgIcon/SvgStar";

const Bonus = ({ points }) => {
    // UseSelector
    const { textColorWhite } = useSelector(state => state.styles);

    return (
        <TouchableOpacity style={styles.containerBonus} activeOpacity={0.8}>
            <View style={styles.svgAndDescription}>
                <View style={defaultStyles.mr15}>
                    <SvgStar />
                </View>
                <Text style={styles.textBonus}>Bonus Challenge</Text>
            </View>
            <View style={defaultStyles.flexRow}>
                <Text style={{ color: textColorWhite }}>{points}</Text>
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
