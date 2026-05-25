import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

export default function EventScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />

      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Japanese Event 🎎</Text>
          <Text style={styles.subtitle}>Festival Jepang</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>UTSURU FEST</Text>
          <Text>Jakarta</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>ENNICHISAI</Text>
          <Text>Blok M</Text>
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

  card: {
    margin: 20,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },

  cardTitle: { fontWeight: "bold" },
});