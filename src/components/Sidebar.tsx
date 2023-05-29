import { Box, Link, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box bg="gray.100" p={4} w={200}>
      <VStack spacing={2} align="stretch">
        <Link>Page 1</Link>
        <Link>Page 2</Link>
        <Link>Page 3</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
