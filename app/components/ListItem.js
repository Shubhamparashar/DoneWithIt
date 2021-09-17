import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subtitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
      
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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
