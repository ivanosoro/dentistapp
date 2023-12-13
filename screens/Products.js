import React from "react";
import { Text, StyleSheet, View, Image, ScrollView, Alert } from "react-native";
import { Button } from "react-native-elements";

class Dentists extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product1.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 81</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>Floss</Text>
              <Text style={styles.subtitle}>
                Sturdy Floss for all your Flossing needs
              </Text>
              <Image
                source={require("../assets/images/product2.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 218</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>ToothPaste</Text>
              <Text style={styles.subtitle}>
                The one Toothpaste for all your Brushing needs
              </Text>
              <Image
                source={require("../assets/images/product3.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 128</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>MouthWash</Text>
              <Text style={styles.subtitle}>
                The Only MouthWash you will Ever Need!
              </Text>
              <Image
                source={require("../assets/images/product4.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 198</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>MouthGurgle</Text>
              <Text style={styles.subtitle}>
                The only mouth gurgle you will need
              </Text>
              <Image
                source={require("../assets/images/product5.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 19</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>Marvis</Text>
              <Text style={styles.subtitle}>
                The best Toothpaste ever!
              </Text>
              <Image
                source={require("../assets/images/product6.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product7.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product8.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product9.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product10.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product11.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product12.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product1.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product2.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 819</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product5.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 809</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>ToothBrush</Text>
              <Text style={styles.subtitle}>
                Sturdy Toothbrush for all your brushing needs
              </Text>
              <Image
                source={require("../assets/images/product7.jpg")}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.price}>Ksh 81</Text>
              <Button
                title="Order Now"
                buttonStyle={{
                  backgroundColor: "#8462f5",
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                onPress={() =>
                  Alert.alert(
                    "Order Placed Successfully",
                    "Your order will be processed and details of payment and shipment shall be emailed to you promptly"
                  )
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card: {
    borderColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    width: 170,
    height: 250,
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
  cards: {
    flexDirection: "row",
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
  subtitle: {
    fontWeight: "300",
    fontSize: 16,
  },
  img: {
    width: 150,
    height: 75,
  },
  price: {
    textAlign: "center",
    fontSize: 15,
    paddingTop: 10,
    fontWeight: "bold",
    color: "#8462f5",
  },
});
export default Dentists;
