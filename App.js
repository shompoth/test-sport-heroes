import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./routes/BottomTabNav";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomNavigator />
            </NavigationContainer>
        </Provider>
    );
}
