import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Help extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View View style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Gingivitis</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Bad Breath</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Tooth Decay</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Periodontal Disease</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Oral Cancer</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Mouth Sores</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Tooth Sensitivity</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Toothaches</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Information")}
            >
              <View style={styles.item}>
                <Text style={styles.title}>Bad smile</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  wrapper: {
    paddingLeft: 30,
    paddingBottom: 30,
    borderColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    width: 355,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
    margin: 8,
  },
  item: {
    paddingTop: 5,
    width: "100%",
    textAlign: "left",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default Help;
