import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
import {
  addBrowsePageToLocal,
  deleteBrowsePageFromLocal,
} from '../../LocalStorage/browsePageStorage';
import Header from './Header';
import MainVideo from '../Videos/MainVideo';

export default class BrowseMainVideosPageComponentChild extends Component {
  async componentDidMount() {
    await deleteBrowsePageFromLocal();
    await addBrowsePageToLocal('Home');
  }
  render() {
    return (
      <Box>
        <Header />
        <Box>
          <MainVideo />
        </Box>
      </Box>
    );
  }
}
