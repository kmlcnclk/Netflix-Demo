import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Video from './Video';

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
            spaceBetween={30}
            slidesPerGroup={5}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <Video name="numberOne" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberTwo" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberThree" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberFour" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberFive" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberSix" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberSeven" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberEight" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberNine" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberTen" />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Top10Videos;
