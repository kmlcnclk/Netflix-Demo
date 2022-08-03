import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import ReactPlayer from 'react-player';
import Icon from '../../../src/Icon';

function Video({ name, src, alt }) {
  const [videoState, setVideoState] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w="242.78px"
      onMouseLeave={() => setVideoState(false)}
    >
      <div className="swiper-player" onMouseEnter={() => setVideoState(true)}>
        <div className="my-swiper-icon">
          <Icon name={name} size="100%" />
        </div>

        <div className="my-swiper-image shadow-xl">
          <Image
            src={src}
            width="121px"
            height="173.41px"
            objectFit="contain"
            priority={true}
            alt={alt}
            quality={100}
          />
        </div>
      </div>

      <Box className="swiper-react-player">
        {videoState ? (
          <ReactPlayer
            // url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
            url="https://www.youtube.com/watch?v=skJfjpYNhvM"
            playing={videoState}
            width="auto"
            height="auto"
            loop={false}
            onEnded={() => {
              setVideoState(false);
            }}
            // volume={volumeState}
          />
        ) : (
          <Image
            src="/squid-game.jpg"
            width="217px"
            height="122px"
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
  );
}

export default Video;
