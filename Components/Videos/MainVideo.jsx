import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import { onDrop } from '../toolbox/UserOnDrop';
import ReactPlayer from 'react-player';
// import styles from '../../styles/MainVideo.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
// import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import Top10Videos from './Top10Videos';

// SwiperCore.use([Pagination, Navigation]);

function MainVideo() {
  const [file, setFile] = useState({});
  const [b, setB] = useState('');
  const abc = useRef(null);

  const [sliderText, setSliderText] = useState(false);
  const [mainVideoState, setMainVideoState] = useState(true);

  const fileChangeInput = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const selam = async (e) => {
    e.preventDefault();

    setB(await onDrop(file));
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY < 500) {
        setMainVideoState(true);
      } else {
        setMainVideoState(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener(changeBackground);
    };
  }, []);

  return (
    <Box bgColor="#141414">
      {/* <Script src="./Browse/mv.js" /> */}
      <Flex
        justify="center"
        direction="column"
        align="center"
        // className={styles.mainVideoDiv}
      >
        <Box>
          <ReactPlayer
            url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
            playing={mainVideoState ? true : false}
            width="100%"
            height="820px"
            loop={true}
          />
        </Box>

        {/* <Box as="form" onSubmit={selam}>
        <Center mb={6}>
          <Input
            type="file"
            accept="video/*"
            onChange={fileChangeInput}
            d="none"
            ref={abc}
            name="profileImage"
          />
          <Button
            onClick={() => abc.current.click()}
            colorScheme="red"
            w="min"
            textAlign="center"
          >
            Choose Profile Image
          </Button>
          <Button type="submit" colorScheme="red">
            se
          </Button>
        </Center>
      </Box> */}
      </Flex>
      <Flex
        justify="center"
        direction="column"
        align="center"
        mt={10}
        h="auto"
        // className={styles.swiperMainDiv}
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
          <Flex w="full" h="full" align="flex-end">
            <Text
              fontSize="xl"
              w="full"
              color="#e5e5e5"
              pl="20px"
              fontWeight="semibold"
              textAlign="left"
            >
              My List
            </Text>
          </Flex>

          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            slidesPerGroup={5}
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Box className="swiper-player">
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Box>
                <Box className="swiper-react-player">
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Box>

                <Box className="sliderText">
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
                    <Text
                      fontSize="xs"
                      fontWeight="semibold"
                      color="teal"
                      mr={1}
                    >
                      New
                    </Text>
                    <Flex
                      justify="center"
                      align="center"
                      border="1px white solid"
                      p="1px"
                      mr={1}
                    >
                      <Text fontSize="x-small">13+</Text>
                    </Flex>
                    <Text fontSize="xs" fontWeight="semibold">
                      2h 16m
                    </Text>
                  </Flex>

                  <Flex>
                    <Text fontSize="xs" fontWeight="semibold">
                      Emotional &bull; Drama &bull; Cold War Era
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
      <Top10Videos />
    </Box>
  );
}

export default MainVideo;
