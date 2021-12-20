import { StyleSheet } from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./routes/BottomTabNav";

// export default AppNav;

export default function App() {
    return (
        <NavigationContainer>
            <BottomNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
