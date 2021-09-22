import React, { useState } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { deleteEmailFromLocal } from '../../LocalStorage/emailStorage';
import {
  deleteLoginStateFromLocal,
  getLoginStateFromLocal,
} from '../../LocalStorage/loginStateStorage';
import { deleteEmailStateFromLocal } from '../../LocalStorage/emailStateStorage';
import { deletePlanFromLocal } from '../../LocalStorage/planformStorage';
import { useRouter } from 'next/dist/client/router';
import { deleteRegistrationPhaseFromLocal } from '../../LocalStorage/registrationPhase';
import { getRememberMeFromLocal } from '../../LocalStorage/rememberMeStorage';
import { deleteUserIDFromLocal } from '../../LocalStorage/userIDStorage';
import { deleteClickProfileFromLocal } from '../../SessionStorage/clickProfileStorage';
import { deleteImageNameFromLocal } from '../../LocalStorage/imageNameStorage';
import { deleteImageUrlFromLocal } from '../../LocalStorage/imageUrlStorage';
import { deleteBrowsePageFromLocal } from '../../LocalStorage/browsePageStorage';
import { deleteClickProfileIndexFromLocal } from '../../SessionStorage/clickProfileIndexStorage';
import { deleteClickProfileIndexFromLS } from '../../LocalStorage/clickProfileIndexLocalStorage';
import { deleteRegistrationStateFromLocal } from '../../LocalStorage/registrationStateStorage';

function Header() {
  const [loginState, setLoginState] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.prefetch('/logout');
    const email = getLoginStateFromLocal()[0];

    if (email) {
      setLoginState(true);
    }
  }, [router, setLoginState]);

  const logout = async () => {
    const rememberMe = await getRememberMeFromLocal()[0];

    if (!rememberMe) {
      await deleteEmailFromLocal();
    }

    await deleteEmailStateFromLocal();
    await deletePlanFromLocal();
    await deleteLoginStateFromLocal();
    await deleteRegistrationPhaseFromLocal();
    await setLoginState(false);
    await deleteUserIDFromLocal();
    await deleteClickProfileFromLocal();
    await deleteImageNameFromLocal();
    await deleteImageUrlFromLocal();
    await deleteBrowsePageFromLocal();
    await deleteClickProfileIndexFromLocal();
    await deleteClickProfileIndexFromLS();
    await deleteRegistrationStateFromLocal();

    router.push('/logout');
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      w="full"
      h="91px"
      p={10}
      borderBottom="1px #e3e3e3 solid"
    >
      <Link href="/">
        <a style={{ cursor: 'pointer' }}>
          <Image
            src="/net.png"
            width="150"
            height="100"
            alt="Netflix"
            objectFit="contain"
          />
        </a>
      </Link>

      <Box>
        {loginState ? (
          <Heading
            size="md"
            color="#333333"
            _hover={{ textDecoration: 'underline' }}
            onClick={logout}
            cursor="pointer"
          >
            Sign Out
          </Heading>
        ) : (
          <Link href="/login">
            <a>
              <Heading
                color="#333333"
                size="md"
                _hover={{ textDecoration: 'underline' }}
                cursor="pointer"
              >
                Sign In
              </Heading>
            </a>
          </Link>
        )}
      </Box>
    </Flex>
  );
}

export default Header;
