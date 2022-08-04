import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';
import ReactPlayer from 'react-player';
import { BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';

function Video({ src, alt, url }) {
  const [myListVideoState, setMyListVideoState] = useState(false);

  return (
    <Flex
      onMouseLeave={() => setMyListVideoState(false)}
      className="myMainVideoComponent"
    >
      <div
        className="swiper-player"
        onMouseEnter={() => setMyListVideoState(true)}
      >
        <NextImage
          src={src}
          width="245px"
          height="138px"
          objectFit="cover"
          priority={true}
          alt={alt}
        />
      </div>
      <Box className="swiper-react-player">
        {myListVideoState ? (
          <ReactPlayer
            url={url}
            playing={myListVideoState}
            width="auto"
            height="auto"
            loop={false}
            onEnded={() => {
              setMyListVideoState(false);
            }}
            // volume={volumeState}
          />
        ) : (
          <NextImage
            src="/squid-game.jpg"
            width="245px"
            height="138px"
            objectFit="cover"
            priority={true}
            alt="squid-game"
          />
        )}
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
          <Text fontSize="xs" fontWeight="semibold" color="teal" mr={1}>
            New
          </Text>
          <Flex
            justify="center"
            align="center"
            border="1px white solid"
            p="1px"
            mr={1}
          >
            <Text fontSize="x-small" color="#f3f3f3">
              13+
            </Text>
          </Flex>
          <Text fontSize="xs" fontWeight="semibold" color="#f3f3f3">
            2h 16m
          </Text>
        </Flex>

        <Flex>
          <Text fontSize="xs" fontWeight="semibold" color="#f3f3f3">
            Emotional &bull; Drama &bull; Cold War Era
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Video;
