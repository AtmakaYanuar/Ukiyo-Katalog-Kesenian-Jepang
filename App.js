import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Header from "./src/components/Header";
import CategoryJapan from "./src/components/CategoryJapan";
import ArtCard from "./src/components/ArtCard";

/*
  Fungsi Utama App:
  - Menyimpan state kategori & pencarian
  - Mengirim data ke komponen lain menggunakan props
*/

export default function App() {

  // STATE kategori & search
  const [selectedCategory, setSelectedCategory] = useState("🎭 Teater");
  const [searchText, setSearchText] = useState("");

  // DATA kesenian Jepang
  const arts = [
    {
      id: 1,
      name: "Kabuki",
      type: "🎭 Teater",
      image: {
        uri: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=500"
      }
    },
    {
      id: 2,
      name: "Shodo",
      type: "✍️ Kaligrafi",
      image: {
        uri: "https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=500"
      }
    },
    {
      id: 3,
      name: "Kendo",
      type: "🗡️ Bela Diri",
      image: {
        uri: "https://images.unsplash.com/photo-1508243771214-6e95d13742f1?q=80&w=500"
      }
    },
    {
      id: 4,
      name: "Chanoyu",
      type: "🍵 Upacara",
      image: {
        uri: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=500"
      }
    },
    {
      id: 5,
      name: "Ukiyo-e",
      type: "🎨 Lukisan",
      image: {
        uri: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=500"
      }
    },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <Header
          searchText={searchText}
          setSearchText={setSearchText}
        />

        {/* Kategori */}
        <CategoryJapan
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        {/* Card */}
        <ArtCard
          data={arts}
          selectedCategory={selectedCategory}
          searchText={searchText}
        />

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfaf6",
  },
});