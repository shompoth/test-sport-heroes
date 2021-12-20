import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Svg
import SvgFlag from "../../../../shared/SvgIcon/SvgFlag";

// Styles
import defaultStyles from "../../../../styles/defaultStyles";
import globalStyles from "../../../../styles/globalStyles";

const Challenge = ({ title, start = null, end = null, badge = null }) => {
    // State
    const [isOpen, setIsOpen] = useState(false);

    const newBadge = badge;

    return (
        <TouchableOpacity
            style={styles.containerChallenge}
            activeOpacity={0.8}
            onPress={() => setIsOpen(!isOpen)}
        >
            <View style={defaultStyles.svgAndDescription}>
                <View style={defaultStyles.mr15}>
                    <SvgFlag />
                </View>
                <View>
                    <View style={defaultStyles.mb3}>
                        <Text style={{ color: globalStyles.white }}>
                            Challenge {start && (end ? "complété" : "à finir")}
                        </Text>
                    </View>
                    <Text style={{ color: globalStyles.white }}>{title}</Text>
                </View>
            </View>
            <View style={styles.imageDiv}>
                {isOpen && (
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{
                            uri: newBadge,
                        }}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default Challenge;

const styles = StyleSheet.create({
    imageDiv: {
        justifyContent: "center",
        alignItems: "center",
    },
});
