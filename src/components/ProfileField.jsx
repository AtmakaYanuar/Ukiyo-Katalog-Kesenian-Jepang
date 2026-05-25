// src/components/ProfileField.jsx

import { View, Text, TextInput, StyleSheet } from "react-native";

export default function ProfileField({
  label,
  value,
  onChangeText,
  multiline = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Masukkan ${label}`}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginTop: 10,
  },

  label: {
    marginBottom: 5,
    color: "#880E4F",
    fontWeight: "600",
  },

  input: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#F8BBD0",
    fontSize: 14,
  },

  multilineInput: {
    height: 80,
    textAlignVertical: "top",
  },
});