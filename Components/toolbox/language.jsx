import React, { useState } from 'react';
import { Menu, Button, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MdLanguage } from 'react-icons/md';

function Language() {
  const [language, setLanguage] = useState('Turkish');

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        bg="#141414"
        opacity="0.7"
        borderColor="#141414"
        variant="outline"
        _hover={{ bg: '#141414' }}
        _active={{ bg: '#141414' }}
        color="white"
        rightIcon={<ChevronDownIcon />}
        leftIcon={<MdLanguage />}
      >
        {language}
      </MenuButton>
      <MenuList>
        <MenuItem
          _hover={{ bgColor: 'gray.200' }}
          onClick={() => setLanguage('Turkish')}
        >
          Turkish
        </MenuItem>
        <MenuItem
          _hover={{ bgColor: 'gray.200' }}
          onClick={() => setLanguage('English')}
        >
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Language;
