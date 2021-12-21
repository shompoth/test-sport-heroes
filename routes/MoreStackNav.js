import { Image } from "react-native";

// StackNav
import { createStackNavigator } from "@react-navigation/stack";

// Redux
import { useSelector } from "react-redux";

// Screen
import More from "../screens/More";

// Styles
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const MoreStack = createStackNavigator();

export const MoreNavigator = () => {
    // UseSelector
    const { backgroundColorDark, textColorWhite } = useSelector(state => state.styles);

    return (
        <MoreStack.Navigator
            screenOptions={{
                headerTintColor: textColorWhite,
                headerStyle: { backgroundColor: backgroundColorDark },
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
