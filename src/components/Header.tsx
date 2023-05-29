import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="gray.200" p={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="lg">
          My App
        </Heading>
        <Spacer />
        <Box display={{ base: 'none', md: 'block' }}>
          {/* Add any additional navigation items here */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
