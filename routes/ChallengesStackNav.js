import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Challenges from "../screens/Challenges";

const ChallengesStack = createStackNavigator();

export const ChallengesNavigator = () => {
    return (
        <ChallengesStack.Navigator>
            <ChallengesStack.Screen name="Challenges" component={Challenges} />
        </ChallengesStack.Navigator>
    );
};
