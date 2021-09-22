import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  Flex,
  Menu,
  MenuButton,
  Button,
  Box,
  useToast,
  Image,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import NextImage from 'next/image';
import Link from 'next/link';
import { GoBell } from 'react-icons/go';
import { useRouter } from 'next/dist/client/router';
import {
  addBrowsePageToLocal,
  deleteBrowsePageFromLocal,
  getBrowsePageFromLocal,
} from '../../LocalStorage/browsePageStorage';
import styles from '../../styles/browseHeader.module.css';
import { GET_CHILD_FROM_USER } from '../../GraphQL/Apollo-Client/Queries/userQueries';
import { getImageUrlFromLocal } from '../../LocalStorage/imageUrlStorage';
import { getImageNameFromLocal } from '../../LocalStorage/imageNameStorage';
import { deleteClickProfileIndexFromLocal } from '../../SessionStorage/clickProfileIndexStorage';
import { deleteClickProfileIndexFromLS } from '../../LocalStorage/clickProfileIndexLocalStorage';

function Header({}) {
  const router = useRouter();
  const toast = useToast();

  const [imageName, setImageName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [browsePage, setBrowsePage] = useState('');
  const [navbar, setNavbar] = useState(false);

  const ref = useRef();

  useEffect(() => {
    router.prefetch('/browse/');
    router.prefetch('/browse/genre/83');
    router.prefetch('/browse/genre/34399');
    router.prefetch('/latest');
    router.prefetch('/browse/my-list');

    const iname = getImageNameFromLocal()[0];

    if (iname) {
      setImageName(iname);
    }

    const iu = getImageUrlFromLocal()[0];

    if (iu) {
      setImageURL(iu);
    }

    const bp = getBrowsePageFromLocal()[0];
    if (bp) {
      setBrowsePage(bp);
    }

    const changeBackground = () => {
      if (window.scrollY >= 1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeBackground);
  }, [router, toast, setBrowsePage, setNavbar]);

  const clickFunc = async (e, i, u) => {
    await deleteBrowsePageFromLocal();
    await addBrowsePageToLocal(i);

    router.push(u);
  };

  const logoutChildP = async () => {
    await deleteClickProfileIndexFromLocal();
    await deleteClickProfileIndexFromLS();

    await router.push('/browse');
  };

  return (
    <Box ref={ref} className="transition-colors">
      {imageURL && imageName ? (
        <Flex
          // bgColor={'rgba(20, 20, 20, 0.0)'}
          w="100%"
          // bg="#141414"
          // background="transparent"
          className={
            navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
          }
          position="fixed"
          h="68"
          left="0"
          pl={50}
          pr={50}
          top="0"
          zIndex="3"
          backgroundSize="0"
          justify="space-between"
        >
          <Flex justify="space-between" align="center">
            <Flex
              justify="center"
              align="center"
              pt={2}
              pr={10}
              cursor="pointer"
            >
              <Link href="/" passHref>
                <a>
                  <NextImage
                    src="/net.png"
                    width={'100'}
                    height={'50'}
                    objectFit="contain"
                    alt="Netflix"
                  />
                </a>
              </Link>
            </Flex>
            <Flex justify="center" align="center" pl={12}>
              <Box onClick={(e) => clickFunc(e, 'Home', '/browse/')}>
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'Home' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'Home' ? 'semibold' : 'normal'}
                >
                  Home
                </Text>
              </Box>
              <Box
                onClick={(e) => clickFunc(e, 'TV Shows', '/browse/genre/83')}
              >
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'TV Shows' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'TV Shows' ? 'semibold' : 'normal'}
                >
                  TV Shows
                </Text>
              </Box>
              <Box
                onClick={(e) => clickFunc(e, 'Movies', '/browse/genre/34399')}
              >
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'Movies' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'Movies' ? 'semibold' : 'normal'}
                >
                  Movies
                </Text>
              </Box>
              <Box onClick={(e) => clickFunc(e, 'New & Popular', '/latest')}>
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'New & Popular' ? '#fff' : '#e5e5e5'}
                  fontWeight={
                    browsePage == 'New & Popular' ? 'semibold' : 'normal'
                  }
                >
                  New &amp; Popular
                </Text>
              </Box>
              <Box onClick={(e) => clickFunc(e, 'My List', '/browse/my-list')}>
                <Text
                  m="5"
                  mr="3"
                  ml="3"
                  cursor="pointer"
                  color={browsePage == 'My List' ? '#fff' : '#e5e5e5'}
                  fontWeight={browsePage == 'My List' ? 'semibold' : 'normal'}
                >
                  My List
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex justify="center" align="center">
            <SearchIcon
              w={19}
              h={19}
              cursor="pointer"
              color="white"
              className="mr-5"
            />

            <Image
              src={imageURL}
              alt={imageName}
              borderRadius={3}
              w="32px"
              h="32px"
              objectFit="contain"
              className="mr-5"
            />
            <Button
              type="button"
              h={8}
              colorScheme="red"
              onClick={() => logoutChildP()}
              bgColor="#bf0b14"
              _hover={{ bgColor: '#bb0b14' }}
              _active={{ ring: '0' }}
              _focus={{ ring: '0' }}
              px={5}
            >
              <Text fontSize="sm">Çocuk&apos;tan çık</Text>
            </Button>
          </Flex>
        </Flex>
      ) : null}
    </Box>
  );
}

export default Header;
