import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function ListingsDetailsScreen(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{"Red Jacket for sell"}</AppText>
        <AppText style={styles.price}>{"$ 500"}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
export default ListingsDetailsScreen;
