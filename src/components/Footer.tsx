import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.200" p={4} mt="auto">
      <Text textAlign="center" fontSize="sm">
        © 2023 My App. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
