import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Magazine from "../screens/Magazine";

const MagazineStack = createStackNavigator();

export const MagazineNavigator = () => {
    return (
        <MagazineStack.Navigator>
            <MagazineStack.Screen
                name="Magazine"
                component={Magazine}
                options={{
                    headerRight: () => (
                        <Image
                            style={{ marginRight: 10, width: 35, height: 35 }}
                            source={require("../assets/shompoth.png")}
                        />
                    ),
                }}
            />
        </MagazineStack.Navigator>
    );
};
