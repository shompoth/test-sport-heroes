import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Squad from "../screens/Squad";

const SquadStack = createStackNavigator();

export const SquadNavigator = () => {
    return (
        <SquadStack.Navigator>
            <SquadStack.Screen name="Squad" component={Squad} />
        </SquadStack.Navigator>
    );
};
