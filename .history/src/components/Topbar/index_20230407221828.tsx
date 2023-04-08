import NextLink from 'next/link';
import {
  Flex,
  Link,
  Icon,
  useColorMode,
  useColorModeValue,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Topbar({ openAuthModal }) {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const color = useColorModeValue('#1A202C', '#EDEEEE');
  const borderColor = useColorModeValue('#DDD', '#27272A');

  return (
    <Flex
      mb={[8, 16]}
      w="full"
      position="fixed"
      zIndex={99999}
      bgColor={bg}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={4}
        pb={4}
        maxW="1200px"
        margin="0 auto"
        w="full"
        px={[4, 8]}
        h="60px"
      >
        <Flex alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <Heading size="md" mr={4} display={['none', 'block']}>
                lucasnhimi.io
              </Heading>
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link mr={4}>Home</Link>
          </NextLink>
          <NextLink href="/#series" passHref>
            <Link mr={4}>Séries</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link>Sobre</Link>
          </NextLink>
        </Flex>
        
      </Flex>
    </Flex>
  );
}

export default withAuthModal(Topbar);