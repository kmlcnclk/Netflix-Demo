import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
import Header from '../../Header';
import MainVideo from '../../MainVideo';

class B83Component extends Component {
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

export default B83Component;
