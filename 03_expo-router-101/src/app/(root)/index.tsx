import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button title="Go to About" onPress={() => router.push("/about")} />
      <Button title="Go to Settings" onPress={() => router.push("/settings")} />
      <Button title="Go to Sigma" onPress={() => router.push("/product/123")} />
      <Button
        title="Go to Details "
        onPress={() => router.push("/product/details")}
      />
      <Button
        title="Go to User product page "
        onPress={() => router.push("/user/123/product/345")}
      />

      <Button
        title="Go to docs"
        onPress={() => router.push("/docs/router/advanced/tabs/nativetabs")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
