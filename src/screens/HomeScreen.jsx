import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Agar status bar di atas juga berwarna pink lembut */}
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />
      
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* --- SECTION HEADER --- */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>UKIYO <Text style={styles.kanji}>浮世</Text></Text>
            <Text style={styles.subtitle}>
              Jendela Seni Tradisional Jepang
            </Text>
          </View>
          {/* Kamu bisa tambah icon profil di sini nanti */}
          <View style={styles.avatarPlaceholder} />
        </View>

        {/* --- SECTION BANNER (Pink Aesthetic) --- */}
        <View style={styles.banner}>
          <View style={styles.bannerCircle} /> {/* Hiasan lingkaran transparan */}
          <Text style={styles.bannerText}>
            Explore the Beauty of{"\n"}Sakura Season ✨
          </Text>
          <View style={styles.exploreBtn}>
            <Text style={styles.exploreBtnText}>Exsplore</Text>
          </View>
        </View>

        {/* --- SECTION CONTENT --- */}
        <Text style={styles.sectionTitle}>Budaya Populer</Text>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.cardEmoji}>👘</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Kimono</Text>
            <Text style={styles.cardDesc}>Pakaian tradisional yang melambangkan keanggunan.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.cardEmoji}>🎭</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Kabuki</Text>
            <Text style={styles.cardDesc}>Seni teater klasik dengan riasan wajah yang ikonik.</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFC", // Warna background putih agak pink dikit
  },

  header: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF0F5', // Lavender Blush (Pink sangat muda)
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#880E4F", // Merah marun gelap agar kontras dengan pink
    letterSpacing: 1,
  },

  kanji: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#AD1457",
  },

  subtitle: {
    color: "#C2185B",
    fontSize: 14,
    marginTop: 2,
    opacity: 0.7,
  },

  avatarPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#F8BBD0",
    borderWidth: 2,
    borderColor: 'white',
  },

  banner: {
    backgroundColor: "#F06292", // Pink cerah Sakura
    marginHorizontal: 20,
    marginTop: 20,
    padding: 25,
    borderRadius: 25,
    overflow: 'hidden', // Agar lingkaran hiasan tidak keluar box
    elevation: 8,
    shadowColor: "#F06292",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  bannerCircle: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Hiasan estetik
  },

  bannerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
  },

  exploreBtn: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 15,
  },

  exploreBtnText: {
    color: "#F06292",
    fontWeight: "bold",
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A148C",
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // Shadow halus
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },

  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FCE4EC',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  cardEmoji: {
    fontSize: 30,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  cardDesc: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  }
});