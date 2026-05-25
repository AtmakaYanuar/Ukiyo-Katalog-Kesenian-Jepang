import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF0F5" barStyle="dark-content" />
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix' }} 
            style={styles.avatar} 
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={{fontSize: 12}}>✏️</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.userName}>Gema Ramadhan</Text>
        <Text style={styles.userTag}>@gema_ukiyo • Cultural Explorer</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Favorit</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Event</Text>
          </View>
        </View>
      </View>

      {/* MENU */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuEmoji}>👤</Text>
          <Text style={styles.menuText}>Edit Profil</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuEmoji}>🎎</Text>
          <Text style={styles.menuText}>Koleksi Saya</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuEmoji}>⚙️</Text>
          <Text style={styles.menuText}>Pengaturan</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Text style={styles.menuEmoji}>🚪</Text>
          <Text style={[styles.menuText, { color: "#D32F2F" }]}>
            Keluar
          </Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <View style={styles.footerCard}>
        <Text style={styles.appTitle}>UKIYO 浮世</Text>
        <Text style={styles.versionText}>Version 1.0.0 Stable</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFC",
  },

  header: {
    backgroundColor: "#FFF0F5",
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 5,
    shadowColor: "#F06292",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  avatarContainer: {
    position: "relative",
    marginBottom: 15,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "#F8BBD0",
  },

  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  userName: {
    fontSize: 24,
    fontWeight: "900",
    color: "#880E4F",
  },

  userTag: {
    fontSize: 14,
    color: "#AD1457",
    marginTop: 5,
    opacity: 0.7,
  },

  statsContainer: {
    flexDirection: "row",
    marginTop: 25,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },

  statBox: {
    alignItems: "center",
    paddingHorizontal: 20,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#880E4F",
  },

  statLabel: {
    fontSize: 12,
    color: "#AD1457",
  },

  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#F8BBD0",
  },

  menuContainer: {
    marginTop: 30,
    marginHorizontal: 25,
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 10,
    elevation: 2,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF0F5",
  },

  menuEmoji: {
    fontSize: 18,
    marginRight: 15,
  },

  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#4A148C",
    fontWeight: "500",
  },

  arrow: {
    fontSize: 20,
    color: "#F8BBD0",
    fontWeight: "bold",
  },

  footerCard: {
    marginTop: "auto",
    marginBottom: 30,
    alignItems: "center",
  },

  appTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#AD1457",
    opacity: 0.5,
  },

  versionText: {
    fontSize: 10,
    color: "#AD1457",
    opacity: 0.4,
  },
});