import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Challenges from "../screens/Challenges";

// Styles
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChallengesStack = createStackNavigator();

export const ChallengesNavigator = () => {
    return (
        <ChallengesStack.Navigator
            screenOptions={{
                headerTintColor: globalStyles.white,
                headerStyle: { backgroundColor: globalStyles.dark },
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
