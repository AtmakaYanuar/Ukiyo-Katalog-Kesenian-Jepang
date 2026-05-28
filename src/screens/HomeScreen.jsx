import { useRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import { getBlogs } from "../services/BlogService";

export default function HomeScreen({ navigation }) {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  const [selectedCategory, setSelectedCategory] =
    useState("Semua");

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data.reverse());
  };

  useEffect(() => {

    fetchBlogs();

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();

  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchBlogs();
    }, [])
  );

  const filteredData =
    selectedCategory === "Semua"
      ? blogs
      : blogs.filter(
          (item) =>
            item.category === selectedCategory
        );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#FFF0F5"
        barStyle="dark-content"
      />

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
              Jendela Seni Tradisional Jepang
            </Text>
          </View>

          <View style={styles.avatarPlaceholder} />
        </Animated.View>

        {/* BANNER */}
        <Animated.View
          style={[
            styles.banner,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.bannerCircle} />

          <Text style={styles.bannerText}>
            Explore the Beauty of{"\n"}Japanese Culture ✨
          </Text>

          <TouchableOpacity
            style={styles.exploreBtn}
            onPress={() =>
              navigation.navigate("Explore")
            }
          >
            <Text style={styles.exploreBtnText}>
              Explore
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* CATEGORY */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
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

        {/* TITLE */}
        <Text style={styles.sectionTitle}>
          Budaya Populer
        </Text>

        {/* CARD LIST */}
        {filteredData.map((item) => (
          <Animated.View
            key={item.id}
            style={{
              opacity: fadeAnim,
              transform: [
                { translateY: slideAnim },
              ],
            }}
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Detail", {
                  item,
                })
              }
            >
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
              />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.cardCategory}>
                  {item.category}
                </Text>

                <Text style={styles.cardDesc}>
                  {item.desc}
                </Text>

                <Text
                  style={{
                    marginTop: 8,
                    color: "#999",
                    fontSize: 12,
                  }}
                >
                  Oleh: {item.author}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
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

  avatarPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#F8BBD0",
  },

  banner: {
    margin: 20,
    padding: 25,
    backgroundColor: "#F06292",
    borderRadius: 25,
    overflow: "hidden",
  },

  bannerCircle: {
    position: "absolute",
    right: -20,
    top: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
  },

  bannerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  exploreBtn: {
    marginTop: 15,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  exploreBtnText: {
    color: "#F06292",
    fontWeight: "bold",
  },

  categoryContainer: {
    paddingLeft: 15,
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

  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A148C",
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 3,
  },

  cardImage: {
    width: "100%",
    height: 180,
  },

  cardContent: {
    padding: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  cardCategory: {
    color: "#F06292",
    marginTop: 4,
    fontWeight: "600",
  },

  cardDesc: {
    color: "#777",
    marginTop: 8,
    lineHeight: 20,
  },
});