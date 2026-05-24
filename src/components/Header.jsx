import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

/*
  Komponen Header
  Fungsi:
  - Menampilkan identitas aplikasi
  - Menyediakan search bar
*/

const Header = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.container}>

      {/* Judul */}
      <Text style={styles.title}>UKIYO 浮世</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Jendela Seni Tradisional Negeri Sakura
      </Text>

      {/* Search */}
      <TextInput
        style={styles.search}
        placeholder="Cari kesenian Jepang..."
        placeholderTextColor="#b48a95"
        value={searchText}
        onChangeText={setSearchText}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FADADD",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 15,

    shadowColor: "#d48ca3",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },

  title: {
    fontSize: 30,
    color: "#C2185B",
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 5,
  },

  subtitle: {
    color: "#6D4C41",
    fontSize: 14,
    marginBottom: 18,
    fontStyle: "italic",
  },

  search: {
    backgroundColor: "#FFF5F7",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 15,
    fontSize: 14,

    borderWidth: 1,
    borderColor: "#F8BBD0",

    color: "#4e342e",
  },
});

export default Header;