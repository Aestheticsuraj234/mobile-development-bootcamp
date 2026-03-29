import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductIdPage = () => {
  const { userId, productId } = useLocalSearchParams();
  return (
    <View>
      <Text>
        ProductIdPage
        {userId},{productId}
      </Text>
    </View>
  );
};

export default ProductIdPage;

const styles = StyleSheet.create({});
