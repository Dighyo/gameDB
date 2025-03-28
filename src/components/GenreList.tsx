import useGenres from "@/hooks/useGenre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
