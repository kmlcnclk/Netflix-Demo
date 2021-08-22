import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import AdminHeader from './AdminHeader';

class AdminComponent extends Component {
  render() {
    const { router, adminMenuState, setAdminMenuState } = this.props;
    return (
      <Box h="100vh">
        <AdminHeader
          router={router}
          adminMenuState={adminMenuState}
          setAdminMenuState={setAdminMenuState}
        />
        <Box
          mt={20}
          className={
            adminMenuState
              ? 'visible transition-all'
              : 'invisible transition-all'
          }
        >
          <Flex
            justify="center"
            className="flex"
            direction="column"
            align="center"
          >
            <Text
              fontSize="2xl"
              mb={10}
              fontWeight="semibold"
              className="text-gray-800"
            >
              What do you want to add?
            </Text>
            <Flex justify="center" align="center">
              <Flex
                justify="center"
                align="center"
                mr={1}
                cursor="pointer"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                borderRadius={3}
                w="206px"
                h="50px"
                onClick={(e) => router.push('/admin/addTVShow')}
              >
                Add TV Show
              </Flex>{' '}
              <Flex
                justify="center"
                align="center"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                cursor="pointer"
                w="206px"
                ml={1}
                borderRadius={3}
                h="50px"
                onClick={(e) => router.push('/admin/addMovie')}
              >
                Add Movie
              </Flex>
            </Flex>
            <Flex justify="center" align="center">
              <Flex
                justify="center"
                align="center"
                cursor="pointer"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                borderRadius={3}
                mt={2}
                w="206px"
                h="50px"
                mr={1}
                onClick={(e) => router.push('/admin/deleteTVShow')}
              >
                Delete TV Show
              </Flex>
              <Flex
                justify="center"
                align="center"
                cursor="pointer"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                borderRadius={3}
                mt={2}
                ml={1}
                w="206px"
                h="50px"
                onClick={(e) => router.push('/admin/deleteMovie')}
              >
                Delete Movie
              </Flex>
            </Flex>
            <Flex justify="center" align="center">
              <Flex
                justify="center"
                align="center"
                cursor="pointer"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                borderRadius={3}
                mt={2}
                w="206px"
                h="50px"
                mr={1}
                onClick={(e) => router.push('/admin/addTVShowCategory')}
              >
                Add TV Show Category
              </Flex>
              <Flex
                justify="center"
                align="center"
                cursor="pointer"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                borderRadius={3}
                mt={2}
                ml={1}
                w="206px"
                h="50px"
                onClick={(e) => router.push('/admin/addMovieCategory')}
              >
                Add Movie Category
              </Flex>
            </Flex>
            <Flex justify="center" align="center">
              <Flex
                justify="center"
                align="center"
                cursor="pointer"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                borderRadius={3}
                mt={2}
                w="206px"
                h="50px"
                mr={1}
                onClick={(e) => router.push('/admin/deleteTVShowCategory')}
              >
                Delete TV Show Category
              </Flex>
              <Flex
                justify="center"
                align="center"
                cursor="pointer"
                className="transition-colors bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
                borderRadius={3}
                mt={2}
                ml={1}
                w="206px"
                h="50px"
                onClick={(e) => router.push('/admin/deleteMovieCategory')}
              >
                Delete Movie Category
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    );
  }
}

export default AdminComponent;
