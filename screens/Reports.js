import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet, View } from "react-native";

const Reports = () => {
  const [report, setReport] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("report").then((value) => {
        if (value != null) {
          setReport(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.title}>Toothache Inquiry</Text>
          <Text> Monday,12 October</Text>
          <Text numberOfLines={5} style={styles.overview}>
            {report}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Toothache Inquiry</Text>
          <Text> Monday,12 October</Text>
          <Text numberOfLines={5} style={styles.overview}>
            The issue you are currently experiencing is not a strange
            experience. it is very normal and you should not be worried that
            much.I would like to schedule a physical appointment with you though
            so that i can observe in order to better give an onformed decision.
            Dont worry you will be just fine.
          </Text>
          <Text style={styles.link}>Read full report</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Toothache Inquiry</Text>
          <Text> Monday,12 October</Text>
          <Text numberOfLines={5} style={styles.overview}>
            The teeth sensitivity you are currently experiencing caused by cold
            drinks is diturbing a bit. We should schedule an apointment so that
            i can observe you further and make an informed decsiion with
            certainty. welcome to the hospital and we shall get you sortyed out.
          </Text>
          <Text style={styles.link}>Read full report</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 350,
    top: 10,
    height: 180,
    borderColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
  },
  link: {
    textAlign: "right",
    color: "#8462f5",
  },
  overview: {
    flex: 1,
  },
  cards: {
    alignSelf: "center",
    justifyContent: "center",
  },
});
export default Reports;
