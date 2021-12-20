import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// Composants
import Spinner from "../shared/Spinner";

const Dashboard = () => {
    const [date, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={styles.container}>
            {isLoading ? <Spinner /> : <View>Hello</View>}
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
    },
});
