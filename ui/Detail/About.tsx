import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const About = (props: any) => {
  const { detail } = useSelector((state: any) => state.pokemons);

  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <SectionA item={detail} />
    </View>
  );
};

const SectionA = (props: any) => {
  const { item } = props;

  return (
    <View style={Styles.sectionA}>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <View style={Styles.saFrame}>
        <View style={Styles.saFrameItem}>
          <Text style={Styles.saFrameItemTitle}>Height</Text>
          <Text style={Styles.saFrameItemValue}>{item.height * 10} cm</Text>
        </View>
        <View style={Styles.saFrameItem}>
          <Text style={Styles.saFrameItemTitle}>Weight</Text>
          <Text style={Styles.saFrameItemValue}>{item.weight / 10} kg</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  sectionA: {
    padding: 20,
  },
  saFrame: {
    flexDirection: "row",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  saFrameItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saFrameItemTitle: {
    color: "#555",
  },
  saFrameItemValue: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default About;
