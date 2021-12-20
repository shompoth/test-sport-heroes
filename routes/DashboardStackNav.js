import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Image
import profil from "../assets/shompoth.png";

// Screen
import Dashboard from "../screens/Dashboard";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import globalStyles from "../styles/globalStyles";

const DashboardStack = createStackNavigator();

export const DashboardNavigator = () => {
    return (
        <DashboardStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: globalStyles.dark },
            }}
        >
            <DashboardStack.Screen
                name="Nouvelles activités"
                component={Dashboard}
                options={{
                    headerTitleStyle: {
                        backgroundColor: globalStyles.lightGrey,
                        padding: 5,
                        borderRadius: 5,
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => alert("Fonctionnalité pas encore disponible")}
                        >
                            <MaterialIcons
                                name="add-circle"
                                size={35}
                                color={globalStyles.primary}
                                style={{ marginLeft: 10 }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => alert("Page profil pas encore disponible")}
                        >
                            <Image
                                style={{ marginRight: 10, width: 35, height: 35 }}
                                source={require("../assets/shompoth.png")}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </DashboardStack.Navigator>
    );
};
