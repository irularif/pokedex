import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/actions";
import About from "./About";
import Header from "./Header";
import Stats from "./Stats";

const Tab = createMaterialTopTabNavigator();

const Detail = (props: any) => {
  const { detail } = props;

  return (
    <SafeAreaView style={Styles.safeArea}>
      <ScrollView
        style={{
          display: "flex",
        }}
        contentContainerStyle={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Header item={detail} />
        <Tab.Navigator
          initialRouteName="About"
          screenOptions={{
            tabBarStyle: {
              shadowRadius: 0,
              elevation: 0,
            },
          }}
        >
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Base Stats" component={Stats} />
        </Tab.Navigator>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safeArea: {
    display: "flex",
    flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
