import { Badge } from "@chakra-ui/react";

interface Props {
  score?: number;
}

const CriticScore = ({ score }: Props) => {
  if (score === undefined || score === null) {
    return (
      <Badge colorScheme="gray" fontSize="14px" px={2} borderRadius="4px">
        N/A
      </Badge>
    );
  }
  let color = score > 75 ? "green" : score < 60 ? "red" : "yellow";
  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
