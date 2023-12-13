import React from "react";
import { Text, StyleSheet, View } from "react-native";

class Helpmore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Gingivitis</Text>
          <Text style={styles.description}>
            Gingivitis is a common and mild form of gum disease (periodontal
            disease) that causes irritation, redness and swelling (inflammation)
            of your gingiva, the part of your gum around the base of your teeth.
            It's important to take gingivitis seriously and treat it promptly.
            Gingivitis can lead to much more serious gum disease called
            periodontitis and tooth loss. The most common cause of gingivitis is
            poor oral hygiene. Good oral health habits, such as brushing at
            least twice a day, flossing daily and getting regular dental
            checkups, can help prevent and reverse gingivitis. The most common
            cause of gingivitis is the accumulation of bacterial plaque between
            and around the teeth. The plaque triggers an immune response, which,
            in turn, can eventually lead to the destruction of gingival, or gum,
            tissue. It may also, eventually, lead to further complications,
            including the loss of teeth. Dental plaque is a biofilm that
            accumulates naturally on the teeth. It is usually formed by
            colonizing bacteria that are trying to stick to the smooth surface
            of a tooth. These bacteria might help protect the mouth from the
            colonization of harmful microorganisms, but dental plaque can also
            cause tooth decay, and periodontal problems such as gingivitis and
            chronic periodontitis, a gum infection. When plaque is not removed
            adequately, it can harden into calculus, or tartar, at the base of
            the teeth, near the gums. This has a yellow color. Calculus can only
            be removed professionally. Plaque and tartar eventually irritate the
            gums, causing gum inflammation around the base of the teeth. This
            means that the gums might easily bleed.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
  card: {
    borderColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
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
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#cacaca",
    alignSelf: "flex-start",
    paddingBottom: 5,
  },
  description: {},
  img: {
    width: 200,
    height: 200,
  },
});
export default Helpmore;
