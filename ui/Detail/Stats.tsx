import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/actions";
import { ProgressBar } from "react-native-paper";

const Stats = (props: any) => {
  const { detail } = props;

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexGrow: 1,
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
                width: "100%",
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

const Styles = StyleSheet.create({
  sectionA: {
    padding: 20,
    display: "flex",
    flexGrow: 1,
  },
  saFrame: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
  },
  saFrameItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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

const mapStateToProps = (state: any) => ({
  items: state.pokemons.items,
  page: state.pokemons.page,
  limit: state.pokemons.limit,
  detail: state.pokemons.detail,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
