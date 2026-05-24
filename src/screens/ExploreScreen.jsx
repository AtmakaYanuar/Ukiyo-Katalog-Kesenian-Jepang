import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER SAKURA STYLE */}
        <View style={styles.header}>
          <Text style={styles.title}>Explore Culture 🎌</Text>
          <Text style={styles.subtitle}>Jelajahi keajaiban budaya Jepang</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <View style={[styles.tag, { backgroundColor: '#F8BBD0' }]}>
              <Text style={styles.tagText}>Tradisional</Text>
            </View>
            <Text style={styles.cardTitle}>🏮 Matsuri</Text>
            <Text style={styles.cardDesc}>Festival tradisional Jepang yang penuh warna dan energi.</Text>
          </View>

          <View style={styles.card}>
            <View style={[styles.tag, { backgroundColor: '#E1BEE7' }]}>
              <Text style={styles.tagText}>Pop Culture</Text>
            </View>
            <Text style={styles.cardTitle}>🎤 Cosplay</Text>
            <Text style={styles.cardDesc}>Ekspresi kreatif melalui kostum karakter favoritmu.</Text>
          </View>

          <View style={styles.card}>
            <View style={[styles.tag, { backgroundColor: '#C8E6C9' }]}>
              <Text style={styles.tagText}>Kuliner</Text>
            </View>
            <Text style={styles.cardTitle}>🍣 Sushi</Text>
            <Text style={styles.cardDesc}>Seni kuliner mentah yang sudah mendunia.</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBFC" },
  header: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    backgroundColor: '#FFF0F5',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 2,
  },
  title: { fontSize: 26, fontWeight: "900", color: "#880E4F" },
  subtitle: { color: "#AD1457", opacity: 0.6, marginTop: 5 },
  content: { padding: 20 },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 25,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#F06292",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, alignSelf: 'flex-start', marginBottom: 10 },
  tagText: { fontSize: 10, fontWeight: 'bold', color: '#4A148C' },
  cardTitle: { fontSize: 20, fontWeight: "bold", color: '#333' },
  cardDesc: { color: '#666', marginTop: 5, fontSize: 14, lineHeight: 20 }
});