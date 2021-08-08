import { Box, Flex, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

class AdminComponent extends Component {
  render() {
    const { router } = this.props;
    return (
      <Flex justify="center" direction="column" h="100vh" align="center">
        <Text fontSize="2xl" mb={5}>
          What do you want to add?
        </Text>
        <Flex justify="center" align="center">
          <Flex
            justify="center"
            align="center"
            mr={1}
            cursor="pointer"
            _hover={{ bgColor: 'gray.300' }}
            bgColor="gray.400"
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
            bgColor="gray.400"
            _hover={{ bgColor: 'gray.300' }}
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
            _hover={{ bgColor: 'gray.300' }}
            bgColor="gray.400"
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
            _hover={{ bgColor: 'gray.300' }}
            bgColor="gray.400"
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
            _hover={{ bgColor: 'gray.300' }}
            bgColor="gray.400"
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
            _hover={{ bgColor: 'gray.300' }}
            bgColor="gray.400"
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
            _hover={{ bgColor: 'gray.300' }}
            bgColor="gray.400"
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
            _hover={{ bgColor: 'gray.300' }}
            bgColor="gray.400"
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
    );
  }
}

export default AdminComponent;
