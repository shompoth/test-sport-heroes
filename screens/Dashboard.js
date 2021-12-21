import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView } from "react-native";

// Composants
import ActvityPerDay from "../components/ActivityPerDay/ActvityPerDay";
import Spinner from "../shared/Spinner/Spinner";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions/actionGetData";

const Dashboard = () => {
    const { data } = useSelector(state => state.data);
    const { backgroundColorDark } = useSelector(state => state.styles);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getData());
        setIsLoading(false);
    }, []);

    return !isLoading ? (
        data.length > 0 ? (
            <View style={{ ...styles.container, backgroundColor: backgroundColorDark }}>
                <SafeAreaView>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ActvityPerDay item={item} />}
                        keyExtractor={item => item.resourceId}
                    />
                </SafeAreaView>
            </View>
        ) : (
            <View style={{ ...styles.container, backgroundColor: backgroundColorDark }}>
                <Text>Not data yet</Text>
            </View>
        )
    ) : (
        <View
            style={{
                ...styles.spinner,
                backgroundColor: backgroundColorDark,
            }}
        >
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
    spinner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});
