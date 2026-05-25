import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />

      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Explore Culture 🎌</Text>
          <Text style={styles.subtitle}>Jelajahi budaya Jepang</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🏮 Matsuri</Text>
            <Text style={styles.cardDesc}>Festival tradisional Jepang</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎤 Cosplay</Text>
            <Text style={styles.cardDesc}>Pop culture Jepang</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🍣 Sushi</Text>
            <Text style={styles.cardDesc}>Kuliner Jepang</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBFC" },

  header: { padding: 25, backgroundColor: "#FFF0F5" },

  title: { fontSize: 26, fontWeight: "900", color: "#880E4F" },

  subtitle: { color: "#AD1457" },

  content: { padding: 20 },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  cardTitle: { fontSize: 18, fontWeight: "bold" },

  cardDesc: { color: "#666" },
});