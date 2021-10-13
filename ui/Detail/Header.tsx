import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import getColorType from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");
const imageWidth = (2 / 3) * width;

const Header = (props: any) => {
  const { item } = props;
  const bgColor = getColorType(item.types.map((type: any) => type.type.name));

  return (
    <View
      style={[
        Styles.header,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <TopBar />
      <HeadSection item={item} />
      <RenderImage item={item} />
    </View>
  );
};

const HeadSection = (props: any) => {
  const { item } = props;

  return (
    <View style={Styles.head}>
      <Text style={Styles.name}>{item.name}</Text>
      <Text style={Styles.id}>#{("000" + item.id).substr(-3)}</Text>
      {item.types.map((type: any, key: number) => {
        return <Type key={key} type={type.type} />;
      })}
    </View>
  );
};

const TopBar = () => {
  const nav = useNavigation();
  const onBack = () => {
    nav.goBack();
  };
  return (
    <View style={Styles.topBar}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="heart-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RenderImage = (props: any) => {
  const { item } = props;
  const imgSource = {
    uri: item.sprites.other["official-artwork"].front_default,
  };

  return (
    <View style={Styles.imageWrapper}>
      <Image source={imgSource} style={Styles.image} />
      <View style={Styles.bottomPanel} />
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
  header: {},
  head: {
    paddingHorizontal: 15,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  name: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 24,
    textTransform: "capitalize",
  },
  id: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
    fontSize: 16,
  },
  typeWrapper: {
    backgroundColor: "#ffffff40",
    borderRadius: 99,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  typeName: {
    textTransform: "capitalize",
    color: "#fff",
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: -50,
  },
  image: {
    height: imageWidth,
    width: imageWidth,
    zIndex: 10,
  },
  bottomPanel: {
    backgroundColor: "#fff",
    height: 60,
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
  },
});

export default Header;
