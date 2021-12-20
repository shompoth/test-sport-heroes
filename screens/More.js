import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Styles
import globalStyles from "../styles/globalStyles";

const More = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: globalStyles.white }}>More</Text>
        </View>
    );
};

export default More;

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.dark,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
