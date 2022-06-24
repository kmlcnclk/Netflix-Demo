import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

function Top10Videos() {
  return (
    <Box>
      <Flex justify="center" direction="column" align="center" mt={10} h="auto">
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
              color="#e5e5e5"
              fontSize="xl"
              w="full"
              pl="20px"
              fontWeight="semibold"
              textAlign="left"
            >
              Top 10 in Turkey Today
            </Text>
          </Flex>
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            slidesPerGroup={5}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/1.png"
                    alt="1"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/2.png"
                    alt="2"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/3.png"
                    alt="3"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/4.png"
                    alt="4"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/5.png"
                    alt="5"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/6.png"
                    alt="6"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/7.png"
                    alt="7"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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

            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/8.png"
                    alt=""
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/9.png"
                    alt="9"
                    width="122.11px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
            <SwiperSlide>
              <Flex justify="center" align="center" direction="column">
                <Flex
                  justify="flex-start"
                  align="center"
                  className="swiper-player"
                >
                  <Image
                    src="/11.png"
                    alt="1"
                    width="54px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <Image
                    src="/0.png"
                    alt="0"
                    width="69px"
                    height="174.44px"
                    objectFit="contain"
                  />
                  <ReactPlayer
                    url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
                    playing={false}
                    width="auto"
                    height="auto"
                    loop={true}
                  />
                </Flex>
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
    </Box>
  );
}

export default Top10Videos;
