import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, Button } from "react-native-elements";
import { images } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const navigation = props.navigation;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [sname, setSname] = useState("");
  const [spassword, setSpassword] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      AsyncStorage.getItem("Username").then((value) => {
        if (value != null) {
          setSname(value);
        }
      });

      AsyncStorage.getItem("1password").then((value) => {
        if (value != null) {
          setSpassword(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0 || password.length == 0) {
      Alert.alert("Warning", "Username and Password are Mandatory");
    } else {
      if (sname == name && spassword == password) {
        try {
          await AsyncStorage.setItem("Username", name);
          navigation.navigate("Main");
          console.log(spassword);
          console.log(password);
          console.log(sname);
          console.log(name);
        } catch (error) {
          console.log(error);
        }
      } else {
        Alert.alert("Error", "Please enter correct username and password");
        console.log("enter correct username and password");
        console.log(spassword);
        console.log(password);
        console.log(sname);
        console.log(name);
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
          source={images.login}
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
          Login to your account
        </Text>
        <View>
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "90%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 5,
            }}
            onChangeText={(value) => setName(value)}
            inputStyle={{
              fontSize: 14,
            }}
            maxLength={15}
            placeholder="Username"
            leftIcon={
              <Icon name="person-circle-sharp" size={18} color="#cacaca" />
            }
          />
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              width: "90%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 10,
            }}
            inputStyle={{
              fontSize: 14,
            }}
            onChangeText={(value) => setPassword(value)}
            maxLength={20}
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
              title="LOGIN"
              buttonStyle={{
                backgroundColor: "#6699ff",
                padding: 15,
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
              Don't have an account ?
            </Text>
            <Text
              onPress={() => navigation.navigate("Register")}
              style={{
                color: "#8462f5",
              }}
            >
              {" "}
              Register Here
            </Text>
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
              Login with
              <Text
                onPress={() => navigation.navigate("Login1")}
                style={{
                  color: "#8462f5",
                }}
              >
                {" "}
                Dentist
              </Text>{" "}
              Account
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
export default Login;
