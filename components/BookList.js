import React from "react";
import { FlatList } from "react-native";
import BookDetail from "./BookDetail";

const BookList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <BookDetail album={item} navigation={navigation} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default BookList;
