import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

/*
  Komponen CategoryJapan
  Fungsi:
  - Menampilkan kategori
  - Mengubah state kategori di App
*/

const CategoryJapan = ({ selected, setSelected }) => {

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

      {categories.map((item, index) => (

        <TouchableOpacity
          key={index}
          style={[
            styles.badge,
            selected === item && styles.activeBadge
          ]}
          onPress={() => setSelected(item)}
        >
          <Text style={styles.text}>
            {item}
          </Text>
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
    borderColor: "#e74c3c",
  },

  activeBadge: {
    backgroundColor: "#F8BBD0",
  },

  text: {
    fontWeight: "bold",
    color: "#2c3e50",
    fontSize: 13,
  },
});

export default CategoryJapan;