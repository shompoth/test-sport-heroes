import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Redux
import { useSelector } from "react-redux";

const Squad = () => {
    // UseSelector
    const { backgroundColorDark, textColorWhite } = useSelector(state => state.styles);
    return (
        <View style={{ ...styles.container, backgroundColor: backgroundColorDark }}>
            <Text style={{ color: textColorWhite }}>Squad</Text>
        </View>
    );
};

export default Squad;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
