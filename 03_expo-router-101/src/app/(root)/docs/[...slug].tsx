import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DocsSlugPage = () => {
  const { slug } = useLocalSearchParams();
  const params = Array.isArray(slug) ? slug.join(",") : slug;
  return (
    <View>
      <Text>DocsSlugPage , {params}</Text>
    </View>
  );
};

export default DocsSlugPage;

const styles = StyleSheet.create({});
