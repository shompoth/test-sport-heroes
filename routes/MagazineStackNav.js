import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Magazine from "../screens/Magazine";

const MagazineStack = createStackNavigator();

export const MagazineNavigator = () => {
    return (
        <MagazineStack.Navigator>
            <MagazineStack.Screen name="Magazine" component={Magazine} />
        </MagazineStack.Navigator>
    );
};
