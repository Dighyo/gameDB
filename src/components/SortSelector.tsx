import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
  sortOrderValue: string;
}

const SortSelector = ({ onSelectedSortOrder, sortOrderValue }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === sortOrderValue
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="lg">
          Order by: {currentSortOrder?.label || "Relevance"} <FaChevronDown />{" "}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrder.map((order) => (
              <Menu.Item
                onClick={() => onSelectedSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
