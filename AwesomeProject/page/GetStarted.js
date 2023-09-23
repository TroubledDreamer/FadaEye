
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Your Go-To App for Everything!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GetStarted;




