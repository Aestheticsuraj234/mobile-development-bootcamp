import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import {
  getPokemonByType,
  getPokemonList,
  PokemonRef,
} from "../../api/pokemon";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [masterList, setMasterList] = useState<PokemonRef[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [page, setPage] = useState(1);

  const PAGE_SIZE = 20;

  useEffect(() => {
    fetchData();
  }, [selectedType]);

  const fetchData = async () => {
    setLoading(true);
    setPage(1);

    try {
      if (selectedType) {
        const list = await getPokemonByType(selectedType);
        setMasterList(list);
      } else {
        const data = await getPokemonList(1000, 0);
        setMasterList(data.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredList = useMemo(() => {
    if (!searchText) return masterList;
    return masterList.filter((p) => p.name.includes(searchText.toLowerCase()));
  }, [masterList, searchText]);

  const displayList = useMemo(() => {
    return filteredList.slice(0, page * PAGE_SIZE);
  }, [filteredList, page]);

  const loadMore = () => {
    if (displayList.length < filteredList.length) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 0,
  },
  filterContainer: {
    marginTop: 8,
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
