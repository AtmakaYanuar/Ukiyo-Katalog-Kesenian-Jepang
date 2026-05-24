import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

/*
  Komponen ArtCard
  Fungsi:
  - Menampilkan data kesenian
  - Filter berdasarkan kategori & pencarian
*/

const ArtCard = ({
  data,
  selectedCategory,
  searchText
}) => {

  // FILTER DATA
  const filteredData = data.filter((item) => {

    const matchCategory = selectedCategory
      ? item.type === selectedCategory
      : true;

    const matchSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <View style={styles.listContainer}>

      {/* Jika data kosong */}
      {filteredData.length === 0 && (
        <Text style={styles.empty}>
          Data tidak ditemukan
        </Text>
      )}

      {/* Menampilkan data */}
      {filteredData.map((item) => (
        <View key={item.id} style={styles.card}>

          <Image
            source={item.image}
            style={styles.image}
          />

          <View style={styles.info}>
            <Text style={styles.nameText}>
              {item.name}
            </Text>

            <Text style={styles.typeText}>
              {item.type}
            </Text>
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

    elevation: 3,

    shadowColor: "#000",
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

  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});

export default ArtCard;