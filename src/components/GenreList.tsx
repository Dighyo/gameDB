import useGenres from "@/hooks/useGenre";
import getCroppedImageURL from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
