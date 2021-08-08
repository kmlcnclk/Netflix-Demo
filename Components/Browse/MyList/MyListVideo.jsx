import React, { Component } from 'react';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { BiCheck, BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import styles from '../../../styles/myList.module.css';
import { getUserIDFromLocal } from '../../../LocalStorage/userIDStorage';
import { getClickProfileIndexFromLocal } from '../../../SessionStorage/clickProfileIndexStorage';

class MyListVideo extends Component {
  state = {
    movies: [],
    tvShows: [],
    listState: false,
  };

  componentDidMount = async () => {
    const { getAllMyListToProfileData } = this.props;

    await this.setState({
      movies: getAllMyListToProfileData.getAllMyListToProfile.movies,
      tvShows: getAllMyListToProfileData.getAllMyListToProfile.tvShows,
    });
  };

  deletemyListClick = async (name) => {
    const { deleteMyList, deleteMyListData } = this.props;

    const ID = await getUserIDFromLocal()[0];

    const clickProfileIndex = await getClickProfileIndexFromLocal()[0];

    try {
      await deleteMyList({
        variables: {
          ID: ID,
          name: name,
          clickProfileIndex: clickProfileIndex,
        },
      });
    } catch (err) {
      this.props.toast({
        title: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (deleteMyListData) {
      this.props.toast({
        title: 'Deletion successful',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      await this.setState({
        movies: deleteMyListData.deleteMyList.movies,
        tvShows: deleteMyListData.deleteMyList.tvShows,
      });

      // setTimeout(() => {
      //   router.reload();
      // }, 3000);
    }
  };

  render() {
    // const { getAllMyListToProfileData } = this.props;
    const { movies, tvShows, listState } = this.state;

    return (
      <Box bgColor="#141414">
        <Flex justify="center" align="center" ml={10} mr={10} mt={16}>
          <SimpleGrid columns={5} spacing={7}>
            {movies.map((m, i) => (
              <Flex
                key={i}
                justify="center"
                direction="column"
                align="center"
                mt={10}
                h="auto"
                className={styles.swiperSlide}
              >
                <Flex
                  justify="center"
                  ml={2}
                  mr={2}
                  align="center"
                  w="99%"
                  color="white"
                  direction="column"
                >
                  <Flex justify="center" align="center" direction="column">
                    <Box className={styles.swiperPlayer}>
                      <ReactPlayer
                        url={m.videoUrl}
                        playing={false}
                        width="auto"
                        height="auto"
                        loop={true}
                      />
                    </Box>
                    <Box className={styles.swiperReactPlayer}>
                      <ReactPlayer
                        url={m.videoUrl}
                        playing={false}
                        width="auto"
                        height="auto"
                        loop={true}
                      />
                    </Box>

                    <Box className={styles.sliderText}>
                      <Flex mb={2} justify="space-between" align="center">
                        <Flex>
                          <Flex
                            justify="center"
                            align="center"
                            borderRadius="full"
                            p="1px"
                            pl="3px"
                            textAlign="center"
                            bgColor="white"
                            w="min"
                            mr={1}
                            cursor="pointer"
                          >
                            <BiPlay color="black" size="20" />
                          </Flex>
                          {listState ? (
                            <Flex
                              justify="center"
                              align="center"
                              borderRadius="full"
                              p="1px"
                              textAlign="center"
                              bgColor="#141414"
                              w="min"
                              border="1px white solid"
                              mr={1}
                              cursor="pointer"
                            >
                              <BsPlus size="20" color="white" />
                            </Flex>
                          ) : (
                            <Flex
                              justify="center"
                              align="center"
                              borderRadius="full"
                              p="1px"
                              textAlign="center"
                              bgColor="#141414"
                              w="min"
                              border="1px white solid"
                              mr={1}
                              onClick={() => {
                                this.setState({ listState: true });
                                this.deletemyListClick(m.name);
                              }}
                              cursor="pointer"
                            >
                              <BiCheck size="20" color="white" />
                            </Flex>
                          )}

                          <Flex
                            justify="center"
                            align="center"
                            borderRadius="full"
                            p="4px"
                            textAlign="center"
                            bgColor="#141414"
                            w="min"
                            border="1px white solid"
                            mr={1}
                            cursor="pointer"
                          >
                            <AiFillLike size="13" color="white" />
                          </Flex>
                          <Flex
                            justify="center"
                            align="center"
                            borderRadius="full"
                            p="4px"
                            textAlign="center"
                            bgColor="#141414"
                            w="min"
                            border="1px white solid"
                            mr={1}
                            cursor="pointer"
                          >
                            <AiFillDislike size="13" color="white" />
                          </Flex>
                        </Flex>
                        <Flex
                          justify="center"
                          align="center"
                          borderRadius="full"
                          p="4px"
                          textAlign="center"
                          bgColor="#141414"
                          w="min"
                          border="1px white solid"
                          cursor="pointer"
                        >
                          <FiChevronDown size="13" color="white" />
                        </Flex>
                      </Flex>

                      <Flex mb={2}>
                        {Date.now() - new Date(m.createAt).getTime() <
                        604800000 ? (
                          <Text
                            fontSize="xs"
                            fontWeight="semibold"
                            color="teal"
                            mr={1}
                          >
                            New
                          </Text>
                        ) : null}

                        <Flex
                          justify="center"
                          align="center"
                          border="1px white solid"
                          p="1px"
                          mr={1}
                        >
                          <Text fontSize="x-small">{m.ageLimit}</Text>
                        </Flex>
                        <Text fontSize="xs" fontWeight="semibold">
                          {m.duration}
                        </Text>
                      </Flex>

                      <Flex>
                        {m.categories[0] ? (
                          <Text fontSize="xs" mr="3px" fontWeight="semibold">
                            {m.categories[0]}
                          </Text>
                        ) : null}
                        {m.categories[1] ? (
                          <Text
                            fontSize="xs"
                            ml="1px"
                            mr="3px"
                            fontWeight="semibold"
                          >
                            &bull; {m.categories[1]}
                          </Text>
                        ) : null}
                        {m.categories[2] ? (
                          <Text fontSize="xs" ml="1px" fontWeight="semibold">
                            &bull; {m.categories[2]}
                          </Text>
                        ) : null}
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            ))}
            {tvShows.map((m, i) => (
              <Flex
                key={i}
                justify="center"
                direction="column"
                align="center"
                mt={10}
                h="auto"
                className={styles.swiperSlide}
              >
                <Flex
                  justify="center"
                  ml={2}
                  mr={2}
                  align="center"
                  w="99%"
                  color="white"
                  direction="column"
                >
                  <Flex justify="center" align="center" direction="column">
                    <Box className={styles.swiperPlayer}>
                      <ReactPlayer
                        url={m.videoUrl}
                        playing={false}
                        width="auto"
                        height="auto"
                        loop={true}
                      />
                    </Box>
                    <Box className={styles.swiperReactPlayer}>
                      <ReactPlayer
                        url={m.videoUrl}
                        playing={false}
                        width="auto"
                        height="auto"
                        loop={true}
                      />
                    </Box>

                    <Box className={styles.sliderText}>
                      <Flex mb={2} justify="space-between" align="center">
                        <Flex>
                          <Flex
                            justify="center"
                            align="center"
                            borderRadius="full"
                            p="1px"
                            pl="3px"
                            textAlign="center"
                            bgColor="white"
                            w="min"
                            mr={1}
                            cursor="pointer"
                          >
                            <BiPlay color="black" size="20" />
                          </Flex>
                          {/* <Flex
                              justify="center"
                              align="center"
                              borderRadius="full"
                              p="1px"
                              textAlign="center"
                              bgColor="#141414"
                              w="min"
                              border="1px white solid"
                              mr={1}
                              cursor="pointer"
                            >
                              <BsPlus size="20" color="white" />
                            </Flex> */}
                          <Flex
                            justify="center"
                            align="center"
                            borderRadius="full"
                            p="1px"
                            textAlign="center"
                            bgColor="#141414"
                            w="min"
                            border="1px white solid"
                            mr={1}
                            onClick={() => this.deletemyListClick(m.name)}
                            cursor="pointer"
                          >
                            <BiCheck size="20" color="white" />
                          </Flex>
                          <Flex
                            justify="center"
                            align="center"
                            borderRadius="full"
                            p="4px"
                            textAlign="center"
                            bgColor="#141414"
                            w="min"
                            border="1px white solid"
                            mr={1}
                            cursor="pointer"
                          >
                            <AiFillLike size="13" color="white" />
                          </Flex>
                          <Flex
                            justify="center"
                            align="center"
                            borderRadius="full"
                            p="4px"
                            textAlign="center"
                            bgColor="#141414"
                            w="min"
                            border="1px white solid"
                            mr={1}
                            cursor="pointer"
                          >
                            <AiFillDislike size="13" color="white" />
                          </Flex>
                        </Flex>
                        <Flex
                          justify="center"
                          align="center"
                          borderRadius="full"
                          p="4px"
                          textAlign="center"
                          bgColor="#141414"
                          w="min"
                          border="1px white solid"
                          cursor="pointer"
                        >
                          <FiChevronDown size="13" color="white" />
                        </Flex>
                      </Flex>

                      <Flex mb={2}>
                        {Date.now() - new Date(m.createAt).getTime() <
                        604800000 ? (
                          <Text
                            fontSize="xs"
                            fontWeight="semibold"
                            color="teal"
                            mr={1}
                          >
                            New
                          </Text>
                        ) : null}

                        <Flex
                          justify="center"
                          align="center"
                          border="1px white solid"
                          p="1px"
                          mr={1}
                        >
                          <Text fontSize="x-small">{m.ageLimit}</Text>
                        </Flex>
                        <Text fontSize="xs" fontWeight="semibold">
                          {m.duration}
                        </Text>
                      </Flex>

                      <Flex>
                        {m.categories[0] ? (
                          <Text fontSize="xs" mr="3px" fontWeight="semibold">
                            {m.categories[0]}
                          </Text>
                        ) : null}
                        {m.categories[1] ? (
                          <Text
                            fontSize="xs"
                            ml="1px"
                            mr="3px"
                            fontWeight="semibold"
                            //en son buradi categoryleri ekrana verdittin. listeye ekleme silme yap.
                          >
                            &bull; {m.categories[1]}
                          </Text>
                        ) : null}
                        {m.categories[2] ? (
                          <Text fontSize="xs" ml="1px" fontWeight="semibold">
                            &bull; {m.categories[2]}
                          </Text>
                        ) : null}
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    );
  }
}

export default MyListVideo;
