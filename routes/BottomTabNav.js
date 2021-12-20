import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Navigator
import { ChallengesNavigator } from "./ChallengesStackNav";
import { DashboardNavigator } from "./DashboardStackNav";
import { MagazineNavigator } from "./MagazineStackNav";
import { MoreNavigator } from "./MoreStackNav";
import { SquadNavigator } from "./SquadStackNav";

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
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="Magazine"
                component={MagazineNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="smartphone" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Challenges"
                component={ChallengesNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="flag" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Dashboard"
                component={DashboardNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="bolt" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Équipe"
                component={SquadNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="groups" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Plus"
                component={MoreNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="more-horiz" size={size} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};
