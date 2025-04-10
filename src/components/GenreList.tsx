import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageURL from "@/services/image-url";
import { Heading, HStack, Image, Link, List, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
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
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Link
                variant={genre.id === selectedGenre?.id ? "underline" : "plain"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
