import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Button } from "react-native";
import axios from "axios";

// Composants
import ActvityPerDay from "../components/ActivityPerDay/ActvityPerDay";
import Spinner from "../shared/Spinner/Spinner";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://sh-tech-interview.s3.eu-west-3.amazonaws.com/frontend/feed.json",
            )
            .then(res => {
                const activitiesArray = [];
                activitiesArray.push(...res.data.data);

                setData(activitiesArray);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return !isLoading ? (
        data.length > 0 ? (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ActvityPerDay item={item} />}
                    keyExtractor={item => item.resourceId}
                />
            </View>
        ) : (
            <Text>Not data yet</Text>
        )
    ) : (
        <View style={styles.container}>
            <Spinner />
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
});
