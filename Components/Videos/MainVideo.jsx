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
import Top10Videos from './Top10Videos/Top10Videos';
import NextImage from 'next/image';
import Icon from '../../src/Icon';
import Video from './Video';
import VideoList from './VideoList';

// SwiperCore.use([Pagination, Navigation]);

function MainVideo() {
  const [file, setFile] = useState({});
  const [b, setB] = useState('');
  const [mVideoState, setMVideoState] = useState(false);
  const [loudSpeakerState, setLoudSpeakerState] = useState(true);
  const [volumeState, setVolumeState] = useState(1);
  const [myListVideoState, setMyListVideoState] = useState(false);

  const abc = useRef(null);

  const [sliderText, setSliderText] = useState(false);
  const [mainVideoState, setMainVideoState] = useState(true);
  const [size, setSize] = useState(true);

  const fileChangeInput = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const selam = async (e) => {
    e.preventDefault();

    setB(await onDrop(file));
  };

  useEffect(() => {
    setTimeout(() => {
      setMVideoState(true);
    }, 4000);
    const changeBackground = () => {
      if (window.scrollY < 500) {
        setMainVideoState(true);
      } else {
        setMainVideoState(false);
      }
    };
    window?.addEventListener('scroll', changeBackground);

    const changeWidth = () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 885) {
        setSize(false);
      }
    };

    window?.addEventListener('resize', changeWidth);

    return () => {
      window?.removeEventListener(changeBackground);
      window?.removeEventListener(changeWidth);
      clearTimeout(() => {
        setMVideoState(true);
      });
    };
  }, []);

  return (
    <Box bgColor="#141414">
      {/* <Script src="./Browse/mv.js" /> */}
      <div
        className="myMainVideo"
        // className={styles.mainVideoDiv}
      >
        <div className="relative">
          <Box className={mVideoState ? 'block' : 'hidden'}>
            <ReactPlayer
              url="https://res.cloudinary.com/nextjs/video/upload/v1656050304/Squid_Game_Official_Trailer_Netflix_mruikb.mp4"
              playing={mainVideoState && mVideoState && size}
              width="100%"
              height="820px"
              loop={false}
              onEnded={() => {
                setMVideoState(false);
              }}
              volume={volumeState}
            />
          </Box>
          <div className={mVideoState ? 'hidden' : 'block'}>
            <NextImage
              src="/squid-game.jpg"
              width="1349px"
              height="820px"
              objectFit="cover"
              priority={true}
            />
          </div>

          <div className="absolute bottom-48 left-20">
            <NextImage
              src="/squid-game-text.webp"
              width="485px"
              height="194px"
              objectFit="cover"
              priority={true}
            />
            <Text w={485} color="white" fontWeight="semibold" mb={6}>
              The final round presents another cruel test — but this time, how
              it ends depends on just one player. The game&apos;s creator steps
              out of the shadows.
            </Text>
            <div className="flex space-x-3">
              <button className="bg-white w-28 h-10 rounded-md hover:bg-hoverWhite transition-all flex justify-center items-center space-x-2">
                <Icon name="play" size="24px" color="#000" />
                <p className="text-black font-bold">Play</p>
              </button>
              <button className="bg-buttonBG w-36 h-10 rounded-md hover:bg-buttonBGHover transition-all flex justify-center items-center space-x-2">
                <Icon name="exclamation" size="24px" color="#ffffff" />
                <p className="text-white font-bold">More Info</p>
              </button>
            </div>
          </div>
          <div className="absolute right-20 bottom-56 rounded-full border p-2 border-white  cursor-pointer">
            {loudSpeakerState ? (
              <Icon
                name="loudSpeaker"
                size="18.44px"
                color="#fff"
                onClickFunc={() => {
                  setLoudSpeakerState(false);
                  setVolumeState(0);
                }}
              />
            ) : (
              <Icon
                name="nonLoudSpeaker"
                size="18.44px"
                color="#fff"
                onClickFunc={() => {
                  setLoudSpeakerState(true);
                  setVolumeState(1);
                }}
              />
            )}
          </div>
        </div>

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
      </div>
      <VideoList text="My List" />
      <Top10Videos />
      <VideoList text="Trending Now" />
      <VideoList text="Action" />
      <VideoList text="Cyberpunk" />
    </Box>
  );
}

export default MainVideo;
