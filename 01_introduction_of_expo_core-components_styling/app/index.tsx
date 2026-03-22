import { useState } from "react";
import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const [text, setText] = useState("");

  const onPressFunction = () => {
    Alert.alert("Button Pressed!");
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29qsewqd72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d767",
      title: "F Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7787682",
      title: "F Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d77876",
      title: "S Item",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View>
      {/* {[...Array(200)].map((_, i) => (
        <View
          key={i}
          style={{
            backgroundColor: "#eee",
            padding: 20,
            marginBottom: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>Card {i + 1}</Text>
        </View>
      ))} */}
      {/* <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable> */}

      {/* <TextInput
        keyboardType="email-address"
        placeholder="Enter Your Name"
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
        onFocus={() => console.log("Input focused")}
        onBlur={() => console.log("Input focused")}
      />

      <Text> You typed: {text}</Text>

      <Button title="Click Me" onPress={() => Alert.alert("Button pressed!")} />
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={styles.imageContainer}
        resizeMode="contain"
      /> */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<Text>Header</Text>}
        ListFooterComponent={<Text>Footer</Text>}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

// Data
// renderItem
// keyExtractor
// horizontal
//
