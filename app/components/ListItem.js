import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "./AppText";

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  title: {
    paddingTop: 8,
    fontWeight: "500",
    fontSize: 18,
  },
  subtitle: {
    color: "#6e6969",
  },
});

export default ListItem;
