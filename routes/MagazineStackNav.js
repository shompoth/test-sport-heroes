import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Magazine from "../screens/Magazine";

// Styles
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const MagazineStack = createStackNavigator();

export const MagazineNavigator = () => {
    return (
        <MagazineStack.Navigator
            screenOptions={{
                headerTintColor: globalStyles.white,
                headerStyle: { backgroundColor: globalStyles.dark },
            }}
        >
            <MagazineStack.Screen
                name="Magazine"
                component={Magazine}
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
        </MagazineStack.Navigator>
    );
};
