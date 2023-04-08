import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
// import Topbar from '../Topbar';

function Layout({ children }) {
  return (
      <div>
        <div className='flex col'>
        {children}
        </div>
      </div>
  );
}

export default Layout;