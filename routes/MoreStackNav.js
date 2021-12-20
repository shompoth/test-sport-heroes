import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import More from "../screens/More";

const MoreStack = createStackNavigator();

export const MoreNavigator = () => {
    return (
        <MoreStack.Navigator>
            <MoreStack.Screen
                name="Plus"
                component={More}
                options={{
                    headerRight: () => (
                        <Image
                            style={{ marginRight: 10, width: 35, height: 35 }}
                            source={require("../assets/shompoth.png")}
                        />
                    ),
                }}
            />
        </MoreStack.Navigator>
    );
};
