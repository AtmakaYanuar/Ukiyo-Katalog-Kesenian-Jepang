import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavbar from "./src/navigation/BottomNavbar";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* TAB */}
        <Stack.Screen
          name="MainTabs"
          component={BottomNavbar}
          options={{ headerShown: false }}
        />

        {/* DETAIL */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: "Detail Budaya",
            headerStyle: {
              backgroundColor: "#FFF0F5",
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}