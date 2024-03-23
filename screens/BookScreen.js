import React from "react";
import { Box } from "@gluestack-ui/themed"
import BookList from "../components/BookList";
import albumData from "../json/books.json";

const BookScreen = ({ navigation }) => {
  return (
    <Box>
      <BookList 
        list={albumData.bookList}
        navigation={navigation}
      />
    </Box>
  );
};

export default BookScreen;
