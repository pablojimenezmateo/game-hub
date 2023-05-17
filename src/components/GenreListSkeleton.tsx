import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [...Array(10).keys()];
  return (
    <List>
      {skeletons.map((d) => (
        <ListItem key={d} paddingY="5px">
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <Box flex="1">
              <SkeletonText skeletonHeight="2" noOfLines={1} spacing="4" />
            </Box>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
