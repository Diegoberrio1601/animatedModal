import { useEffect, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function App() {
  const height = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(0)).current;

  const runAnimation = () => {
    // Secuencia de apertura y cierre
    Animated.sequence([
      Animated.spring(width, {
        toValue: 1,
        friction: 8,
        useNativeDriver: false,
      }),
      Animated.spring(height, {
        toValue: 1,
        friction: 8,
        useNativeDriver: false,
      }),
    ]).start(() => {
      // Cierra la animación
      Animated.sequence([
        Animated.spring(height, {
          toValue: 0,
          friction: 8,
          useNativeDriver: false,
        }),
        Animated.spring(width, {
          toValue: 0,
          friction: 8,
          useNativeDriver: false,
        }),
      ]).start();
    });
  };

  useEffect(() => {
    runAnimation();
  }, []);

  const toolbarAnimatedStyles = {
    width: width.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    }),
  };
  const contentAnimatedStyles = {
    height: height.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    }),
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F29F58" }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.reloadAnimation}
            onPress={runAnimation}
          >
            <Text style={styles.reloadAnimationText}>Reiniciar animación</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <Animated.View style={[styles.toolbar, toolbarAnimatedStyles]} />
          <Animated.View style={[styles.content, contentAnimatedStyles]}>
            <Text style={styles.message}>Hola, soy Diego Berrio!!</Text>
          </Animated.View>
        </View>
        <View style={styles.bottomContainer} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>@Diegoberrio1601</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1833",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  topContainer: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  reloadAnimation: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#F29F58",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  reloadAnimationText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  centerContainer: {
    height: 170,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbar: {
    height: 50,
    width: "100%",
    backgroundColor: "#441752",
  },
  content: {
    alignSelf: "stretch",
    backgroundColor: "#AB4459",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomContainer: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: "2%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
