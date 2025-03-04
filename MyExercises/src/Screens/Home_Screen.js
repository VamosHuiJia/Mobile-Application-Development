import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
    { id: "1", name: "Pizza", image: require("../../assets/Images/Pizza.jpg") },
    { id: "2", name: "Burgers", image: require("../../assets/Images/burger.jpg") },
    { id: "3", name: "Steak", image: require("../../assets/Images/steak.jpg") },
    { id: "4", name: "Pizza", image: require("../../assets/Images/Pizza.jpg") },
    { id: "5", name: "Burgers", image: require("../../assets/Images/burger.jpg") },
    { id: "6", name: "Steak", image: require("../../assets/Images/steak.jpg") },
];

const popularItems = [
    { id: "1", name: "Food 1", price: "$1", image: require("../../assets/Images/Pizza.jpg") },
    { id: "2", name: "Food 2", price: "$3", image: require("../../assets/Images/Pizza.jpg") },
    { id: "3", name: "Food 3", price: "$3", image: require("../../assets/Images/Pizza.jpg") },
    { id: "4", name: "Food 4", price: "$3", image: require("../../assets/Images/Pizza.jpg") },
    { id: "5", name: "Food 5", price: "$3", image: require("../../assets/Images/Pizza.jpg") },
];

const comboItems = [
  { id: "1", name: "Combo 1", price: "$10", image: require("../../assets/Images/combo_1.jpg") },
  { id: "2", name: "Combo 2", price: "$15", image: require("../../assets/Images/combo_2.jpg") },
  { id: "3", name: "Combo 3", price: "$10", image: require("../../assets/Images/combo_1.jpg") },
  { id: "4", name: "Combo 4", price: "$15", image: require("../../assets/Images/combo_2.jpg") },
  { id: "5", name: "Combo 5", price: "$10", image: require("../../assets/Images/combo_1.jpg") },
  { id: "6", name: "Combo 6", price: "$15", image: require("../../assets/Images/combo_2.jpg") },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Explorer</Text>
        
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, borderWidth: 1, borderRadius: 8, padding: 8 }}>
          <Ionicons name="location-outline" size={20} color="gray" style={{ marginRight: 8 }} />
          <TextInput placeholder="Search for meals or area" style={{ flex: 1 }} />
          <Ionicons name="search" size={20} color="gray" />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Top Categories</Text>
          <TouchableOpacity>
            <Text style={{ color: "orange" }}>Filter</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", marginRight: 16 }}>
              <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 10 }} />
              <Text>{item.name}</Text>
            </View>
          )}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={{ color: "orange" }}>View all</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          horizontal
          data={popularItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginRight: 16 }}>
              <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 10 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>{item.price}</Text>
            </View>
          )}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Popular Combos</Text>
          <TouchableOpacity>
            <Text style={{ color: "orange" }}>View all</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          horizontal
          data={comboItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginRight: 16 }}>
              <Image source={item.image} style={{ width: 180, height: 140, borderRadius: 10 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>{item.price}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


