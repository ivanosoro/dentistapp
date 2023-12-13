import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, StyleSheet, View } from "react-native";

class Dentists extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.title}>
              <Icon name="alarm-outline" size={30} color="#78C0E0" /> 1400Hrs
              12th Sep 2021
            </Text>
            <Text style={styles.subtitle}>
              Appointment with Dr Ivan Osoro MD, PhD
            </Text>

            <Text numberOfLines={3} style={styles.overview}>
              <Text style={styles.bolder}>Issue Raised</Text>: The patient
              raised an issue with toothache problems. The user has been
              experiencing tooth sensitivity with toothache problmes especially
              in the morings and when having extremely cold drinks. The issue
              has persisted for well over a month now since the issue has been
              highly persistent and cannot be solved easily hence consultation.
            </Text>
            <Text style={styles.link}> See Particulars</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>
              <Icon name="alarm-outline" size={30} color="#78C0E0" /> 1400Hrs
              21st Dec 2025
            </Text>
            <Text style={styles.subtitle}>
              Appointment with Dr Haruki Murakami MD, PhD
            </Text>

            <Text numberOfLines={3} style={styles.overview}>
              <Text style={styles.bolder}>Issue Raised</Text>:The patient raised
              an issue with toothache problems. The user has been experiencing
              tooth sensitivity with toothache problmes especially in the
              morings and when having extremely cold drinks. The issue has
              persisted for well over a month now since the issue has been
              highly persistent and cannot be solved easily hence consultation.
            </Text>
            <Text style={styles.link}> See Particulars</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  card: {
    height: 180,
    backgroundColor: "#f2f2f2",
    top: 15,
    width: 365,
    borderColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
  },
  cards: {
    alignContent: "flex-start",
  },
  title: {
    fontWeight: "700",
    fontSize: 25,
    color: "#cacaca",
  },
  link: {
    textAlign: "right",
    color: "#8462f5",
  },
  overview: {
    flex: 1,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 16,
  },
  bolder: {
    fontWeight: "600",
  },
});
export default Dentists;
