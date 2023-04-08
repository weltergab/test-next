import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
// import Topbar from '../Topbar';

function Layout({ children }) {
  const bgColor = useColorModeValue('#F4F6F8', '#1A202C');

  return (
      <div>
        <div className='flex col'>
        {children}
        </div>
      </div>
  );
}

export default Layout;