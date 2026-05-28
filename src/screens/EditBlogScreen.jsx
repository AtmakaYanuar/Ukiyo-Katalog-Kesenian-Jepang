import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { updateBlog } from "../services/BlogService";

export default function EditBlogScreen({ route, navigation }) {
  const { item } = route.params;

  const [title, setTitle] = useState(item.title);
  const [author, setAuthor] = useState(item.author);
  const [category, setCategory] = useState(item.category);
  const [image, setImage] = useState(item.image);
  const [desc, setDesc] = useState(item.desc);

  const categories = [
    "Tradisional",
    "Teater",
    "Festival",
    "Musik",
    "Tari",
  ];

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUpdate = async () => {
    if (!title || !author || !category || !image || !desc) {
      Alert.alert("Error", "Semua field harus diisi");
      return;
    }

    await updateBlog(item.id, {
      title,
      author,
      category,
      image,
      desc,
    });

    Alert.alert("Berhasil", "Katalog berhasil diupdate");
    navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.title}>
        Edit Katalog
      </Text>

      {/* TITLE */}
      <TextInput
        placeholder="Nama Kesenian"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      {/* AUTHOR */}
      <TextInput
        placeholder="Nama Penulis"
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
      />

      {/* CATEGORY */}
      <Text style={styles.label}>
        Pilih Kategori
      </Text>

      <View style={styles.categoryContainer}>
        {categories.map((itemCat) => (
          <TouchableOpacity
            key={itemCat}
            style={[
              styles.categoryBtn,
              category === itemCat && styles.activeCategory,
            ]}
            onPress={() => setCategory(itemCat)}
          >
            <Text
              style={[
                styles.categoryText,
                category === itemCat && { color: "white" },
              ]}
            >
              {itemCat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* IMAGE */}
      <TouchableOpacity
        style={styles.imagePicker}
        onPress={pickImage}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={styles.preview}
          />
        ) : (
          <Text style={styles.imageText}>
            Pilih Gambar dari Galeri
          </Text>
        )}
      </TouchableOpacity>

      {/* DESC */}
      <TextInput
        placeholder="Deskripsi"
        style={[
          styles.input,
          { height: 120, textAlignVertical: "top" },
        ]}
        multiline
        value={desc}
        onChangeText={setDesc}
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdate}
      >
        <Text style={styles.buttonText}>
          Update Katalog
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFBFC",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#880E4F",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 14,
    marginBottom: 15,
  },

  label: {
    marginBottom: 10,
    color: "#880E4F",
    fontWeight: "bold",
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  categoryBtn: {
    backgroundColor: "#FCE4EC",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  activeCategory: {
    backgroundColor: "#F06292",
  },

  categoryText: {
    color: "#880E4F",
    fontWeight: "600",
  },

  imagePicker: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 20,
  },

  imageText: {
    color: "#999",
  },

  preview: {
    width: "100%",
    height: "100%",
  },

  button: {
    backgroundColor: "#F06292",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 40,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

});