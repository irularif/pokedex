import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const nav = useNavigation();
  const openForm = () => {
    nav.navigate("Form" as never);
  };
  return (
    <View style={Styles.head}>
      <Text style={Styles.title}>Pokedex</Text>
      <TouchableOpacity onPress={openForm}>
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  head: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Header;
