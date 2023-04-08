import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
// import Topbar from '../Topbar';

function Layout({ children }) {
  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');

  return (
    <Box bgColor={bgColor} minH="100vh">
      
      <Flex flexDirection="column" pt="62px">
        {children}
      </Flex>
    </Box>
  );
}

export default Layout;