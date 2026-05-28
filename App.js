import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavbar from "./src/navigation/BottomNavbar";
import DetailScreen from "./src/screens/DetailScreen";
import InputBlogScreen from "./src/screens/InputBlogScreen";
import MyCatalogScreen from "./src/screens/MyCatalogScreen";
import EditBlogScreen from "./src/screens/EditBlogScreen";

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

        {/* MyCatalog */}
        <Stack.Screen
          name="MyCatalog"
          component={MyCatalogScreen}
          options={{
            title: "Katalog Saya",
          }}
        />

        {/* Input */}
        <Stack.Screen
          name="InputBlog"
          component={InputBlogScreen}
          options={{
            title: "Tambah Kesenian",
          }}
        />

        <Stack.Screen 
          name="EditBlog" 
          component={EditBlogScreen} 
          option={{
            title: "Edit Katalog"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}