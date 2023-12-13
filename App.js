import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Register, Login, Home } from "./screens";
import Splash from "./screens/Splash";
import Icon from "react-native-vector-icons/Ionicons";
import Main from "./screens/Main";
import Help from "./screens/Help";
import About from "./screens/About";
import Reports from "./screens/Reports";
import Dentists from "./screens/Dentists";
import Appointments from "./screens/Appointments";
import Products from "./screens/Products";
import Helpmore from "./screens/Helpmore";
import Dentistpage from "./screens/Dentistpage";
import Login1 from "./screens/Logindentist";
import Consult from "./screens/Consult";
import Reply from "./screens/Reply";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Consult"
          component={Consult}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen
          name="Dentist Home"
          component={Dentistpage}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Dentists" component={Dentists} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen
          name="Login1"
          component={Login1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Information" component={Helpmore} />

        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Reply"
          component={Reply}
          options={{
            title: "Feedback",
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
