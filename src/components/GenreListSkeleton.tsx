import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <Skeleton height="32px" width="32px" borderRadius={8} />
      <SkeletonText noOfLines={1} />
    </HStack>
  );
};

export default GenreListSkeleton;
