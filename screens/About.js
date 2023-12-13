import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.logo}>
            <Image
              style={styles.img}
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.text}>Dent health</Text>
          </View>
          <Text>
            {" "}
            Dent health is a dentist on demand service that seeks to bring a
            dentist a step closer to you. We are commited to serve you by
            offering you access to the best possible dental care.
          </Text>
          <Text>Copyright 2021. All rights reserved</Text>
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
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#78C0E0",
    textAlign: "center",
  },
  logo: {
    top: 10,
  },
  card: {
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderWidth: 1,
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
  img: {
    width: 365,
    height: 400,
  },
});
export default About;
