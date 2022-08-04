import { Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Video from './Video';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function VideoList({ text }) {
  const [myList, setMyList] = useState([
    <Video
      key="1"
      src="/squid-game.jpg"
      alt="Squid Game"
      url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
    />,
    <Video
      key="2"
      src="/the_witcher.jpg"
      alt="The Witcher"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659514793/The_Witcher_Season_2___Official_Trailer___Netflix_ydbeha.mp4"
    />,
    <Video
      key="3"
      src="/the_umbrella_academy.jpg"
      alt="The Umbrella Academy"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659514984/The_Umbrella_Academy_Season_3___Official_Trailer___Netflix_s1tath.mp4"
    />,
    <Video
      key="4"
      src="/sherlock_holmes.jpg"
      alt="Sherlock Holmes"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659515186/Sherlock_Season_1_Trailer_bwhmnp.mp4"
    />,
    <Video
      key="5"
      src="/la_casa_de_papel.jpg"
      alt="La casa de papel"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659515276/Money_Heist___Series_Trailer___Netflix_s0j9dd.mp4"
    />,
    <Video
      key="6"
      src="/vikings.jpg"
      alt="Vikings"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659515353/Vikings__Valhalla___Official_Trailer___Netflix_q0tokz.mp4"
    />,
    <Video
      key="7"
      src="/dark.jpg"
      alt="Dark"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659515411/Dark_Season_3___Official_Trailer___Netflix_fkq505.mp4"
    />,
    <Video
      key="8"
      src="/stranger_things.jpg"
      alt="Stranger Things"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659515532/Stranger_Things_4___Official_Trailer___Netflix_ryglyo.mp4"
    />,
    <Video
      key="9"
      src="/lupin.jpg"
      alt="Lupin"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659515605/Lupin___Official_Trailer___Netflix_yxln3l.mp4"
    />,
    <Video
      key="10"
      src="/emily_in_paris.jpg"
      alt="Emily in Paris"
      url="https://res.cloudinary.com/nextjs/video/upload/v1659515641/Emily_in_Paris_Season_2___Official_Trailer___Netflix_dzxkly.mp4"
    />,
  ]);

  useEffect(() => {
    setMyList(shuffle(myList));
  }, [myList]);

  return (
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
            {text}
          </Text>
        </Flex>

        <Swiper
          // slidesPerView={5}
          // spaceBetween={10}
          // slidesPerGroup={5}
          // loop={true}
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
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          // zoom={true}
          // navigation={true}
          // className={styles.swiperContainer}
          //üstüne gelince büyültme olayını falan yap.
        >
          {/* <SwiperSlide>
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
          </SwiperSlide> */}

          {myList.map((v, i) => (
            <SwiperSlide key={i}>{v}</SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
}

export default VideoList;
