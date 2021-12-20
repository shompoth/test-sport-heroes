import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Challenges from "../screens/Challenges";

const ChallengesStack = createStackNavigator();

export const ChallengesNavigator = () => {
    return (
        <ChallengesStack.Navigator>
            <ChallengesStack.Screen
                name="Challenges"
                component={Challenges}
                options={{
                    headerRight: () => (
                        <Image
                            style={{ marginRight: 10, width: 35, height: 35 }}
                            source={require("../assets/shompoth.png")}
                        />
                    ),
                }}
            />
        </ChallengesStack.Navigator>
    );
};
