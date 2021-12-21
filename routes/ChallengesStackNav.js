import { Image } from "react-native";

// StackNav
import { createStackNavigator } from "@react-navigation/stack";

// Redux
import { useSelector } from "react-redux";

// Screen
import Challenges from "../screens/Challenges";

// Styles
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChallengesStack = createStackNavigator();

export const ChallengesNavigator = () => {
    // UseSelector
    const { backgroundColorDark, textColorWhite } = useSelector(state => state.styles);

    return (
        <ChallengesStack.Navigator
            screenOptions={{
                headerTintColor: textColorWhite,
                headerStyle: { backgroundColor: backgroundColorDark },
            }}
        >
            <ChallengesStack.Screen
                name="Challenges"
                component={Challenges}
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
        </ChallengesStack.Navigator>
    );
};
