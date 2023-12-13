import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

function Main(props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          buttonStyle={{
            backgroundColor: "#78C0E0",
            padding: 15,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Login")}
          title="Logout"
        />
      ),
    });
  }, [navigation]);

  const navigation = props.navigation;
  const [name, setName] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem("Username").then((value) => {
        if (value != null) {
          setName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.htext}>DentHealth</Text>
      </View>
      <Image
        source={require("../assets/images/dentist.jpg")}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.stext}>
        Welcome {name} How can we help you today?
      </Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("Appointments")}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/bookapp.png")}
            />
            <Text>Appointments</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("Reports")}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/report.png")}
            />
            <Text>Reports</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("Dentists")}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/doctor.png")}
            />
            <Text>Dentists</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cards}>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("Help")}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/offhelp.png")}
            />
            <Text>Help and Information</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("Products")}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/dental.png")}
            />
            <Text>Products</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Image
              style={styles.icon}
              source={require("../assets/images/icons/offlinehelp.png")}
            />
            <Text>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  htext: {
    fontSize: 50,
    color: "#78C0E0",
    fontWeight: "bold",
  },
  stext: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  top: {
    paddingTop: 5,
  },
  img: {
    width: 330,
    height: 350,
  },
  cards: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 10,
    alignItems: "center",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    flexDirection: "column",
    flex: 1,
  },
  icon: {
    width: 67,
    height: 67,
  },
});
export default Main;
