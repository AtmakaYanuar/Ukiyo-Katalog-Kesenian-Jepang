import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

/*
  Komponen CategoryJapan
  Fungsi:
  - Menampilkan daftar kategori kesenian menggunakan ScrollView Horizontal
  - Memberikan navigasi cepat bagi user berdasarkan jenis seni
*/

const CategoryJapan = () => {
  // Data kategori kesenian
  const categories = [
    "🎭 Teater",
    "✍️ Kaligrafi",
    "🗡️ Bela Diri",
    "🍵 Upacara",
    "🎨 Lukisan"
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* Melakukan mapping data kategori ke dalam komponen tombol */}
      {categories.map((item, index) => (
        <TouchableOpacity key={index} style={styles.badge}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  badge: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#e74c3c", // Outline merah agar senada dengan logo
  },
  text: {
    fontWeight: "bold",
    color: "#2c3e50",
    fontSize: 13,
  },
});

export default CategoryJapan;