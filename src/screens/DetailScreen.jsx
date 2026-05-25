import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Animated
} from "react-native";

import { useRef, useEffect } from "react";

export default function DetailScreen({ route }) {
  const { item } = route.params;

  // ANIMATION
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF0F5"
      />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* IMAGE */}
        <Animated.Image
          source={{ uri: item.image }}
          style={[
            styles.image,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
          resizeMode="cover"
        />

        {/* CONTENT */}
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >

          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.category}>
            {item.category}
          </Text>

          <Text style={styles.desc}>
            {item.desc
              ? item.desc
              : "Budaya Jepang ini memiliki sejarah panjang dan makna mendalam dalam kehidupan masyarakat Jepang. Seni ini diwariskan turun-temurun dan menjadi bagian penting dari identitas budaya Jepang."}
          </Text>

        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFC",
  },

  image: {
    width: "100%",
    height: 280,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#880E4F",
  },

  category: {
    fontSize: 14,
    color: "#AD1457",
    marginTop: 5,
    marginBottom: 15,
    fontWeight: "600",
  },

  desc: {
    fontSize: 15,
    color: "#444",
    lineHeight: 25,
  },
});