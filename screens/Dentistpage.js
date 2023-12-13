import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-elements";
import { Text, StyleSheet, View, ScrollView } from "react-native";

const Dentistpage = (props) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          buttonStyle={{
            backgroundColor: "#6699ff",
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

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [issue, setIssue] = useState("");

  useEffect(() => {
    getData();
  }, []);

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
        <ScrollView>
          <View style={styles.every}>
            <View style={styles.header}>
              <Text style={styles.titles}> Welcome Dr. Ivan</Text>
            </View>
            <Text style={styles.pend}> Pending Cases</Text>
            <View style={styles.cards}>
              <View style={styles.card}>
                <Text style={styles.title}>Toothache Inquiry</Text>
                <Text> Monday,12 October</Text>
                <Text numberOfLines={5} style={styles.overview}>
                  Patient Name: {firstname} {lastname} is {age} years old.
                  {issue}
                </Text>
                <Text
                  onPress={() => navigation.navigate("Reply")}
                  style={styles.link}
                >
                  View Case
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.title}>Toothache Inquiry</Text>
                <Text> Monday,12 October</Text>
                <Text numberOfLines={5} style={styles.overview}>
                  lorem ipsum dolor Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Repudiandae quos ut culpa mollitia provident
                  modi quibusdam eveniet distinctio facere natus libero
                  accusamus repellat perspiciatis, officiis quaerat doloremque
                  maiores cupiditate! Distinctio. sit amet adisping lorem dolor
                  sit amet adipsiscing lorem dolor sit amet adipsiscing
                </Text>
                <Text style={styles.link}>View Case</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.pend}>Reviewed Cases</Text>
            <View>
              <View style={styles.cards}>
                <View style={styles.card}>
                  <Text style={styles.title}>Toothache Inquiry</Text>
                  <Text> Monday,12 October</Text>
                  <Text numberOfLines={5} style={styles.overview}>
                    lorem ipsum dolor Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Repudiandae quos ut culpa mollitia
                    provident modi quibusdam eveniet distinctio facere natus
                    libero accusamus repellat perspiciatis, officiis quaerat
                    doloremque maiores cupiditate! Distinctio. sit amet adisping
                    lorem dolor sit amet adipsiscing lorem dolor sit amet
                    adipsiscing
                  </Text>
                  <Text style={styles.link}>View Report</Text>
                </View>

                <View>
                  <View style={styles.card}>
                    <Text style={styles.title}>Toothache Inquiry</Text>
                    <Text> Monday,12 October</Text>
                    <Text numberOfLines={5} style={styles.overview}>
                      lorem ipsum dolor Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Repudiandae quos ut culpa mollitia
                      provident modi quibusdam eveniet distinctio facere natus
                      libero accusamus repellat perspiciatis, officiis quaerat
                      doloremque maiores cupiditate! Distinctio. sit amet
                      adisping lorem dolor sit amet adipsiscing lorem dolor sit
                      amet adipsiscing
                    </Text>
                    <Text style={styles.link}>View Report</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.card}>
                    <Text style={styles.title}>Toothache Inquiry</Text>
                    <Text> Monday,12 October</Text>
                    <Text numberOfLines={5} style={styles.overview}>
                      lorem ipsum dolor Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Repudiandae quos ut culpa mollitia
                      provident modi quibusdam eveniet distinctio facere natus
                      libero accusamus repellat perspiciatis, officiis quaerat
                      doloremque maiores cupiditate! Distinctio. sit amet
                      adisping lorem dolor sit amet adipsiscing lorem dolor sit
                      amet adipsiscing
                    </Text>
                    <Text style={styles.link}>View Report</Text>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.title}>Toothache Inquiry</Text>
                    <Text> Monday,12 October</Text>
                    <Text numberOfLines={5} style={styles.overview}>
                      lorem ipsum dolor Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Repudiandae quos ut culpa mollitia
                      provident modi quibusdam eveniet distinctio facere natus
                      libero accusamus repellat perspiciatis, officiis quaerat
                      doloremque maiores cupiditate! Distinctio. sit amet
                      adisping lorem dolor sit amet adipsiscing lorem dolor sit
                      amet adipsiscing
                    </Text>
                    <Text style={styles.link}>View Report</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
  every: {
    top: 40,
    padding: 1,
    alignContent: "flex-start",
  },
  title: {
    color: "#000",
    alignSelf: "flex-start",
  },
  titles: {
    color: "#8c8c8c",
    alignSelf: "flex-start",
    fontSize: 20,
  },
  cards: {
    padding: 10,
  },
  link: {
    textAlign: "right",
    color: "#8462f5",
  },
  overview: {
    flex: 1,
  },
  header: {
    color: "#1a001a",
    borderRadius: 5,
    flexDirection: "row",
  },
  pend: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
export default Dentistpage;
