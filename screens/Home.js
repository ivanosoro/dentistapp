import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { Button } from "react-native-elements";

const Home = (props) => {
  const navigation = props.navigation;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Register"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title="Reply"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Reply")}
      />
      <Button
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        title="Login1"
        onPress={() => navigation.navigate("Login1")}
      />
      <Button
        title="Splash"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Splash")}
      />
      <Button
        title="Home"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Main")}
      />
      <Button
        title="About"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Reports"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Reports")}
      />
      <Button
        title="Dentists"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Dentists")}
      />
      <Button
        title="Appointments"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Appointments")}
      />
      <Button
        title="Products"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Products")}
      />
      <Button
        title="Help"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Help")}
      />
      <Button
        title="Gingivitis"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Information")}
      />
      <Button
        title="Dentistpage"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Dentist Home")}
      />
      <Button
        title="Consult"
        buttonStyle={{
          backgroundColor: "#8462f5",
          paddingHorizontal: 30,
          borderRadius: 40,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Consult")}
      />
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
export default Home;
