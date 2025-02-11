import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.Text}>Nguyễn Gia Huy - 22810310338</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => handleColorChange("green")}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => handleColorChange("blue")}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "brown" }]}
        onPress={() => handleColorChange("brown")}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "yellow" }]}
        onPress={() => handleColorChange("yellow")}
      >
        <Text style={styles.buttonTextYellow}>YELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => handleColorChange("red")}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "black" }]}
        onPress={() => handleColorChange("black")}
      >
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  Text: {
    position: "absolute",
    top: 20, 
    left: 20, 
    fontSize: 20,
    color: "white"
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 10,
    width: 240,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonTextYellow: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },

});
