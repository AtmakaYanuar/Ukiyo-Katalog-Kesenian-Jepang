import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavbar from "./src/navigation/BottomNavbar";

export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <BottomNavbar />
        <StatusBar style="dark" />
      </NavigationContainer>

    </SafeAreaProvider>
  );
}