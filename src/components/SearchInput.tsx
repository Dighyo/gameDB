import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<FaSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search game..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
