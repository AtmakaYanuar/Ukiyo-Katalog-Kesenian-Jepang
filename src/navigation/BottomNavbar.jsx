import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import EventScreen from "../screens/EventScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
      />

      <Tab.Screen
        name="Event"
        component={EventScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

    </Tab.Navigator>
    
  );
  
}
