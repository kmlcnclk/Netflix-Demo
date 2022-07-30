import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BiPlay } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import ReactPlayer from 'react-player';

function Video({ src, alt }) {
  const [videoState, setVideoState] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      onMouseLeave={() => setVideoState(false)}
    >
      <Flex
        justify="flex-start"
        align="center"
        className="swiper-player"
        position="relative"
        onMouseEnter={() =>
          setTimeout(() => {
            setVideoState(true);
          }, 1000)
        }
      >
        {src == 10 && alt == 10 ? (
          <>
            <Image
              src="/11.png"
              alt="1"
              width="54px"
              height="174.44px"
              objectFit="contain"
              priority={true}
            />
            <Image
              src="/0.png"
              alt="0"
              width="69px"
              height="174.44px"
              objectFit="contain"
              priority={true}
            />
          </>
        ) : (
          <Image
            src={src}
            alt={alt}
            width="122.11px"
            height="174.44px"
            objectFit="cover"
            priority={true}
          />
        )}

        <div className="absolute left-10 w-56 h-32 bottom-12 shadow-xl ">
          <Image
            src="/squid-game.jpg"
            width="121px"
            height="173px"
            objectFit="cover"
            priority={true}
            alt="squid-game"
          />
        </div>
      </Flex>

      <Box className="swiper-react-player">
        {videoState ? (
          <ReactPlayer
            url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
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
