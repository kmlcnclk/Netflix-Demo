import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BiCheck, BiPlay } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import Header from '../../Header';
// import MyListVideo from './MyListVideo';
import ReactPlayer from 'react-player';
import { BsPlus } from 'react-icons/bs';
import styles from '../../../styles/myList.module.css';
import { getUserIDFromLocal } from '../../../LocalStorage/userIDStorage';
import { getClickProfileIndexFromLocal } from '../../../SessionStorage/clickProfileIndexStorage';
import Video from './Video';
import { Swiper, SwiperSlide } from 'swiper/react';

class MyListComponent extends Component {
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

  deleteMyListClick = async (name) => {
    const ID = await getUserIDFromLocal()[0];

    const clickProfileIndex = await getClickProfileIndexFromLocal()[0];

    try {
      await this.props.deleteMyList({
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

    if (this.props.deleteMyListData) {
      this.props.toast({
        title: 'Deletion successful',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      await this.setState({ listState: false });

      await this.setState({
        movies: this.props.deleteMyListData.deleteMyList.movies,
        tvShows: this.props.deleteMyListData.deleteMyList.tvShows,
      });
    }
  };

  render() {
    const { movies, tvShows, listState } = this.state;

    return (
      <Box>
        <Header />
        <Box>
          <Box bgColor="#141414">
            <Flex justify="center" align="center" ml={10} mr={10} mt={16}>
              <SimpleGrid columns={1} spacing={0}>
                {/* {movies.map((m, i) => (
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
                                  onClick={() => {
                                    this.setState({ listState: false });
                                    this.addMyListClick(m.name);
                                  }}
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
                                    this.deleteMyListClick(m.name);
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
                              <Text
                                fontSize="xs"
                                mr="3px"
                                fontWeight="semibold"
                              >
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
                              <Text
                                fontSize="xs"
                                ml="1px"
                                fontWeight="semibold"
                              >
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
                                  onClick={() => {
                                    this.setState({ listState: false });
                                    this.addMyListClick(m.name);
                                  }}
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
                                    this.deleteMyListClick(m.name);
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
                              <Text
                                fontSize="xs"
                                mr="3px"
                                fontWeight="semibold"
                              >
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
                              <Text
                                fontSize="xs"
                                ml="1px"
                                fontWeight="semibold"
                              >
                                &bull; {m.categories[2]}
                              </Text>
                            ) : null}
                          </Flex>
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                ))} */}
                <Swiper
                  slidesPerView={5}
                  slidesPerGroup={5}
                  spaceBetween={10}
                  // breakpoints={{
                  //   320: {
                  //     width: 320,
                  //     slidesPerView: 1,
                  //     slidesPerGroup: 1,
                  //     spaceBetween: 5,
                  //   },
                  //   425: {
                  //     width: 425,
                  //     slidesPerView: 2,
                  //     slidesPerGroup: 2,
                  //     spaceBetween: 6,
                  //   },
                  //   768: {
                  //     width: 768,
                  //     slidesPerView: 3,
                  //     slidesPerGroup: 3,
                  //     spaceBetween: 7,
                  //   },
                  //   1000: {
                  //     width: 1000,
                  //     slidesPerView: 4,
                  //     slidesPerGroup: 4,
                  //     spaceBetween: 8,
                  //   },
                  //   1150: {
                  //     width: 1150,
                  //     slidesPerView: 5,
                  //     slidesPerGroup: 5,
                  //     spaceBetween: 9,
                  //   },
                  //   1440: {
                  //     width: 1440,
                  //     slidesPerView: 5,
                  //     slidesPerGroup: 5,
                  //     spaceBetween: 10,
                  //   },
                  // }}
                  // // loop={true}
                  // loopFillGroupWithBlank={true}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  // zoom={true}
                  // navigation={true}
                  // className={styles.swiperContainer}
                  //üstüne gelince büyültme olayını falan yap.
                >
                  <SwiperSlide>
                    <Video
                      src="/squid-game.jpg"
                      alt="Squid Game"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/the_witcher.jpg"
                      alt="The Witcher"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659514793/The_Witcher_Season_2___Official_Trailer___Netflix_ydbeha.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/the_umbrella_academy.jpg"
                      alt="The Umbrella Academy"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659514984/The_Umbrella_Academy_Season_3___Official_Trailer___Netflix_s1tath.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/sherlock_holmes.jpg"
                      alt="Sherlock Holmes"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659515186/Sherlock_Season_1_Trailer_bwhmnp.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/la_casa_de_papel.jpg"
                      alt="La casa de papel"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659515276/Money_Heist___Series_Trailer___Netflix_s0j9dd.mp4"
                    />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  breakpoints={{
                    320: {
                      width: 320,
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                      spaceBetween: 5,
                    },
                    425: {
                      width: 425,
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 6,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 7,
                    },
                    1000: {
                      width: 1000,
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                      spaceBetween: 8,
                    },
                    1150: {
                      width: 1150,
                      slidesPerView: 5,
                      slidesPerGroup: 5,
                      spaceBetween: 9,
                    },
                    1440: {
                      width: 1440,
                      slidesPerView: 5,
                      slidesPerGroup: 5,
                      spaceBetween: 10,
                    },
                  }}
                  // loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  // zoom={true}
                  // navigation={true}
                  // className={styles.swiperContainer}
                  //üstüne gelince büyültme olayını falan yap.
                >
                  {' '}
                  <SwiperSlide>
                    <Video
                      src="/vikings.jpg"
                      alt="Vikings"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659515353/Vikings__Valhalla___Official_Trailer___Netflix_q0tokz.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/dark.jpg"
                      alt="Dark"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659515411/Dark_Season_3___Official_Trailer___Netflix_fkq505.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/stranger_things.jpg"
                      alt="Stranger Things"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659515532/Stranger_Things_4___Official_Trailer___Netflix_ryglyo.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/lupin.jpg"
                      alt="Lupin"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659515605/Lupin___Official_Trailer___Netflix_yxln3l.mp4"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Video
                      src="/emily_in_paris.jpg"
                      alt="Emily in Paris"
                      url="https://res.cloudinary.com/nextjs/video/upload/v1659515641/Emily_in_Paris_Season_2___Official_Trailer___Netflix_dzxkly.mp4"
                    />
                  </SwiperSlide>
                </Swiper>
              </SimpleGrid>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default MyListComponent;
