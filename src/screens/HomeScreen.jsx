import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              UKIYO <Text style={styles.kanji}>浮世</Text>
            </Text>
            <Text style={styles.subtitle}>
              Jendela Seni Tradisional Jepang
            </Text>
          </View>

          <View style={styles.avatarPlaceholder} />
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <View style={styles.bannerCircle} />

          <Text style={styles.bannerText}>
            Explore the Beauty of{"\n"}Sakura Season ✨
          </Text>

          {/* 🔥 INI YANG DIUBAH (BISA DIKLIK) */}
          <TouchableOpacity
            style={styles.exploreBtn}
            onPress={() => navigation.navigate("Explore")}
          >
            <Text style={styles.exploreBtnText}>Explore</Text>
          </TouchableOpacity>
        </View>

        {/* CONTENT */}
        <Text style={styles.sectionTitle}>Budaya Populer</Text>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>👘</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Kimono</Text>
            <Text style={styles.cardDesc}>
              Pakaian tradisional yang melambangkan keanggunan.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardEmoji}>🎭</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Kabuki</Text>
            <Text style={styles.cardDesc}>
              Seni teater klasik dengan riasan wajah ikonik.
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBFC" },

  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF0F5",
  },

  title: { fontSize: 28, fontWeight: "900", color: "#880E4F" },
  kanji: { fontSize: 20, color: "#AD1457" },
  subtitle: { color: "#C2185B" },

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
    padding: 8,
    borderRadius: 10,
    alignSelf: "flex-start",
  },

  exploreBtnText: {
    color: "#F06292",
    fontWeight: "bold",
  },

  sectionTitle: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A148C",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 20,
    padding: 15,
    borderRadius: 15,
  },

  cardEmoji: { fontSize: 30, marginRight: 10 },

  cardContent: { flex: 1 },

  cardTitle: { fontSize: 16, fontWeight: "bold" },

  cardDesc: { color: "#777" },
});