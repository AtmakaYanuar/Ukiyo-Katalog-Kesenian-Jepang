import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Header from "./src/components/Header";
import CategoryJapan from "./src/components/CategoryJapan";
import ArtCard from "./src/components/ArtCard";

/*
  Fungsi Utama App:
  - Mengatur area aman (SafeAreaView) agar tidak tertutup notch [cite: 21]
  - ScrollView: Memungkinkan seluruh halaman digulir ke bawah 
*/
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar otomatis menyesuaikan warna background */}
      <StatusBar style="light" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Memanggil komponen Header (Judul & Search) */}
        <Header />

        {/* Memanggil komponen Kategori (Filter horizontal) */}
        <CategoryJapan />

        {/* Memanggil komponen ArtCard (Daftar kesenian) */}
        <ArtCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfaf6", // Warna tema Jepang (krem lembut)
  },
});