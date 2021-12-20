import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Squad from "../screens/Squad";

const SquadStack = createStackNavigator();

export const SquadNavigator = () => {
    return (
        <SquadStack.Navigator>
            <SquadStack.Screen
                name="Équipes"
                component={Squad}
                options={{
                    headerRight: () => (
                        <Image
                            style={{ marginRight: 10, width: 35, height: 35 }}
                            source={require("../assets/shompoth.png")}
                        />
                    ),
                }}
            />
        </SquadStack.Navigator>
    );
};
