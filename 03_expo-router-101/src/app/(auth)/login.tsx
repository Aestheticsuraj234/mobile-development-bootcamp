import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const login = () => {
  return (
    <View>
      <Text>login</Text>
      <Link href={"/(auth)/sign-ups"}>SignUp</Link>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
