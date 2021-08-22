import { Box, Text } from '@chakra-ui/react';
import { deleteAdminEmailFromLocal } from '../../../LocalStorage/adminEmailStorage';
import React, { Component } from 'react';

export default class AdminHeader extends Component {
  adminLogout = async () => {
    await deleteAdminEmailFromLocal();

    await this.props.router.reload();
  };

  aMS = async () => {
    await this.props.setAdminMenuState(!this.props.adminMenuState);
  };

  render() {
    return (
      <Box className="bg-gray-200 rounded-md w-full h-16 flex justify-evenly items-center px-5">
        <Box onClick={this.aMS}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="fill-current text-gray-700 cursor-pointer"
          >
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z" />
          </svg>
        </Box>
        <Text
          fontSize="xl"
          fontFamily="monospace"
          fontWeight="semibold"
          className="text-gray-700 opacity-90"
          letterSpacing="wider"
        >
          Admin Page
        </Text>
        <Box onClick={this.adminLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="fill-current text-red-600 cursor-pointer"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
            </g>
          </svg>
        </Box>
      </Box>
    );
  }
}
