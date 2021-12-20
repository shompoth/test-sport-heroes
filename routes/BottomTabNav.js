import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Magazine from "../screens/Magazine";
import Dashboard from "../screens/Dashboard";
import More from "../screens/More";
import Squad from "../screens/Squad";
import Challenges from "../screens/Challenges";

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Magazine" component={Magazine} />
            <BottomTab.Screen name="Challenges" component={Dashboard} />
            <BottomTab.Screen name="Dashboard" component={More} />
            <BottomTab.Screen name="Équipes" component={Squad} />
            <BottomTab.Screen name="Plus" component={Challenges} />
        </BottomTab.Navigator>
    );
};
