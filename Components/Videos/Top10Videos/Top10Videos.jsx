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
                url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberTwo"
                src="/the_witcher_cut.jpg"
                alt="The Witcher"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659514793/The_Witcher_Season_2___Official_Trailer___Netflix_ydbeha.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberThree"
                src="/the_umbrella_academy_cut.jpg"
                alt="The Umbrella Academy"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659514984/The_Umbrella_Academy_Season_3___Official_Trailer___Netflix_s1tath.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberFour"
                src="/sherlock_holmes_cut.jpg"
                alt="Sherlock Holmes"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659515186/Sherlock_Season_1_Trailer_bwhmnp.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberFive"
                src="/la_casa_de_papel_cut.jpg"
                alt="La casa de papel"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659515276/Money_Heist___Series_Trailer___Netflix_s0j9dd.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberSix"
                src="/vikings_cut.jpg"
                alt="Vikings"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659515353/Vikings__Valhalla___Official_Trailer___Netflix_q0tokz.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberSeven"
                src="/dark_cut.jpg"
                alt="Dark"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659515411/Dark_Season_3___Official_Trailer___Netflix_fkq505.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberEight"
                src="/stranger_things_cut.jpg"
                alt="Stranger Things"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659515532/Stranger_Things_4___Official_Trailer___Netflix_ryglyo.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberNine"
                src="/lupin_cut.jpg"
                alt="Lupin"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659515605/Lupin___Official_Trailer___Netflix_yxln3l.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                name="numberTen"
                src="/emily_in_paris_cut.jpg"
                alt="Emily in Paris"
                url="https://res.cloudinary.com/nextjs/video/upload/v1659515641/Emily_in_Paris_Season_2___Official_Trailer___Netflix_dzxkly.mp4"
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Top10Videos;
