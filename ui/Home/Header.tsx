import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={Styles.head}>
      <Text style={Styles.title}>Pokedex</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  head: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
