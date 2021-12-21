import { Image } from "react-native";

// StackNav
import { createStackNavigator } from "@react-navigation/stack";

// Redux
import { useSelector } from "react-redux";

// Screen
import Squad from "../screens/Squad";

// Styles
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const SquadStack = createStackNavigator();

export const SquadNavigator = () => {
    // UseSelector
    const { backgroundColorDark, textColorWhite } = useSelector(state => state.styles);

    return (
        <SquadStack.Navigator
            screenOptions={{
                headerTintColor: textColorWhite,
                headerStyle: { backgroundColor: backgroundColorDark },
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
