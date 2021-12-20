import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Styles
import globalStyles from "../styles/globalStyles";

const Challenges = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: globalStyles.white }}>Challenges</Text>
        </View>
    );
};

export default Challenges;

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.dark,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
