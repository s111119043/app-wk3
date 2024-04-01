import React from "react";
import { FlatList, SectionList} from "react-native";
import { Text } from "@gluestack-ui/themed";
import BookDetail from "./BookDetail";
import sections from "../json/books.json";

const BookList = () => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text mt={10}
        ml={10}
        color="#131313"
        fontWeight='500'
        fontSize={24}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <BookDetail book={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <BookDetail book={item} />
  };

  return (
    <SectionList 
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  );
}
export default BookList;