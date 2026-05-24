import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/*
  Komponen ArtCard
  Fungsi:
  - Menampilkan daftar data kesenian dalam bentuk kartu visual
  - Memuat gambar, nama kesenian, dan tipe kategori
*/

const ArtCard = () => {
  // Data dummy kesenian Jepang
  const arts = [
    {
      id: 1,
      name: "Kabuki",
      type: "Teater Tradisional",
      image: { uri: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=500' }
    },
    {
      id: 2,
      name: "Shodo",
      type: "Seni Kaligrafi",
      image: { uri: 'https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=500' }
    },
    {
      id: 3,
      name: "Ikebana",
      type: "Seni Merangkai Bunga",
      image: { uri: 'https://images.unsplash.com/photo-1508243771214-6e95d13742f1?q=80&w=500' }
    },
  ];

  return (
    <View style={styles.listContainer}>
      {/* Perulangan untuk menampilkan setiap item dalam kartu */}
      {arts.map((item) => (
        <View key={item.id} style={styles.card}>
          {/* Gambar ilustrasi kesenian */}
          <Image source={item.image} style={styles.image} />
          
          <View style={styles.info}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.typeText}>{item.type}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 12,
    elevation: 3, // Shadow untuk Android
    shadowColor: "#000", // Shadow untuk iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  info: {
    padding: 12,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  typeText: {
    color: "#e74c3c",
    marginTop: 2,
    fontSize: 12,
    fontWeight: "500",
  },
});

export default ArtCard;