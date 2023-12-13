import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, Button } from "react-native-elements";
import { images } from "../constants";

const Login = (props) => {
  const navigation = props.navigation;
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
          source={require("../assets/images/dentmg.jpg")}
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
            inputStyle={{
              fontSize: 14,
            }}
            maxLength={15}
            placeholder=" Dentist Username"
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
              onPress={() => navigation.navigate("Dentist Home")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 10,
              paddingHorizontal: 20,
            }}
          ></View>
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
                onPress={() => navigation.navigate("Login")}
                style={{
                  color: "#8462f5",
                }}
              >
                {" "}
                User
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
