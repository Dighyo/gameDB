import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="lg">
          Order by: Relevance <FaChevronDown />{" "}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="relevance">Relevance</Menu.Item>
            <Menu.Item value="date-added">Date Added</Menu.Item>
            <Menu.Item value="name">Name</Menu.Item>
            <Menu.Item value="release-date">Release Date</Menu.Item>
            <Menu.Item value="popularity">Popularity</Menu.Item>
            <Menu.Item value="average-rating">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
