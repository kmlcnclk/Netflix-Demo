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
              <Video src="/1.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/2.png" alt="2" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/3.png" alt="3" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/4.png" alt="4" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/5.png" alt="5" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/6.png" alt="6" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/7.png" alt="7" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/8.png" alt="8" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="/9.png" alt="9" />
            </SwiperSlide>
            <SwiperSlide>
              <Video src="10" alt="10" />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Top10Videos;
