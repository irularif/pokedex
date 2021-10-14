import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { setDetail } from "../../store/actions";
import getColorType from "../../utils/colors";
const { width } = Dimensions.get("window");
const wrapperWidth = (width - 30) / 2;
const imageWidth = wrapperWidth / 2;

const Item = (props: any) => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const { item } = props;
  const imgSource = {
    uri: item.sprites.other["official-artwork"].front_default,
  };
  const bgColor = getColorType(item.types.map((type: any) => type.type.name));
  const onPress = () => {
    dispatch(setDetail(item.id));
    nav.navigate("Detail" as never);
  };

  return (
    <View style={[Styles.wrapper]}>
      <TouchableOpacity
        style={[
          Styles.item,
          {
            backgroundColor: bgColor,
          },
        ]}
        onPress={onPress}
      >
        <Text style={Styles.name}>{item.name}</Text>
        {item.types.map((type: any, key: number) => {
          return <Type key={key} type={type.type} />;
        })}
        <Image source={imgSource} style={Styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const Type = (props: any) => {
  const { type } = props;

  return (
    <View style={Styles.typeWrapper}>
      <Text style={Styles.typeName}>{type.name}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  wrapper: {
    width: wrapperWidth,
    height: (4 / 5) * wrapperWidth,
    padding: 5,
  },
  item: {
    padding: 15,
    borderRadius: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingBottom: 50,
    height: "100%",
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 18,
    color: "#fff",
  },
  typeWrapper: {
    backgroundColor: "#ffffff40",
    borderRadius: 99,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginBottom: 5,
  },
  typeName: {
    textTransform: "capitalize",
    color: "#fff",
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default Item;
