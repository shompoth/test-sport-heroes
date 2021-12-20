import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Magazine from "../screens/Magazine";
import Dashboard from "../screens/Dashboard";
import More from "../screens/More";
import Squad from "../screens/Squad";
import Challenges from "../screens/Challenges";

//Styles
import globalStyles from "../styles/globalStyles";

//Icon
import { MaterialIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                tabBarActiveTintColor: globalStyles.primary,
            }}
        >
            <BottomTab.Screen
                name="Magazine"
                component={Magazine}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="smartphone" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Challenges"
                component={Challenges}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="flag" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="bolt" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Équipes"
                component={Squad}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="groups" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Plus"
                component={More}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="more-horiz" size={size} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};
