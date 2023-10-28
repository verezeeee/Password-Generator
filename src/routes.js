import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/Home";
import { Passwords } from "./pages/Passwords";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={"#000"} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Passwords"
        component={Passwords}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="lock-closed" size={size} color={"#000"} />;
            }
            return (
              <Ionicons name="lock-closed-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
