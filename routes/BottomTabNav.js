import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Navigator
import { ChallengesNavigator } from "./ChallengesStackNav";
import { DashboardNavigator } from "./DashboardStackNav";
import { MagazineNavigator } from "./MagazineStackNav";
import { MoreNavigator } from "./MoreStackNav";
import { SquadNavigator } from "./SquadStackNav";

// Redux
import { useSelector } from "react-redux";

//Styles
import globalStyles from "../styles/globalStyles";

//Icon
import { MaterialIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = () => {
    // UseSelector
    const { backgroundColorDark, textColorWhite } = useSelector(state => state.styles);

    return (
        <BottomTab.Navigator
            initialRouteName="Dashboard screen"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: globalStyles.primary,
                tabBarStyle: { backgroundColor: backgroundColorDark },
            }}
        >
            <BottomTab.Screen
                name="Magazine screen"
                component={MagazineNavigator}
                options={{
                    title: "Magazine",

                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="smartphone" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Challenges screen"
                component={ChallengesNavigator}
                options={{
                    title: "Challenges",

                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="flag" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Dashboard screen"
                component={DashboardNavigator}
                options={{
                    title: "Dashboard",

                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="bolt" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Squads screen"
                component={SquadNavigator}
                options={{
                    title: "Équipes",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="groups" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="More screen"
                component={MoreNavigator}
                options={{
                    title: "Plus",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="more-horiz" size={size} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};
