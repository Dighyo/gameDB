import { Button } from "@chakra-ui/react";
import { RiResetRightFill } from "react-icons/ri";
import { GameQuery } from "@/App";

interface Props {
  onSelectReset: () => void;
  game: GameQuery;
}

const Reset = ({ onSelectReset, game }: Props) => {
  if (game.genre || game.platform || game.searchText || game.sortOrder)
    return (
      <Button onClick={onSelectReset} variant="outline">
        Reset Filters <RiResetRightFill />
      </Button>
    );
  return (
    <Button onClick={onSelectReset} variant="outline" disabled>
      Reset Filters <RiResetRightFill />
    </Button>
  );
};

export default Reset;
