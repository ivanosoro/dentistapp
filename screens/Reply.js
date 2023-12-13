import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Button } from "react-native-elements";
import { Text, StyleSheet, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Reply = (props) => {
  const navigation = props.navigation;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [issue, setIssue] = useState("");
  const [report, setReport] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const setData = async () => {
    if (report.length == 0) {
      Alert.alert("Warning", "Cannot submit empty feedback");
    } else {
      try {
        await AsyncStorage.setItem("report", report);
        navigation.navigate("Login");
        Alert.alert("Report sent to user successfully");
        navigation.navigate("Dentist");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getData = () => {
    try {
      AsyncStorage.getItem("firstname").then((value) => {
        if (value != null) {
          setFirstname(value);
        }
      });
      AsyncStorage.getItem("lastname").then((value) => {
        if (value != null) {
          setLastname(value);
        }
      });

      AsyncStorage.getItem("age").then((value) => {
        if (value != null) {
          setAge(value);
        }
      });

      AsyncStorage.getItem("issue").then((value) => {
        if (value != null) {
          setIssue(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Detailed Report</Text>
        <View style={styles.card}>
          <Text>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Patient name
            </Text>
            :{firstname} {lastname}
          </Text>
          <Text>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Age
            </Text>
            :{age}
          </Text>
          <Text>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Issue
            </Text>
            :{issue}
          </Text>
          <Input
            inputContainerStyle={{
              borderColor: "#ddd",
              borderWidth: 1,
              backgroundColor: "#fff",
              width: "90%",
              paddingHorizontal: 10,
              paddingTop: 1,
              paddingBottom: 3,
              borderRadius: 5,
            }}
            inputStyle={{
              fontSize: 14,
            }}
            placeholder="Feedback"
            onChangeText={(value) => setReport(value)}
            leftIcon={<Icon name="pencil-outline" size={18} color="#cacaca" />}
            multiline={true}
            numberOfLines={8}
          />
        </View>
        <Button
          title="Submit Feedback"
          onPress={setData}
          buttonStyle={{
            backgroundColor: "#8462f5",
            paddingHorizontal: 30,
            borderRadius: 40,
            marginBottom: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#8e8e8e",
  },
  card: {
    borderWidth: 3,
    width: 365,
    borderRadius: 10,
    borderColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
    paddingBottom: 5,
    padding: 5,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
  },
});
export default Reply;
