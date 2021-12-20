import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Squad from "../screens/Squad";

// Styles
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const SquadStack = createStackNavigator();

export const SquadNavigator = () => {
    return (
        <SquadStack.Navigator
            screenOptions={{
                headerTintColor: globalStyles.white,

                headerStyle: { backgroundColor: globalStyles.dark },
            }}
        >
            <SquadStack.Screen
                name="Équipes"
                component={Squad}
                options={{
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
        </SquadStack.Navigator>
    );
};
