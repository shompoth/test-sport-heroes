import { createStackNavigator } from "@react-navigation/stack";

// Screen
import More from "../screens/More";

const MoreStack = createStackNavigator();

export const MoreNavigator = () => {
    return (
        <MoreStack.Navigator>
            <MoreStack.Screen name="Plus" component={More} />
        </MoreStack.Navigator>
    );
};