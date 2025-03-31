import { Input, InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <InputGroup startElement={<FaSearch />}>
      <Input borderRadius={20} placeholder="Search game..." variant="subtle" />
    </InputGroup>
  );
};

export default SearchInput;
