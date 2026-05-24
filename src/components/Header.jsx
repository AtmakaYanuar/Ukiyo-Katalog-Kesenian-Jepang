import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

/*
  Komponen Header
  Fungsi:
  - Menampilkan identitas visual utama aplikasi (Nama & Tagline)
  - Menyediakan kolom input (Search Bar) untuk memfilter kesenian
*/

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Judul utama dengan aksen teks Jepang */}
      <Text style={styles.title}>UKIYO 浮世</Text>

      {/* Deskripsi singkat aplikasi */}
      <Text style={styles.subtitle}>
        Jendela Seni Tradisional Negeri Sakura
      </Text>

      {/* Input pencarian dengan desain modern */}
      <TextInput
        style={styles.search}
        placeholder="Cari kesenian Jepang..."
        placeholderTextColor="#95a5a6"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#2c3e50", // Warna biru gelap elegan
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    color: "#e74c3c", // Warna merah matahari terbit
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 4,
  },
  subtitle: {
    color: "#ecf0f1",
    fontSize: 14,
    marginBottom: 15,
    fontStyle: "italic",
  },
  search: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 14,
  },
});

export default Header;