import { Flex, Button } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Language from './toolbox/language';
import {
  deleteLoginStateFromLocal,
  getLoginStateFromLocal,
} from '../LocalStorage/loginStateStorage';
import { useState } from 'react';
import { deletePlanFromLocal } from '../LocalStorage/planformStorage';
import { deleteEmailStateFromLocal } from '../LocalStorage/emailStateStorage';
import { useRouter } from 'next/dist/client/router';
import { deleteEmailFromLocal } from '../LocalStorage/emailStorage';
import { deleteRegistrationPhaseFromLocal } from '../LocalStorage/registrationPhase';
import Link from 'next/link';
import { deleteUserIDFromLocal } from '../LocalStorage/userIDStorage';
import { deleteClickProfileFromLocal } from '../SessionStorage/clickProfileStorage';
import { deleteImageNameFromLocal } from '../LocalStorage/imageNameStorage';
import { deleteImageUrlFromLocal } from '../LocalStorage/imageUrlStorage';
import { deleteBrowsePageFromLocal } from '../LocalStorage/browsePageStorage';
import { deleteClickProfileIndexFromLocal } from '../SessionStorage/clickProfileIndexStorage';
import { deleteRegistrationStateFromLocal } from '../LocalStorage/registrationStateStorage';

function HomeHeader() {
  const [loginState, setLoginState] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const loginState = getLoginStateFromLocal()[0];

    if (loginState) {
      setLoginState(loginState);
    }
  }, [setLoginState]);

  const logout = async () => {
    await deleteEmailFromLocal();
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
    await deleteRegistrationStateFromLocal();

    router.reload();
  };

  return (
    <Flex justify="space-between" align="center" ml={8} mr={8}>
      <Flex justify="center" pl="5" align="center">
        <Image
          src="/net.png"
          width="140"
          height="100"
          alt="Netflix"
          objectFit="contain"
        />
      </Flex>
      <Flex justify="space-between" pr="5" w={250} align="center">
        <Language />
        {loginState ? (
          <Button
            colorScheme="red"
            style={{ backgroundColor: '#e50914' }}
            onClick={logout}
            size="sm"
          >
            Sign Out
          </Button>
        ) : (
          <Link href="/login">
            <a>
              <Button
                colorScheme="red"
                style={{ backgroundColor: '#e50914' }}
                size="sm"
              >
                Sign In
              </Button>
            </a>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}

export default HomeHeader;
