import { Box, Heading } from '@chakra-ui/react';

const Home = ({ title }) => {
  return (
    <Box p={4}>
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Box mt={4}>Content goes here.</Box>
    </Box>
  );
};

export default Home;
