import { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  getBlogs,
  deleteBlog,
} from "../services/BlogService";

export default function MyCatalogScreen({ navigation }) {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Hapus Katalog",
      "Yakin ingin menghapus katalog ini?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hapus",
          style: "destructive",
          onPress: async () => {
            await deleteBlog(id);
            fetchBlogs();
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.author}>Oleh {item.author}</Text>

        <View style={styles.categoryBox}>
          <Text style={styles.category}>{item.category}</Text>
        </View>

        <Text style={styles.desc} numberOfLines={2}>
          {item.desc}
        </Text>
      </View>

      {/* EDIT + DELETE */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>

        <TouchableOpacity
          onPress={() => navigation.navigate("EditBlog", { item })}
          style={{ marginBottom: 10 }}
        >
          <Text style={{ fontSize: 18 }}>✏️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.delete}>🗑️</Text>
        </TouchableOpacity>

      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFC",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },

  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  author: {
    color: "#777",
    marginTop: 3,
  },

  categoryBox: {
    backgroundColor: "#FCE4EC",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 6,
  },

  category: {
    color: "#C2185B",
    fontWeight: "600",
    fontSize: 12,
  },

  desc: {
    marginTop: 6,
    color: "#666",
    fontSize: 13,
  },

  delete: {
    fontSize: 18,
  },
});