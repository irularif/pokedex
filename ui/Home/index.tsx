import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import * as Actions from "../../store/actions";
import { bindActionCreators } from "redux";
import Header from "./Header";
import Item from "./Item";
import pokemonApi from "../../store/api/pokemonApi";

const Home = (props: any) => {
  const { items, actions, page, limit } = props;

  const getList = async () => {
    let npage = page + 1;
    let offset = npage * limit;
    const newItems = await pokemonApi.getList(limit, offset);
    items.push(...newItems);
    actions.setList(items, npage);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={Styles.scrollAreaContent}>
        <View style={Styles.content}>
          {Array.isArray(items) &&
            items.map((item, key) => {
              return <Item key={key} item={item} actions={actions} />;
            })}
        </View>
        <TouchableOpacity style={Styles.button} onPress={getList}>
          <Text>Show more</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safeArea: {
    display: "flex",
    flex: 1,
  },
  scrollArea: {
    display: "flex",
  },
  scrollAreaContent: {
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
});
const mapStateToProps = (state: any) => ({
  items: state.pokemons.items,
  page: state.pokemons.page,
  limit: state.pokemons.limit,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
