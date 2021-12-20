import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Squad from "../screens/Squad";

const SquadStack = createStackNavigator();

export const SquadNavigator = () => {
    return (
        <SquadStack.Navigator>
            <SquadStack.Screen name="Équipes" component={Squad} />
        </SquadStack.Navigator>
    );
};
