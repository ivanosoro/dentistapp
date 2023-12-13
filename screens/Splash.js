import React from "react";
import * as Animatable from "react-native-animatable";
import { StyleSheet, Text, View, Image } from "react-native";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const navigation = this.props.navigation;
    this.timeoutHandle = setTimeout(() => navigation.navigate("Login"), 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Animatable.View animation="bounceInDown" style={styles.logo}>
            <Image source={require("../assets/images/logo.png")} />
          </Animatable.View>
          <Text style={styles.text}>Dent health</Text>
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
    fontSize: 30,
    color: "#78C0E0",
    textAlign: "center",
  },
  logo: {
    alignSelf: "center",
  },
});
export default Splash;
