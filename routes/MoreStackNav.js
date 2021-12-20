import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import More from "../screens/More";

// Styles
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const MoreStack = createStackNavigator();

export const MoreNavigator = () => {
    return (
        <MoreStack.Navigator
            screenOptions={{
                headerTintColor: globalStyles.white,
                headerStyle: { backgroundColor: globalStyles.dark },
            }}
        >
            <MoreStack.Screen
                name="Plus"
                component={More}
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
        </MoreStack.Navigator>
    );
};
