import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        scale: "1.03",
        boxShadow: "0px 1px 7px 0px",
        transition: "ease-in 0.11s",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
