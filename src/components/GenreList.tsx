import useGenres from "@/hooks/useGenre";
import getCroppedImageURL from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isloading } = useGenres();

  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  if (error) return <Text>An error ocurred</Text>;

  if (isloading)
    return (
      <>
        {items.map((item) => (
          <GenreListSkeleton key={item} />
        ))}
      </>
    );

  return (
    <>
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
