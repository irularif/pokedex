import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getList, setList } from "../../store/actions";
import pokemonApi from "../../store/api/pokemonApi";
import Header from "./Header";
import Item from "./Item";

const Home = (props: any) => {
  const { items, page, limit } = useSelector((state: any) => state.pokemons);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getList(page, limit));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={Styles.scrollAreaContent}>
        <View style={Styles.content}>
          {Array.isArray(items) &&
            items.map((item, key) => {
              return <Item key={key} item={item} />;
            })}
        </View>
        <TouchableOpacity style={Styles.button} onPress={fetchData}>
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

export default Home;
