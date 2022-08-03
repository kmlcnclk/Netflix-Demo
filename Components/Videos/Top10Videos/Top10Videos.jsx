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
              <Video
                name="numberOne"
                src="/squid-game-cut.jpg"
                alt="Squid Game"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberTwo"
                src="/the_witcher_cut.jpg"
                alt="The Witcher"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberThree"
                src="/the_umbrella_academy_cut.jpg"
                alt="The Umbrella Academy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberFour"
                src="/sherlock_holmes_cut.jpg"
                alt="Sherlock Holmes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberFive"
                src="/la_casa_de_papel_cut.jpg"
                alt="La casa de papel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberSix" src="/vikings_cut.jpg" alt="Vikings" />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberSeven" src="/dark_cut.jpg" alt="Dark" />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberEight"
                src="/stranger_things_cut.jpg"
                alt="Stranger Things"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video name="numberNine" src="/lupin_cut.jpg" alt="Lupin" />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberTen"
                src="/emily_in_paris_cut.jpg"
                alt="Emily in Paris"
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Top10Videos;
