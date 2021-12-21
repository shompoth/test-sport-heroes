import { Image } from "react-native";

// StackNav
import { createStackNavigator } from "@react-navigation/stack";

// Redux
import { useSelector } from "react-redux";

// Screen
import Magazine from "../screens/Magazine";

// Styles
import { TouchableOpacity } from "react-native-gesture-handler";

const MagazineStack = createStackNavigator();

export const MagazineNavigator = () => {
    // UseSelector
    const { backgroundColorDark, textColorWhite } = useSelector(state => state.styles);

    return (
        <MagazineStack.Navigator
            screenOptions={{
                headerTintColor: textColorWhite,
                headerStyle: { backgroundColor: backgroundColorDark },
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
