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

import { addBlog } from "../services/BlogService";

export default function InputBlogScreen({
  navigation,
}) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] =
    useState("");

  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const categories = [
    "Tradisional",
    "Teater",
    "Festival",
    "Musik",
    "Tari",
  ];

  const pickImage = async () => {

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };

  const handleSubmit = async () => {

    if (
      !title ||
      !author ||
      !category ||
      !image ||
      !desc
    ) {
      Alert.alert(
        "Error",
        "Semua field harus diisi"
      );
      return;
    }

    await addBlog({
      title,
      author,
      category,
      image,
      desc,
    });

    Alert.alert(
      "Berhasil",
      "Katalog berhasil ditambahkan"
    );

    navigation.goBack();

  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.title}>
        Tambah Katalog
      </Text>

      {/* NAMA KESENIAN */}
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
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryBtn,
              category === item &&
                styles.activeCategory,
            ]}
            onPress={() =>
              setCategory(item)
            }
          >
            <Text
              style={[
                styles.categoryText,
                category === item && {
                  color: "white",
                },
              ]}
            >
              {item}
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
          {
            height: 120,
            textAlignVertical: "top",
          },
        ]}
        multiline
        value={desc}
        onChangeText={setDesc}
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          Simpan Katalog
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