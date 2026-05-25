import { useState, useRef, useEffect } from "react";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Animated,
  StatusBar,
} from "react-native";

import { cultureData } from "../data/CultureData";

export default function ExploreScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [selectedCategory, setSelectedCategory] =
  useState("Semua");

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const filtered = cultureData.filter((item) => {
  const matchSearch = item.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    selectedCategory === "Semua"
      ? true
      : item.category === selectedCategory;

  return matchSearch && matchCategory;
});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <View>
            <Text style={styles.title}>
              UKIYO <Text style={styles.kanji}>浮世</Text>
            </Text>

            <Text style={styles.subtitle}>
              Explore Budaya Jepang 🎌
            </Text>
          </View>

          <View style={styles.avatar} />
        </Animated.View>

        {/* SEARCH */}
        <TextInput
          placeholder="Cari budaya Jepang..."
          value={search}
          onChangeText={setSearch}
          style={styles.search}
        />
        <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{ paddingLeft: 20, marginBottom: 15 }}
>
  {[
    "Semua",
    "Tradisional",
    "Teater",
    "Festival",
    "Musik",
    "Tari",
  ].map((item) => (
    <TouchableOpacity
      key={item}
      style={[
        styles.categoryBtn,
        selectedCategory === item &&
          styles.activeCategory,
      ]}
      onPress={() =>
        setSelectedCategory(item)
      }
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && {
            color: "white",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  ))}
</ScrollView>

        {/* LIST */}
        {filtered.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detail", { item })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={styles.textBox}>
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text style={styles.cardCategory}>
                {item.category}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFC",
  },

  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF0F5",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#880E4F",
  },

  kanji: {
    fontSize: 20,
    color: "#AD1457",
  },

  subtitle: {
    color: "#C2185B",
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#F8BBD0",
  },

  search: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 12,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 3,
  },

  image: {
    width: 100,
    height: 100,
  },

  textBox: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cardCategory: {
    color: "#F06292",
    marginTop: 5,
  },
  categoryBtn: {
  backgroundColor: "#FCE4EC",
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 20,
  marginRight: 10,
},

activeCategory: {
  backgroundColor: "#F06292",
},

categoryText: {
  color: "#880E4F",
  fontWeight: "600",
},
});