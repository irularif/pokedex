import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useSelector } from "react-redux";

const Stats = (props: any) => {
  const { detail } = useSelector((state: any) => state.pokemons);

  return (
    <View style={Styles.stat}>
      <SectionA item={detail} />
    </View>
  );
};

const SectionA = (props: any) => {
  const { item } = props;

  return (
    <View style={Styles.sectionA}>
      {item.stats.map((stat: any, key: number) => {
        const progress = stat.base_stat / 100;

        return (
          <View key={key} style={Styles.saFrame}>
            <Text style={Styles.saFrameItemTitle}>{stat.stat.name}</Text>
            <Text style={Styles.saFrameItemValue}>{stat.base_stat}</Text>
            <ProgressBar
              progress={progress}
              color={progress > 0.5 ? "green" : "red"}
              style={{
                width: 150,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  stat: {
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  sectionA: {
    padding: 20,
    display: "flex",
    flexGrow: 1,
  },
  saFrame: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    flex: 1,
  },
  saFrameItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  saFrameItemTitle: {
    textTransform: "capitalize",
    width: 150,
  },
  saFrameItemValue: {
    marginHorizontal: 10,
    textAlign: "right",
  },
});

export default Stats;
