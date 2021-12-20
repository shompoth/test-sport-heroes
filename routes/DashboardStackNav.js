import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Dashboard from "../screens/Dashboard";

const DashboardStack = createStackNavigator();

export const DashboardNavigator = () => {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name="Dashboard" component={Dashboard} />
        </DashboardStack.Navigator>
    );
};
