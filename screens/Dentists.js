import React from "react";
import { Text, StyleSheet, View } from "react-native";

class Dentists extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Dr. Ivan Osoro MD, PhD</Text>
          <Text> Murang'a Level 5 Hospital Resident Physician</Text>
          <Text numberOfLines={5} style={styles.overview}>
            Dr Ivan Osoro is a seasoned doctor with many years of experience
            serving in reputable hospitals across the country. He has gained
            several accolades in his career, writtenseveral mresearch papers and
            authored many books. You are in safe hands.
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Consult")}
            style={styles.link}
          >
            Consult
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Dr. Haruki Murakami MD, PhD</Text>
          <Text> Murang'a Level 5 Hospital Resident Physician</Text>
          <Text numberOfLines={5} style={styles.overview}>
            Dr Haruki Murakami is a seasoned doctor with many years of
            experience serving in reputable hospitals across the country. He has
            gained several accolades in his career, writtenseveral mresearch
            papers and authored many books. You are in safe hands.
          </Text>
          <Text style={styles.link}>Consult</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Dr. Harrison Wells MD, PhD</Text>
          <Text> Murang'a Level 5 Hospital Resident Physician</Text>
          <Text numberOfLines={5} style={styles.overview}>
            Dr Harrison Wells is a seasoned doctor with many years of experience
            serving in reputable hospitals across the country. He has gained
            several accolades in his career, writtenseveral mresearch papers and
            authored many books. You are in safe hands.
          </Text>
          <Text style={styles.link}>Consult</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Dr. Wong Xi Jin MD, PhD</Text>
          <Text> Murang'a Level 5 Hospital Resident Physician</Text>
          <Text numberOfLines={5} style={styles.overview}>
            Dr Wong Xi Jin is a seasoned doctor with many years of experience
            serving in reputable hospitals across the country. He has gained
            several accolades in his career, writtenseveral mresearch papers and
            authored many books. You are in safe hands.
          </Text>
          <Text style={styles.link}>Consult</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Dr. Stephen Strange MD, PhD</Text>
          <Text> Murang'a Level 5 Hospital Resident Physician</Text>
          <Text numberOfLines={5} style={styles.overview}>
            Dr Stephen Strange is a seasoned doctor with many years of
            experience serving in reputable hospitals across the country. He has
            gained several accolades in his career, writtenseveral mresearch
            papers and authored many books. You are in safe hands.
          </Text>
          <Text style={styles.link}>Consult</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Dr. Aelfraed Ongere MD, PhD</Text>
          <Text> Murang'a Level 5 Hospital Resident Physician</Text>
          <Text numberOfLines={5} style={styles.overview}>
            Dr Aelfraed Ongere is a seasoned doctor with many years of
            experience serving in reputable hospitals across the country. He has
            gained several accolades in his career, writtenseveral mresearch
            papers and authored many books. You are in safe hands.
          </Text>
          <Text style={styles.link}>Consult</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card: {
    flex: 1,
    borderColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 9,
    elevation: 3,
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
});
export default Dentists;
