import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

export default function EventScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER SAKURA STYLE */}
        <View style={styles.header}>
          <Text style={styles.title}>Japanese Event 🎎</Text>
          <Text style={styles.subtitle}>Jadwal festival mendatang di Indonesia</Text>
        </View>

        <View style={styles.content}>
          {/* EVENT CARD 1 */}
          <View style={styles.card}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateText}>20</Text>
              <Text style={styles.monthText}>OKT</Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.cardTitle}>UTSURU FEST</Text>
              <Text style={styles.cardLocation}>📍 Jakarta Convention Center</Text>
            </View>
          </View>

          {/* EVENT CARD 2 */}
          <View style={styles.card}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateText}>15</Text>
              <Text style={styles.monthText}>NOV</Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.cardTitle}>ENNICHISAI</Text>
              <Text style={styles.cardLocation}>📍 Blok M, Jakarta</Text>
            </View>
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
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  dateBadge: {
    backgroundColor: '#F06292',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    minWidth: 60,
  },
  dateText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  monthText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  eventInfo: { marginLeft: 15, flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  cardLocation: { color: "#777", fontSize: 13, marginTop: 4 }
});