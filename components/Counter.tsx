import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";

const Counter = ({ value, onIncrement, onDecrement }: any) => {
  const incrementIfOdd = () => {
    if (value % 2 !== 0) {
      onIncrement();
    }
  };

  const incrementAsync = () => {
    setTimeout(onIncrement, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Clicked: {value} times</Text>
      <TouchableOpacity onPress={onIncrement}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDecrement}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementIfOdd}>
        <Text>Increment if odd</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementAsync}>
        <Text>Increment async</Text>
      </TouchableOpacity>
    </View>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
const mapStateToProps = (state: any) => ({
  value: state,
});
export default connect(mapStateToProps)(Counter);
