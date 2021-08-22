import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Image,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { Component } from 'react';
import NextImage from 'next/image';
import SettingsRestIDFooter from './SettingsRestIDFooter';
import { getClickProfileFromLocal } from '../../SessionStorage/clickProfileStorage';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
import SettingsRestHeader from './SettingsRestHeader';
import Select from 'react-select';
import styles from '../../styles/settingsRestID.module.css';
import { CloseIcon } from '@chakra-ui/icons';

class SettingsRestIDComponent extends Component {
  state = {
    profiles: [],
    imageUrl: '',
    imageName: '',
    defaultSliderValue: 100,
    defaultSliderValueState: false,
    titleR: [],
    options: [],
    a: false,
    defaultKids: false,
  };

  async componentDidMount() {
    const clickProfile = await getClickProfileFromLocal()[0];

    await this.setState({
      profiles: this.props.data.getUserFromID.profiles,
    });
    await this.setState({
      imageUrl: this.state.profiles[clickProfile].profileImageUrl,
    });
    await this.setState({
      imageName: this.state.profiles[clickProfile].profileName,
    });
    await this.setState({
      defaultKids: this.state.profiles[clickProfile].kids,
    });

    await this.props.setKids(this.state.defaultKids);

    if (this.state.defaultKids) {
      await this.props.setSliderValue(25);
      await this.setState({
        defaultSliderValueState: true,
        a: true,
      });
    }

    await this.props.setSliderValue(this.state.defaultSliderValue);

    this.props.setTitleRestrictions(
      this.state.profiles[clickProfile].titleRestrictions
    );

    let titleR = [];

    for (let i = 0; i < this.props.titleRestrictions.length; i++) {
      const title = {
        value: this.props.titleRestrictions[i],
        label: this.props.titleRestrictions[i],
      };

      await titleR.push(title);
    }

    await this.setState({
      titleR: titleR,
    });

    let options = await [];

    for (
      let i = 0;
      i < this.props.getAllMoviesData.getAllMovies.movies.length;
      i++
    ) {
      const option = {
        value: this.props.getAllMoviesData.getAllMovies.movies[i].name,
        label: this.props.getAllMoviesData.getAllMovies.movies[i].name,
      };

      options.push(option);
    }
    for (
      let i = 0;
      i < this.props.getAllTVShowsData.getAllTVShows.tvShows.length;
      i++
    ) {
      const option = {
        value: this.props.getAllTVShowsData.getAllTVShows.tvShows[i].name,
        label: this.props.getAllTVShowsData.getAllTVShows.tvShows[i].name,
      };

      options.push(option);
    }

    for (let t = 0; t < this.state.titleR.length; t++) {
      for (let o = 0; o < options.length; o++) {
        if (options[o]) {
          if (options[o].value == this.state.titleR[t].value) {
            await options.splice(o, 1);
          }
        }
      }
    }

    await this.setState({ options: options });
  }

  isThePasswordCorrectForm = async (e) => {
    e.preventDefault();

    const email = await getEmailFromLocal()[0];
    const clickProfile = await getClickProfileFromLocal()[0];

    try {
      await this.props.isThePasswordCorrect({
        variables: {
          email: email,
          password: this.props.password,
          clickProfileIndex: clickProfile,
        },
      });
    } catch (err) {
      this.props.toast({
        title: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (this.props.isThePasswordCorrectData) {
      if (this.props.isThePasswordCorrectData.isThePasswordCorrect.success) {
        this.props.setPasswordState(true);
        this.setState({
          defaultSliderValue:
            this.props.isThePasswordCorrectData.isThePasswordCorrect
              .sliderValue,
        });
      }
    }
  };

  changeToUserSliderValueForm = async (e) => {
    e.preventDefault();

    const email = await getEmailFromLocal()[0];
    const clickProfile = await getClickProfileFromLocal()[0];

    if (email) {
      if (this.props.sliderValue == 100) {
        this.props.setAgeLimit('ALL MATURITY RATINGS');
      } else if (this.props.sliderValue == 75) {
        this.props.setAgeLimit('16+');
      } else if (this.props.sliderValue == 50) {
        this.props.setAgeLimit('13+');
      } else if (this.props.sliderValue == 25) {
        this.props.setAgeLimit('7+');
      } else if (this.props.sliderValue == 0) {
        this.props.setAgeLimit('All');
      }

      let titleRestrictions = [];

      for (let i = 0; i < this.props.titleRestrictions.length; i++) {
        await titleRestrictions.push(this.props.titleRestrictions[i].value);
      }

      try {
        await this.props.changeToUserSliderValue({
          variables: {
            email: email,
            ageLimit: this.props.ageLimit,
            sliderValue: this.props.sliderValue,
            clickProfileIndex: clickProfile,
            titleRestrictions: titleRestrictions,
            kids: this.props.kids,
          },
        });
      } catch (err) {
        this.props.toast({
          title: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }

      if (this.props.changeToUserSliderValueData) {
        if (
          this.props.changeToUserSliderValueData.changeToUserSliderValue.success
        ) {
          this.props.router.push('/YourAccount');
        }
      }
    }
  };

  handleChange = async (selectedOption) => {
    await this.props.setTitleRestrictions(selectedOption);
  };

  deleteTitleRestrictions = async (i, videoName) => {
    let t = [];
    t = await this.state.titleR;

    await t.splice(i, 1);

    await this.setState({ titleR: t });

    let options = await [];

    const email = await getEmailFromLocal()[0];
    const clickProfileIndex = await getClickProfileFromLocal()[0];

    try {
      await this.props.deleteTitleRestrictions({
        variables: {
          email: email,
          clickProfileIndex: clickProfileIndex,
          videoName: videoName,
        },
      });
    } catch (err) {
      this.props.toast({
        title: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (this.props.deleteTitleRestrictionsData) {
      let options = await [];

      for (
        let i = 0;
        i < this.props.getAllMoviesData.getAllMovies.movies.length;
        i++
      ) {
        const option = {
          value: this.props.getAllMoviesData.getAllMovies.movies[i].name,
          label: this.props.getAllMoviesData.getAllMovies.movies[i].name,
        };

        options.push(option);
      }
      for (
        let i = 0;
        i < this.props.getAllTVShowsData.getAllTVShows.tvShows.length;
        i++
      ) {
        const option = {
          value: this.props.getAllTVShowsData.getAllTVShows.tvShows[i].name,
          label: this.props.getAllTVShowsData.getAllTVShows.tvShows[i].name,
        };

        options.push(option);
      }

      for (let o = 0; o < options.length; o++) {
        for (
          let t = 0;
          t <
          this.props.deleteTitleRestrictionsData.deleteTitleRestrictions
            .titleRestrictions.length;
          t++
        ) {
          if (
            options[o].value ==
            this.props.deleteTitleRestrictionsData.deleteTitleRestrictions
              .titleRestrictions[t]
          ) {
            await options.splice(o, 1);
          }
        }
      }

      await this.setState({ options: options });
    }
  };

  render() {
    const {
      password,
      setPassword,
      passwordState,
      setSliderValue,
      sliderValue,
      getUnclickedProfilesData,
      getAllMoviesData,
      getAllTVShowsData,
      kids,
      setKids,
    } = this.props;
    const {
      profiles,
      imageName,
      imageUrl,
      defaultSliderValue,
      defaultSliderValueState,
      data,
      titleR,
      options,
      a,
      defaultKids,
    } = this.state;

    return (
      <Box>
        {passwordState ? (
          <Box>
            {profiles[0] ? (
              <Box bgColor="#f3f3f3">
                <SettingsRestHeader
                  imageUrl={imageUrl}
                  imageName={imageName}
                  getUnclickedProfilesData={getUnclickedProfilesData}
                />

                <Flex
                  justify="center"
                  align="center"
                  direction="column"
                  bgColor="#f3f3f3"
                  mt="70px"
                >
                  <Container
                    maxW="container.lg"
                    p={3}
                    pb="100px"
                    as="form"
                    onSubmit={this.changeToUserSliderValueForm}
                  >
                    <Box borderBottom="1px solid #ccc">
                      <Flex justify="space-between" align="center">
                        <Text fontSize="3xl" fontWeight="semibold" color="#333">
                          Viewing Restrictions
                        </Text>
                        <Image
                          src={imageUrl}
                          alt={imageName}
                          w="50px"
                          h="50px"
                        />
                      </Flex>
                      <Text fontSize="2xl" color="#333333" mt={7}>
                        Profile Maturity Rating for {imageName}
                      </Text>

                      {a ? (
                        <Box>
                          <Text fontSize="md" color="#333" mt={5}>
                            Only show titles rated <strong>7+ and below</strong>{' '}
                            for this profile.
                          </Text>
                        </Box>
                      ) : (
                        <Box>
                          {sliderValue == 100 ? (
                            <Text fontSize="md" color="#333" mt={5}>
                              Show titles of all maturity ratings for this
                              profile.
                            </Text>
                          ) : null}
                          {sliderValue == 75 ? (
                            <Text fontSize="md" color="#333" mt={5}>
                              Only show titles rated{' '}
                              <strong>16+ and below</strong> for this profile.
                            </Text>
                          ) : null}
                          {sliderValue == 50 ? (
                            <Text fontSize="md" color="#333" mt={5}>
                              Only show titles rated{' '}
                              <strong>13+ and below</strong> for this profile.
                            </Text>
                          ) : null}
                          {sliderValue == 25 ? (
                            <Text fontSize="md" color="#333" mt={5}>
                              Only show titles rated{' '}
                              <strong>7+ and below</strong> for this profile.
                            </Text>
                          ) : null}
                          {sliderValue == 0 ? (
                            <Text fontSize="md" color="#333" mt={5}>
                              Only show titles rated <strong>All</strong> for
                              this profile.
                            </Text>
                          ) : null}
                        </Box>
                      )}

                      <Slider
                        defaultValue={defaultSliderValue}
                        min={0}
                        max={100}
                        value={defaultSliderValueState ? 25 : sliderValue}
                        step={25}
                        mt={10}
                        w="96%"
                        ml={3.5}
                        onChange={(value) => {
                          setSliderValue(value);
                        }}
                      >
                        <SliderTrack bg="gray.200">
                          <Box position="relative" right={10} />
                          <SliderFilledTrack bg="green.500" />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                      </Slider>
                      <Flex mb={10} justify="space-between" align="center">
                        <Box
                          bgColor="#5fa53f"
                          w="max"
                          color="#fff"
                          pt={0}
                          pb={0}
                          pl={1.5}
                          pr={1.5}
                          height="max"
                        >
                          All
                        </Box>
                        <Box
                          bgColor="#5fa53f"
                          w="max"
                          color="#fff"
                          pt={0}
                          pb={0}
                          pl={1.5}
                          pr={1.5}
                          height="max"
                        >
                          7+
                        </Box>
                        <Box
                          bgColor="#5fa53f"
                          w="max"
                          color="#fff"
                          pt={0}
                          pb={0}
                          pl={1.5}
                          pr={1.5}
                          height="max"
                        >
                          13+
                        </Box>
                        <Box
                          bgColor="#5fa53f"
                          w="max"
                          color="#fff"
                          pt={0}
                          pb={0}
                          pl={1.5}
                          pr={1.5}
                          height="max"
                        >
                          16+
                        </Box>
                        <Box
                          bgColor="#5fa53f"
                          w="max"
                          color="#fff"
                          pt={0}
                          pb={0}
                          pl={1.5}
                          pr={1.5}
                          height="max"
                        >
                          18+
                        </Box>
                      </Flex>
                    </Box>

                    <Box borderBottom="1px solid #ccc" pt={7} pb={7}>
                      <Text fontSize="2xl" mb={5}>
                        Kids Profile
                      </Text>
                      <Checkbox
                        size="lg"
                        onChange={(e) => {
                          setKids(!kids);
                          setSliderValue(25);
                          this.setState({
                            defaultSliderValueState: !defaultSliderValueState,
                            a: !a,
                          });
                        }}
                        // defaultValue={kids}
                        // value={kids}
                        defaultChecked={kids}
                      >
                        Display the Netflix Kids experience with titles just for
                        kids
                      </Checkbox>
                    </Box>
                    <Box pt={7}>
                      <Text fontSize="2xl">
                        Title Restrictions for {imageName}
                      </Text>
                      <Text fontSize="lg" mt={5}>
                        Don&apos;t show specific titles for this profile
                        regardless of Maturity Rating
                      </Text>
                      {/* <Input
                        borderRadius="none"
                        type="search"
                        bgColor="#fff"
                        border="1px solid #ccc"
                        _active={{ bgColor: '#fff' }}
                        _hover={{ bgColor: '#fff' }}
                        _focus={{ bgColor: '#fff' }}
                        variant="outline"
                        size="lg"
                      /> */}
                      {options ? (
                        <Box mt={4} h="42px" w="500px">
                          <Select
                            placeholder="Enter show or movie name"
                            name="titleRestrictions"
                            options={options}
                            isMulti
                            onChange={this.handleChange}
                            className={styles.selectVideo}
                          ></Select>
                        </Box>
                      ) : null}

                      <Box>
                        {titleR.map((t, i) => (
                          <Flex align="center" key={i} color="#b9090b">
                            <Text fontSize="lg" mr={2}>
                              {t.value}
                            </Text>
                            <CloseIcon
                              mt="4px"
                              cursor="pointer"
                              onClick={() =>
                                this.deleteTitleRestrictions(i, t.value)
                              }
                              w="10px"
                              h="10px"
                            />
                          </Flex>
                        ))}
                      </Box>
                      <Flex align="center" mt={14}>
                        <Button
                          colorScheme="blue"
                          bgColor="#0080ff"
                          type="submit"
                          color="#fff"
                          w="98px"
                          h="37px"
                          borderRadius="none"
                          textAlign="center"
                          //bunu yapacan netflixden bakıp yap.
                        >
                          Save
                        </Button>
                        <Link href="/YourAccount" passHref>
                          <Button
                            ml={2}
                            w="98px"
                            h="37px"
                            colorScheme="whiteAlpha"
                            bgColor="#e6e6e6"
                            borderRadius="none"
                            color="#000"
                            textAlign="center"
                          >
                            Cancel
                          </Button>
                        </Link>
                      </Flex>
                    </Box>
                  </Container>
                </Flex>
                <Box w="100%">
                  <SettingsRestIDFooter code="773777" />
                </Box>
              </Box>
            ) : null}
          </Box>
        ) : (
          <Box>
            {profiles[0] ? (
              <Box bgColor="#f3f3f3">
                <SettingsRestHeader
                  imageUrl={imageUrl}
                  imageName={imageName}
                  getUnclickedProfilesData={getUnclickedProfilesData}
                />
                <Flex
                  justify="center"
                  align="center"
                  direction="column"
                  bgColor="#f3f3f3"
                  mt="70px"
                >
                  <Container
                    maxW="container.lg"
                    p={3}
                    pb="200px"
                    as="form"
                    onSubmit={this.isThePasswordCorrectForm}
                  >
                    <Flex justify="space-between" align="center">
                      <Text fontSize="3xl" color="#333">
                        Viewing Restrictions
                      </Text>
                      <Image src={imageUrl} alt={imageName} w="50px" h="50px" />
                    </Flex>
                    <Text fontSize="lg" color="#333333" mt={10}>
                      Enter your account password to edit{' '}
                      <strong>Profile Maturity Rating </strong>
                      and <strong>Title Restrictions</strong> for{' '}
                      <strong>{imageName}&apos;s</strong> profile.
                    </Text>
                    <Flex mt={6} align="center">
                      <Input
                        h="44px"
                        w="300px"
                        borderRadius="none"
                        type="password"
                        value={password}
                        bgColor="#fff"
                        border="1px solid #000"
                        onChange={(e) => setPassword(e.target.value)}
                        _active={{ bgColor: '#fff' }}
                        _hover={{ bgColor: '#fff' }}
                        _focus={{ bgColor: '#fff' }}
                        variant="outline"
                        isRequired
                        size="lg"
                      />
                      <Box ml={4}>
                        <Link href="">
                          <a>
                            <Text
                              color="#0080ff"
                              _hover={{ textDecoration: 'underline' }}
                              fontSize="lg"
                            >
                              Parolamı unuttum
                            </Text>
                          </a>
                        </Link>
                      </Box>
                    </Flex>
                    <Flex align="center" mt={14}>
                      <Button
                        colorScheme="blue"
                        bgColor="#0080ff"
                        type="submit"
                        color="#fff"
                        w="98px"
                        h="37px"
                        borderRadius="none"
                        textAlign="center"
                      >
                        Devam et
                      </Button>
                      <Link href="/YourAccount" passHref>
                        <Button
                          ml={2}
                          w="98px"
                          h="37px"
                          colorScheme="whiteAlpha"
                          bgColor="#e6e6e6"
                          borderRadius="none"
                          color="#000"
                          textAlign="center"
                        >
                          İptal
                        </Button>
                      </Link>
                    </Flex>
                  </Container>
                  <Box w="100%">
                    <SettingsRestIDFooter code="260579" />
                  </Box>
                </Flex>
              </Box>
            ) : null}
          </Box>
        )}
      </Box>
    );
  }
}

export default SettingsRestIDComponent;
