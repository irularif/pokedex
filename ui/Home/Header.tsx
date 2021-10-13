import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Pokedex
      </Text>
    </View>
  );
};

export default Header;
