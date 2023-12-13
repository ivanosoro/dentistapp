import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
const Consult = (props) => {
  const navigation = props.navigation;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [issue, setIssue] = useState("");

  const setData = async () => {
    if (
      firstname.length == 0 ||
      lastname.length == 0 ||
      age.length == 0 ||
      issue.length == 0
    ) {
      Alert.alert(
        "Attention",
        "Please Fill all fields. They are all required."
      );
    } else {
      try {
        await AsyncStorage.setItem("firstname", firstname);
        await AsyncStorage.setItem("lastname", lastname);
        await AsyncStorage.setItem("age", age);
        await AsyncStorage.setItem("issue", issue);
        Alert.alert(
          "Success",
          "Your case has been submitted successfully. You shall receive a report upon review by a dentist"
        );
        navigation.navigate("Main");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Consult form</Text>
        <View style={styles.card}>
          <Text style={styles.cardtitle}>Personal details</Text>
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
            maxLength={15}
            onChangeText={(value) => setFirstname(value)}
            placeholder="first name"
            leftIcon={
              <Icon name="person-circle-sharp" size={18} color="#cacaca" />
            }
          />
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
            maxLength={15}
            onChangeText={(value) => setLastname(value)}
            placeholder="last Name"
            leftIcon={
              <Icon name="person-circle-sharp" size={18} color="#cacaca" />
            }
          />
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
            maxLength={15}
            keyboardType="numeric"
            onChangeText={(value) => setAge(value)}
            placeholder="Age"
            leftIcon={
              <Icon name="calendar-outline" size={18} color="#cacaca" />
            }
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardtitle}>Issue Description</Text>
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
            placeholder="Describe your issue here"
            onChangeText={(value) => setIssue(value)}
            leftIcon={<Icon name="pencil-outline" size={18} color="#cacaca" />}
            multiline={true}
            numberOfLines={5}
          />

          <View>
            <Text>Choose an Image that clearly details your dental issue</Text>
            <View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  title="Pick image"
                  onPress={pickImage}
                  buttonStyle={{
                    backgroundColor: "#8462f5",
                    paddingHorizontal: 30,
                    borderRadius: 40,
                    marginBottom: 10,
                  }}
                />

                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
              </View>
            </View>
            <View>
              <Button
                title="Submit Case"
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
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    width: 375,
    borderColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
  },
  cardtitle: {
    color: "#737373",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
export default Consult;
