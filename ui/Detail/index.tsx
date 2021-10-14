import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import About from "./About";
import Header from "./Header";
import Stats from "./Stats";

const Tab = createMaterialTopTabNavigator();

const Detail = (props: any) => {
  const { detail } = useSelector((state: any) => state.pokemons);

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

export default Detail;
