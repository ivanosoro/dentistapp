import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, StatusBar, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, Button } from "react-native-elements";
import { images } from "../constants";
import { useState, useEffect } from "react";
const Register = (props) => {
  const navigation = props.navigation;

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fnames, setFnames] = useState("");
  const setData = async () => {
    if (
      username.length == 0 ||
      password.length == 0 ||
      email.length == 0 ||
      fnames.length == 0
    ) {
      Alert.alert("Warning", "Please Fill all fields");
    } else {
      try {
        await AsyncStorage.setItem("Username", username);
        await AsyncStorage.setItem("1password", password);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("fnames", fnames);
        Alert.alert(
          "Success",
          "Registration was successful. You can now log in"
        );
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingTop: 40,
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <Image
          source={images.register}
          resizeMode="contain"
          style={{
            height: "90%",
            width: "90%",
          }}
        />
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: "#fff",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#636262",
            padding: 20,
            marginBottom: 10,
          }}
        >
          Create New Account
        </Text>
        <View>
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "100%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 5,
            }}
            inputStyle={{
              fontSize: 14,
            }}
            onChangeText={(value) => setFnames(value)}
            placeholder="Full Names"
            leftIcon={<Icon name="person-sharp" size={18} color="#cacaca" />}
          />
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "100%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 5,
            }}
            inputStyle={{
              fontSize: 14,
            }}
            onChangeText={(value) => setName(value)}
            placeholder="Username"
            leftIcon={<Icon name="person-outline" size={18} color="#cacaca" />}
          />
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "100%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 5,
            }}
            inputStyle={{
              fontSize: 14,
            }}
            maxLength={255}
            onChangeText={(value) => setEmail(value)}
            placeholder="E-mail"
            leftIcon={<Icon name="mail-open-sharp" size={18} color="#cacaca" />}
          />
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "100%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 10,
            }}
            inputStyle={{
              fontSize: 14,
            }}
            maxLength={20}
            onChangeText={(value) => setPassword(value)}
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={<Icon name="lock-closed" size={18} color="#cacaca" />}
          />
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <Button
              title="REGISTER"
              buttonStyle={{
                backgroundColor: "#6699ff",
                padding: 12,
                width: "100%",
                borderRadius: 40,
              }}
              onPress={setData}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "#bfbfbf",
              }}
            >
              Aleardy have an account ?
            </Text>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{
                color: "#8462f5",
              }}
            >
              {" "}
              Login here
            </Text>
          </View>
        </View>
      </View>
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
export default Register;
