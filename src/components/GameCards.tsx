import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "@/services/image-url";
import ESRBRating from "./ESRBRating";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card.Root height="full">
      <Image src={getCroppedImageURL(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <ESRBRating esrb_rating={game.esrb_rating} />
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCards;
