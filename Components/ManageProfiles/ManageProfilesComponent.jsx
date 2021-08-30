import React, { Component } from 'react';
import {
  Box,
  Flex,
  Container,
  Text,
  Input,
  Select,
  Heading,
  Checkbox,
} from '@chakra-ui/react';
import Link from 'next/link';
import NextImage from 'next/image';
import { AddIcon } from '@chakra-ui/icons';
import { RiPencilFill } from 'react-icons/ri';
import { getUserIDFromLocal } from '../../LocalStorage/userIDStorage';
import {
  addClickProfileToLocal,
  deleteClickProfileFromLocal,
} from '../../SessionStorage/clickProfileStorage';
import { deleteClickProfileIndexFromLocal } from '../../SessionStorage/clickProfileIndexStorage';

class ManageProfilesComponent extends Component {
  state = {
    profiles: [],
    u1: ' ',
    u2: ' ',
    u3: ' ',
    u4: ' ',
    ID: '',
  };

  async componentDidMount() {
    await this.setState({
      profiles: this.props.data.getProfilesFromUser.profiles,
    });

    await this.props.setProfileCount(this.state.profiles.length);

    for (let i = 0; i < this.state.profiles.length; i++) {
      const profileName = await this.state.profiles[i].profileName;
      const profileImageUrl = await this.state.profiles[i].profileImageUrl;
      const language = await this.state.profiles[i].language;
      const ageLimit = await this.state.profiles[i].maturitySettings.ageLimit;
      const autoplayNextEpisode = await this.state.profiles[i].autoplayControls
        .autoplayNextEpisode;
      const previews = await this.state.profiles[i].autoplayControls.previews;
      const kids = await this.state.profiles[i].kids;

      const {
        setProfileImageUrl1,
        setLanguage1,
        setAgeLimit1,
        setAutoplayNextEpisode1,
        setPreviews1,
        setProfileImageUrl2,
        setLanguage2,
        setAgeLimit2,
        setAutoplayNextEpisode2,
        setPreviews2,
        setProfileImageUrl3,
        setLanguage3,
        setAgeLimit3,
        setAutoplayNextEpisode3,
        setPreviews3,
        setProfileImageUrl4,
        setLanguage4,
        setAgeLimit4,
        setAutoplayNextEpisode4,
        setPreviews4,
        setKids1,
        setKids2,
        setKids3,
        setKids4,
      } = this.props;

      if (i == 0) {
        await this.setState({
          u1: profileName,
        });
        setProfileImageUrl1(profileImageUrl);
        setLanguage1(language);
        setAgeLimit1(ageLimit); //bunları da u1 gibi usera göre yap
        setAutoplayNextEpisode1(autoplayNextEpisode);
        setPreviews1(previews);
        setKids1(kids);
      } else if (i == 1) {
        await this.setState({
          u2: profileName,
        });
        setProfileImageUrl2(profileImageUrl);
        setLanguage2(language);
        setAgeLimit2(ageLimit);
        setAutoplayNextEpisode2(autoplayNextEpisode);
        setPreviews2(previews);
        setKids2(kids);
      } else if (i == 2) {
        await this.setState({
          u3: profileName,
        });
        setProfileImageUrl3(profileImageUrl);
        setLanguage3(language);
        setAgeLimit3(ageLimit);
        setAutoplayNextEpisode3(autoplayNextEpisode);
        setPreviews3(previews);
        setKids3(kids);
      } else if (i == 3) {
        await this.setState({
          u4: profileName,
        });
        setProfileImageUrl4(profileImageUrl);
        setLanguage4(language);
        setAgeLimit4(ageLimit);
        setAutoplayNextEpisode4(autoplayNextEpisode);
        setPreviews4(previews);
        setKids4(kids);
      }
    }

    const {
      setProfileImageUrl5,
      setLanguage5,
      setAgeLimit5,
      setAutoplayNextEpisode5,
      setPreviews5,
      setKids5,
      setU5,
    } = this.props;

    if (this.props.getChildFromUserData.getChildFromUser.child) {
      await setU5(
        this.props.getChildFromUserData.getChildFromUser.child.childName
      );
      setProfileImageUrl5(
        this.props.getChildFromUserData.getChildFromUser.child.childImageUrl
      );
      setLanguage5(
        this.props.getChildFromUserData.getChildFromUser.child.language
      );
      setAgeLimit5(
        this.props.getChildFromUserData.getChildFromUser.child.maturitySettings
          .ageLimit
      );
      setAutoplayNextEpisode5(
        this.props.getChildFromUserData.getChildFromUser.child.autoplayControls
          .autoplayNextEpisode
      );
      setPreviews5(
        this.props.getChildFromUserData.getChildFromUser.child.autoplayControls
          .previews
      );
      setKids5(this.props.getChildFromUserData.getChildFromUser.child.kids);
    }

    const ID = await getUserIDFromLocal()[0];
    await this.setState({ ID: ID });
  }

  changeToProfileNameForm = async (e) => {
    try {
      const { clickProfileIndex } = this.props;

      if (clickProfileIndex == '0') {
        await this.props.changeToProfileName({
          variables: {
            email: this.props.email,
            profileName: this.state.u1,
            profileImageUrl: this.props.profileImageUrl1,
            language: this.props.language1,
            ageLimit: this.props.ageLimit1,
            autoplayNextEpisode: this.props.autoplayNextEpisode1,
            previews: this.props.previews1,
            profileIndex: clickProfileIndex,
          },
        });
      } else if (clickProfileIndex == '1') {
        await this.props.changeToProfileName({
          variables: {
            email: this.props.email,
            profileName: this.state.u2,
            profileImageUrl: this.props.profileImageUrl2,
            language: this.props.language2,
            ageLimit: this.props.ageLimit2,
            autoplayNextEpisode: this.props.autoplayNextEpisode2,
            previews: this.props.previews2,
            profileIndex: clickProfileIndex,
          },
        });
      } else if (clickProfileIndex == '2') {
        await this.props.changeToProfileName({
          variables: {
            email: this.props.email,
            profileName: this.state.u3,
            profileImageUrl: this.props.profileImageUrl3,
            language: this.props.language3,
            ageLimit: this.props.ageLimit3,
            autoplayNextEpisode: this.props.autoplayNextEpisode3,
            previews: this.props.previews3,
            profileIndex: clickProfileIndex,
          },
        });
      } else if (clickProfileIndex == '3') {
        await this.props.changeToProfileName({
          variables: {
            email: this.props.email,
            profileName: this.state.u4,
            profileImageUrl: this.props.profileImageUrl4,
            language: this.props.language4,
            ageLimit: this.props.ageLimit4,
            autoplayNextEpisode: this.props.autoplayNextEpisode4,
            previews: this.props.previews4,
            profileIndex: clickProfileIndex,
          },
        });
      }
    } catch (err) {
      this.props.toast({
        title: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (this.props.changeToProfileNameData) {
      this.props.router.reload();
    }
  };

  changeChildFromUserFunc = async (e) => {
    try {
      await this.props.changeChildFromUser({
        variables: {
          email: this.props.email,
          childName: this.props.u5,
          childImageUrl: this.props.profileImageUrl5,
          language: this.props.language5,
          ageLimit: this.props.ageLimit5,
          autoplayNextEpisode: this.props.autoplayNextEpisode5,
          previews: this.props.previews5,
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

    if (this.props.changeChildFromUserData) {
      this.props.router.reload();
    }
  };

  editProfileWithUserID = async (e) => {
    await deleteClickProfileFromLocal();
    await addClickProfileToLocal(this.props.clickProfileIndex);
    this.props.router.push(`/settings/restrictions/${this.state.ID}`);
  };

  deletePageForm = async (click, image, name) => {
    const {
      setDeleteProfileCImage,
      setDeleteProfileCName,
      setDeleteProfileCState,
    } = this.props;

    deleteClickProfileFromLocal();
    addClickProfileToLocal(click);
    setDeleteProfileCState(true);
    setDeleteProfileCImage(image);
    setDeleteProfileCName(name);
  };

  render() {
    const {
      add1Color,
      add2Color,
      add3Color,
      setAdd1Color,
      setAdd2Color,
      setAdd3Color,
      childColor,
      setChildColor,
      borderState,
      setBorderState,
      user1,
      setUser1,
      user2,
      setUser2,
      user3,
      setUser3,
      user4,
      setUser4,
      userBorderState1,
      setUserBorderState1,
      userBorderState2,
      setUserBorderState2,
      userBorderState3,
      setUserBorderState3,
      userBorderState4,
      setUserBorderState4,
      profileCount,
      router,
      manageProfileState,
      setManageProfileState,
      clickProfileIndex,
      setClickProfileIndex,
      profileImageUrl1,
      language1,
      ageLimit1,
      autoplayNextEpisode1,
      previews1,
      profileImageUrl2,
      language2, //bak buralara    profileImageUrl5, en son bunu bağlayacaktın resme ve bunu dbye ekleyecektin resim özelliğiekleme client.
      ageLimit2,
      autoplayNextEpisode2,
      previews2,
      profileImageUrl3,
      language3,
      ageLimit3,
      autoplayNextEpisode3,
      previews3,
      profileImageUrl4,
      language4,
      ageLimit4,
      autoplayNextEpisode4,
      previews4,
      profileImageUrl5,
      language5,
      ageLimit5,
      autoplayNextEpisode5,
      previews5,
      setProfileImageUrl1,
      setLanguage1,
      setAgeLimit1,
      setAutoplayNextEpisode1,
      setPreviews1,
      setProfileImageUrl2,
      setLanguage2,
      setAgeLimit2,
      setAutoplayNextEpisode2,
      setPreviews2,
      setProfileImageUrl3,
      setLanguage3,
      setAgeLimit3,
      setAutoplayNextEpisode3,
      setPreviews3,
      setProfileImageUrl4,
      setLanguage4,
      setAgeLimit4,
      setAutoplayNextEpisode4,
      setPreviews4,
      setProfileImageUrl5,
      setLanguage5,
      setAgeLimit5,
      setAutoplayNextEpisode5,
      setPreviews5,
      setSelectProfileState,
      setAddProfileState,
      kids1,
      kids2,
      kids3,
      kids4,
      kids5,
      getChildFromUserData,
      setDeleteProfileCState,
      setDeleteProfileCImage,
      setDeleteProfileCName,
      u5,
      setU5,
    } = this.props;

    const { profiles, u1, u2, u3, u4 } = this.state;

    return (
      <Box bgColor="#141414">
        <Flex
          justify="flex-start"
          align="center"
          pt={2}
          pl={12}
          cursor="pointer"
        >
          <Link href="/browse" passHref>
            <a>
              <NextImage
                src="/net.png"
                width={'100'}
                height={'50'}
                objectFit="contain"
                alt="Netflix"
              />
            </a>
          </Link>
        </Flex>

        {manageProfileState ? (
          <Flex justify="center" align="center">
            <Container w="509.45px" color="white" textAlign="center">
              <Box textAlign="left" borderBottom="solid #333333 1px">
                <Heading size="2xl" m={2} fontWeight="normal">
                  Edit Profile
                </Heading>
              </Box>
              <Flex>
                {clickProfileIndex == '0' ? (
                  <Flex justify="center" direction="column" mb={5}>
                    <Flex
                      justify="center"
                      mt={5}
                      ml={2}
                      borderBottom="solid #333333 1px"
                    >
                      <Flex>
                        <Flex
                          justify="flex-start"
                          align="flex-end"
                          width="109.27px"
                          height="109.27px"
                          mb={2}
                          p={2}
                          bgAttachment="scroll"
                          bgSize="cover"
                          bgRepeat="no-repeat"
                          bgImage={profileImageUrl1}
                        >
                          <Box
                            borderRadius="full"
                            cursor="pointer"
                            border="white solid 1px"
                            p={1}
                          >
                            <RiPencilFill color="white" size="15px" />
                          </Box>
                        </Flex>
                      </Flex>
                      <Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          textAlign="left"
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Input
                            type="text"
                            h="35.52px"
                            w="319.64px"
                            name="code"
                            borderRadius="none"
                            borderColor="#666666"
                            value={u1}
                            placeholder="Name"
                            _placeholder={{
                              fontSize: '14px',
                              color: '#ccc',
                            }}
                            onChange={(e) =>
                              this.setState({ u1: e.target.value })
                            }
                            _active={{ bgColor: '#666666' }}
                            _hover={{ bgColor: '#666666' }}
                            _focus={{ bgColor: '#666666' }}
                            errorBorderColor="red"
                            isRequired
                            bgColor="#666666"
                            size="lg"
                          />
                          <Flex mt={3} direction="column">
                            <Text
                              mb={2}
                              fontSize="lg"
                              color="#cccccc"
                              textAlign="left"
                            >
                              Language:
                            </Text>
                            <Select
                              w="max"
                              h="25.61px"
                              borderRadius="none"
                              variant="outline"
                              borderColor="white"
                              bgColor="black"
                              _hover={{ bgColor: '#2b2b2b' }}
                              defaultValue={language1}
                              // bütün dilleri ekle
                              onChange={(e) => setLanguage1(e.target.value)}
                            >
                              <option style={{ color: 'black' }}>
                                Bahasa Indonesia
                              </option>
                              <option style={{ color: 'black' }}>
                                Bahasa Melayu
                              </option>
                              <option style={{ color: 'black' }}>Dansk</option>
                              <option style={{ color: 'black' }}>
                                Deutsch
                              </option>
                              <option style={{ color: 'black' }}>
                                English
                              </option>
                              <option style={{ color: 'black' }}>
                                Español
                              </option>
                              <option style={{ color: 'black' }}>
                                Français
                              </option>
                              <option style={{ color: 'black' }}>
                                Hrvatski
                              </option>
                              <option style={{ color: 'black' }}>
                                Italiano
                              </option>
                              <option style={{ color: 'black' }}>
                                Kiswahili
                              </option>
                              <option style={{ color: 'black' }}>Magyar</option>
                              <option style={{ color: 'black' }}>
                                Nederlands
                              </option>
                              <option style={{ color: 'black' }}>
                                Norsk bokmål
                              </option>
                              <option style={{ color: 'black' }}>Polski</option>
                              <option style={{ color: 'black' }}>
                                Português
                              </option>
                              <option style={{ color: 'black' }}>Românâ</option>
                              <option style={{ color: 'black' }}>Suomi</option>
                              <option style={{ color: 'black' }}>
                                Svenska
                              </option>
                              <option style={{ color: 'black' }}>
                                Tiéng Việt
                              </option>
                              <option style={{ color: 'black' }}>
                                Turkish
                              </option>
                              <option style={{ color: 'black' }}>
                                Čeština
                              </option>
                              {/*burda daha var onları yaz. */}
                            </Select>
                          </Flex>
                        </Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Maturity Settings:
                          </Text>
                          <Flex>
                            {kids1 ? (
                              <Box
                                bgColor="#303030"
                                borderRadius="1px"
                                w="max"
                                mt={2}
                                h="30px"
                                mr={2}
                              >
                                <Text
                                  fontSize="md"
                                  fontWeight="semibold"
                                  p="2px"
                                  pl={2}
                                  pr={2}
                                >
                                  Child
                                </Text>
                              </Box>
                            ) : null}
                            <Box
                              bgColor="#303030"
                              borderRadius="1px"
                              w="max"
                              mt={2}
                              h="30px"
                            >
                              <Text
                                fontSize="md"
                                fontWeight="semibold"
                                p="2px"
                                pl={2}
                                pr={2}
                              >
                                {ageLimit1}
                              </Text>
                            </Box>
                          </Flex>

                          {ageLimit1 == 'ALL MATURITY RATINGS' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Show titles of{' '}
                              <strong>all maturity ratings</strong> for this
                              profile
                            </Text>
                          ) : null}

                          {ageLimit1 == '16+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>16+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit1 == '13+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>13+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit1 == '7+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>7+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit1 == 'All' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated <strong>All</strong> for
                              this profile
                            </Text>
                          ) : null}

                          <Flex
                            justify="center"
                            align="center"
                            mt={5}
                            border="#808080 solid 1px"
                            bgColor="#141414"
                            color="#808080"
                            p={2}
                            w="82.63px"
                            h="31.66px"
                            cursor="pointer"
                            _hover={{ color: 'white', borderColor: 'white' }}
                            onClick={this.editProfileWithUserID}
                          >
                            <Text
                              fontSize="lg"
                              textAlign="center"
                              fontWeight="semibold"
                            >
                              EDIT
                            </Text>
                          </Flex>
                        </Box>
                        <Box m={2} ml={4} mt={0} pb={5} textAlign="left">
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Autoplay controls
                          </Text>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={autoplayNextEpisode1}
                            onChange={(e) =>
                              setAutoplayNextEpisode1(!autoplayNextEpisode1)
                            }
                            mt={2}
                            defaultChecked={autoplayNextEpisode1 ? true : false}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay next episode in a series on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={previews1}
                            onChange={(e) => setPreviews1(!previews1)}
                            mt={1}
                            defaultChecked={previews1 ? true : false}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay previews whiles browsing on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                        </Box>
                      </Box>
                    </Flex>

                    <Flex align="center" ml={2}>
                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        bgColor="white"
                        color="black"
                        p={2}
                        onClick={this.changeToProfileNameForm}
                        w="101.73px"
                        h="37.38px"
                        cursor="pointer"
                        _hover={{ color: 'white', bgColor: '#cb0000' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          SAVE
                        </Text>
                      </Flex>

                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        border="#808080 solid 1px"
                        bgColor="#141414"
                        color="#808080"
                        p={2}
                        w="130.58px"
                        h="37.38px"
                        onClick={() => setManageProfileState(false)}
                        cursor="pointer"
                        _hover={{ color: 'white', borderColor: 'white' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          CANCEL
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ) : null}
                {clickProfileIndex == '1' ? (
                  <Flex justify="center" direction="column" mb={5}>
                    <Flex
                      justify="center"
                      mt={5}
                      ml={2}
                      borderBottom="solid #333333 1px"
                    >
                      <Flex>
                        <Flex
                          justify="flex-start"
                          align="flex-end"
                          width="109.27px"
                          height="109.27px"
                          mb={2}
                          p={2}
                          bgAttachment="scroll"
                          bgSize="cover"
                          bgRepeat="no-repeat"
                          bgImage={profileImageUrl2}
                        >
                          <Box
                            borderRadius="full"
                            cursor="pointer"
                            border="white solid 1px"
                            p={1}
                          >
                            <RiPencilFill color="white" size="15px" />
                          </Box>
                        </Flex>
                      </Flex>
                      <Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          textAlign="left"
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Input
                            type="text"
                            h="35.52px"
                            w="319.64px"
                            name="code"
                            borderRadius="none"
                            borderColor="#666666"
                            placeholder="Name"
                            value={u2}
                            onChange={(e) =>
                              this.setState({ u2: e.target.value })
                            }
                            _placeholder={{ fontSize: '14px', color: '#ccc' }}
                            _active={{ bgColor: '#666666' }}
                            _hover={{ bgColor: '#666666' }}
                            _focus={{ bgColor: '#666666' }}
                            errorBorderColor="red"
                            isRequired
                            bgColor="#666666"
                            size="lg"
                          />
                          <Flex mt={3} direction="column">
                            <Text
                              mb={2}
                              fontSize="lg"
                              color="#cccccc"
                              textAlign="left"
                            >
                              Language:
                            </Text>
                            <Select
                              w="max"
                              h="25.61px"
                              borderRadius="none"
                              variant="outline"
                              borderColor="white"
                              bgColor="black"
                              _hover={{ bgColor: '#2b2b2b' }}
                              defaultValue={language2}
                              // bütün dilleri ekle
                              onChange={(e) => setLanguage2(e.target.value)}
                            >
                              <option style={{ color: 'black' }}>
                                Bahasa Indonesia
                              </option>
                              <option style={{ color: 'black' }}>
                                Bahasa Melayu
                              </option>
                              <option style={{ color: 'black' }}>Dansk</option>
                              <option style={{ color: 'black' }}>
                                Deutsch
                              </option>
                              <option style={{ color: 'black' }}>
                                English
                              </option>
                              <option style={{ color: 'black' }}>
                                Español
                              </option>
                              <option style={{ color: 'black' }}>
                                Français
                              </option>
                              <option style={{ color: 'black' }}>
                                Hrvatski
                              </option>
                              <option style={{ color: 'black' }}>
                                Italiano
                              </option>
                              <option style={{ color: 'black' }}>
                                Kiswahili
                              </option>
                              <option style={{ color: 'black' }}>Magyar</option>
                              <option style={{ color: 'black' }}>
                                Nederlands
                              </option>
                              <option style={{ color: 'black' }}>
                                Norsk bokmål
                              </option>
                              <option style={{ color: 'black' }}>Polski</option>
                              <option style={{ color: 'black' }}>
                                Português
                              </option>
                              <option style={{ color: 'black' }}>Românâ</option>
                              <option style={{ color: 'black' }}>Suomi</option>
                              <option style={{ color: 'black' }}>
                                Svenska
                              </option>
                              <option style={{ color: 'black' }}>
                                Tiéng Việt
                              </option>
                              <option style={{ color: 'black' }}>
                                Turkish
                              </option>
                              <option style={{ color: 'black' }}>
                                Čeština
                              </option>
                              {/*burda daha var onları yaz. */}
                            </Select>
                          </Flex>
                        </Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Maturity Settings:
                          </Text>

                          <Flex>
                            {kids2 ? (
                              <Box
                                bgColor="#303030"
                                borderRadius="1px"
                                w="max"
                                mt={2}
                                h="30px"
                                mr={2}
                              >
                                <Text
                                  fontSize="md"
                                  fontWeight="semibold"
                                  p="2px"
                                  pl={2}
                                  pr={2}
                                >
                                  Child
                                </Text>
                              </Box>
                            ) : null}
                            <Box
                              bgColor="#303030"
                              borderRadius="1px"
                              w="max"
                              mt={2}
                              h="30px"
                            >
                              <Text
                                fontSize="md"
                                fontWeight="semibold"
                                p="2px"
                                pl={2}
                                pr={2}
                              >
                                {ageLimit2}
                              </Text>
                            </Box>
                          </Flex>
                          {ageLimit2 == 'ALL MATURITY RATINGS' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Show titles of{' '}
                              <strong>all maturity ratings</strong> for this
                              profile
                            </Text>
                          ) : null}

                          {ageLimit2 == '16+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>16+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit2 == '13+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>13+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit2 == '7+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>7+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit2 == 'All' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated <strong>All</strong> for
                              this profile
                            </Text>
                          ) : null}

                          <Flex
                            justify="center"
                            align="center"
                            mt={5}
                            border="#808080 solid 1px"
                            bgColor="#141414"
                            color="#808080"
                            p={2}
                            w="82.63px"
                            h="31.66px"
                            cursor="pointer"
                            _hover={{ color: 'white', borderColor: 'white' }}
                            onClick={this.editProfileWithUserID}
                          >
                            <Text
                              fontSize="lg"
                              textAlign="center"
                              fontWeight="semibold"
                            >
                              EDIT
                            </Text>
                          </Flex>
                        </Box>
                        <Box m={2} ml={4} mt={0} pb={5} textAlign="left">
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Autoplay controls
                          </Text>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={autoplayNextEpisode2}
                            onChange={(e) =>
                              setAutoplayNextEpisode2(!autoplayNextEpisode2)
                            }
                            defaultChecked={autoplayNextEpisode2 ? true : false}
                            mt={2}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay next episode in a series on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={previews2}
                            defaultChecked={previews2 ? true : false}
                            onChange={(e) => setPreviews2(!previews2)}
                            mt={1}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay previews whiles browsing on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                        </Box>
                      </Box>
                    </Flex>

                    <Flex align="center" ml={2}>
                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        bgColor="white"
                        color="black"
                        p={2}
                        onClick={this.changeToProfileNameForm}
                        w="101.73px"
                        h="37.38px"
                        cursor="pointer"
                        _hover={{ color: 'white', bgColor: '#cb0000' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          SAVE
                        </Text>
                      </Flex>

                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        border="#808080 solid 1px"
                        bgColor="#141414"
                        color="#808080"
                        p={2}
                        w="130.58px"
                        h="37.38px"
                        cursor="pointer"
                        onClick={() => setManageProfileState(false)}
                        _hover={{ color: 'white', borderColor: 'white' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          CANCEL
                        </Text>
                      </Flex>
                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        border="#808080 solid 1px"
                        bgColor="#141414"
                        color="#808080"
                        p={2}
                        w="214.14px"
                        h="37.38px"
                        onClick={() =>
                          this.deletePageForm('1', profileImageUrl2, u2)
                        }
                        cursor="pointer"
                        _hover={{ color: 'white', borderColor: 'white' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          DELETE PROFILE
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ) : null}
                {clickProfileIndex == '2' ? (
                  <Flex justify="center" direction="column" mb={5}>
                    <Flex
                      justify="center"
                      mt={5}
                      ml={2}
                      borderBottom="solid #333333 1px"
                    >
                      <Flex>
                        <Flex
                          justify="flex-start"
                          align="flex-end"
                          width="109.27px"
                          height="109.27px"
                          mb={2}
                          p={2}
                          bgAttachment="scroll"
                          bgSize="cover"
                          bgRepeat="no-repeat"
                          bgImage={profileImageUrl3}
                        >
                          <Box
                            borderRadius="full"
                            cursor="pointer"
                            border="white solid 1px"
                            p={1}
                          >
                            <RiPencilFill color="white" size="15px" />
                          </Box>
                        </Flex>
                      </Flex>
                      <Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          textAlign="left"
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Input
                            type="text"
                            h="35.52px"
                            w="319.64px"
                            name="code"
                            borderRadius="none"
                            borderColor="#666666"
                            placeholder="Name"
                            value={u3}
                            onChange={(e) =>
                              this.setState({ u3: e.target.value })
                            }
                            _placeholder={{ fontSize: '14px', color: '#ccc' }}
                            _active={{ bgColor: '#666666' }}
                            _hover={{ bgColor: '#666666' }}
                            _focus={{ bgColor: '#666666' }}
                            errorBorderColor="red"
                            isRequired
                            bgColor="#666666"
                            size="lg"
                          />
                          <Flex mt={3} direction="column">
                            <Text
                              mb={2}
                              fontSize="lg"
                              color="#cccccc"
                              textAlign="left"
                            >
                              Language:
                            </Text>
                            <Select
                              w="max"
                              h="25.61px"
                              borderRadius="none"
                              variant="outline"
                              borderColor="white"
                              bgColor="black"
                              _hover={{ bgColor: '#2b2b2b' }}
                              defaultValue={language3}
                              // bütün dilleri ekle
                              onChange={(e) => setLanguage3(e.target.value)}
                            >
                              <option style={{ color: 'black' }}>
                                Bahasa Indonesia
                              </option>
                              <option style={{ color: 'black' }}>
                                Bahasa Melayu
                              </option>
                              <option style={{ color: 'black' }}>Dansk</option>
                              <option style={{ color: 'black' }}>
                                Deutsch
                              </option>
                              <option style={{ color: 'black' }}>
                                English
                              </option>
                              <option style={{ color: 'black' }}>
                                Español
                              </option>
                              <option style={{ color: 'black' }}>
                                Français
                              </option>
                              <option style={{ color: 'black' }}>
                                Hrvatski
                              </option>
                              <option style={{ color: 'black' }}>
                                Italiano
                              </option>
                              <option style={{ color: 'black' }}>
                                Kiswahili
                              </option>
                              <option style={{ color: 'black' }}>Magyar</option>
                              <option style={{ color: 'black' }}>
                                Nederlands
                              </option>
                              <option style={{ color: 'black' }}>
                                Norsk bokmål
                              </option>
                              <option style={{ color: 'black' }}>Polski</option>
                              <option style={{ color: 'black' }}>
                                Português
                              </option>
                              <option style={{ color: 'black' }}>Românâ</option>
                              <option style={{ color: 'black' }}>Suomi</option>
                              <option style={{ color: 'black' }}>
                                Svenska
                              </option>
                              <option style={{ color: 'black' }}>
                                Tiéng Việt
                              </option>
                              <option style={{ color: 'black' }}>
                                Turkish
                              </option>
                              <option style={{ color: 'black' }}>
                                Čeština
                              </option>
                              {/*burda daha var onları yaz. */}
                            </Select>
                          </Flex>
                        </Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Maturity Settings:
                          </Text>
                          <Flex>
                            {kids3 ? (
                              <Box
                                bgColor="#303030"
                                borderRadius="1px"
                                w="max"
                                mt={2}
                                h="30px"
                                mr={2}
                              >
                                <Text
                                  fontSize="md"
                                  fontWeight="semibold"
                                  p="2px"
                                  pl={2}
                                  pr={2}
                                >
                                  Child
                                </Text>
                              </Box>
                            ) : null}
                            <Box
                              bgColor="#303030"
                              borderRadius="1px"
                              w="max"
                              mt={2}
                              h="30px"
                            >
                              <Text
                                fontSize="md"
                                fontWeight="semibold"
                                p="2px"
                                pl={2}
                                pr={2}
                              >
                                {ageLimit3}
                              </Text>
                            </Box>
                          </Flex>
                          {ageLimit3 == 'ALL MATURITY RATINGS' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Show titles of{' '}
                              <strong>all maturity ratings</strong> for this
                              profile
                            </Text>
                          ) : null}

                          {ageLimit3 == '16+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>16+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit3 == '13+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>13+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit3 == '7+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>7+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit3 == 'All' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated <strong>All</strong> for
                              this profile
                            </Text>
                          ) : null}

                          <Flex
                            justify="center"
                            align="center"
                            mt={5}
                            border="#808080 solid 1px"
                            bgColor="#141414"
                            color="#808080"
                            p={2}
                            w="82.63px"
                            h="31.66px"
                            cursor="pointer"
                            _hover={{ color: 'white', borderColor: 'white' }}
                            onClick={this.editProfileWithUserID}
                          >
                            <Text
                              fontSize="lg"
                              textAlign="center"
                              fontWeight="semibold"
                            >
                              EDIT
                            </Text>
                          </Flex>
                        </Box>
                        <Box m={2} ml={4} mt={0} pb={5} textAlign="left">
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Autoplay controls
                          </Text>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={autoplayNextEpisode3}
                            defaultChecked={autoplayNextEpisode3 ? true : false}
                            onChange={(e) =>
                              setAutoplayNextEpisode3(!autoplayNextEpisode3)
                            }
                            mt={2}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay next episode in a series on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={previews3}
                            onChange={(e) => setPreviews3(!previews3)}
                            defaultChecked={previews3 ? true : false}
                            mt={1}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay previews whiles browsing on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                        </Box>
                      </Box>
                    </Flex>

                    <Flex align="center" ml={2}>
                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        bgColor="white"
                        color="black"
                        p={2}
                        w="101.73px"
                        onClick={this.changeToProfileNameForm}
                        h="37.38px"
                        cursor="pointer"
                        _hover={{ color: 'white', bgColor: '#cb0000' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          SAVE
                        </Text>
                      </Flex>

                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        border="#808080 solid 1px"
                        bgColor="#141414"
                        color="#808080"
                        p={2}
                        w="130.58px"
                        h="37.38px"
                        onClick={() => setManageProfileState(false)}
                        cursor="pointer"
                        _hover={{ color: 'white', borderColor: 'white' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          CANCEL
                        </Text>
                      </Flex>
                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        border="#808080 solid 1px"
                        bgColor="#141414"
                        color="#808080"
                        p={2}
                        w="214.14px"
                        onClick={() =>
                          this.deletePageForm('2', profileImageUrl3, u3)
                        }
                        h="37.38px"
                        cursor="pointer"
                        _hover={{ color: 'white', borderColor: 'white' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          DELETE PROFILE
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ) : null}
                {clickProfileIndex == '3' ? (
                  <Flex justify="center" direction="column" mb={5}>
                    <Flex
                      justify="center"
                      mt={5}
                      ml={2}
                      borderBottom="solid #333333 1px"
                    >
                      <Flex>
                        <Flex
                          justify="flex-start"
                          align="flex-end"
                          width="109.27px"
                          height="109.27px"
                          mb={2}
                          p={2}
                          bgAttachment="scroll"
                          bgSize="cover"
                          bgRepeat="no-repeat"
                          bgImage={profileImageUrl4}
                        >
                          <Box
                            borderRadius="full"
                            cursor="pointer"
                            border="white solid 1px"
                            p={1}
                          >
                            <RiPencilFill color="white" size="15px" />
                          </Box>
                        </Flex>
                      </Flex>
                      <Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          textAlign="left"
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Input
                            type="text"
                            h="35.52px"
                            w="319.64px"
                            name="code"
                            borderRadius="none"
                            borderColor="#666666"
                            placeholder="Name"
                            value={u4}
                            onChange={(e) =>
                              this.setState({ u4: e.target.value })
                            }
                            _placeholder={{ fontSize: '14px', color: '#ccc' }}
                            _active={{ bgColor: '#666666' }}
                            _hover={{ bgColor: '#666666' }}
                            _focus={{ bgColor: '#666666' }}
                            errorBorderColor="red"
                            isRequired
                            bgColor="#666666"
                            size="lg"
                          />
                          <Flex mt={3} direction="column">
                            <Text
                              mb={2}
                              fontSize="lg"
                              color="#cccccc"
                              textAlign="left"
                            >
                              Language:
                            </Text>
                            <Select
                              w="max"
                              h="25.61px"
                              borderRadius="none"
                              variant="outline"
                              borderColor="white"
                              bgColor="black"
                              _hover={{ bgColor: '#2b2b2b' }}
                              defaultValue={language4}
                              // bütün dilleri ekle
                              onChange={(e) => setLanguage4(e.target.value)}
                            >
                              <option style={{ color: 'black' }}>
                                Bahasa Indonesia
                              </option>
                              <option style={{ color: 'black' }}>
                                Bahasa Melayu
                              </option>
                              <option style={{ color: 'black' }}>Dansk</option>
                              <option style={{ color: 'black' }}>
                                Deutsch
                              </option>
                              <option style={{ color: 'black' }}>
                                English
                              </option>
                              <option style={{ color: 'black' }}>
                                Español
                              </option>
                              <option style={{ color: 'black' }}>
                                Français
                              </option>
                              <option style={{ color: 'black' }}>
                                Hrvatski
                              </option>
                              <option style={{ color: 'black' }}>
                                Italiano
                              </option>
                              <option style={{ color: 'black' }}>
                                Kiswahili
                              </option>
                              <option style={{ color: 'black' }}>Magyar</option>
                              <option style={{ color: 'black' }}>
                                Nederlands
                              </option>
                              <option style={{ color: 'black' }}>
                                Norsk bokmål
                              </option>
                              <option style={{ color: 'black' }}>Polski</option>
                              <option style={{ color: 'black' }}>
                                Português
                              </option>
                              <option style={{ color: 'black' }}>Românâ</option>
                              <option style={{ color: 'black' }}>Suomi</option>
                              <option style={{ color: 'black' }}>
                                Svenska
                              </option>
                              <option style={{ color: 'black' }}>
                                Tiéng Việt
                              </option>
                              <option style={{ color: 'black' }}>
                                Turkish
                              </option>
                              <option style={{ color: 'black' }}>
                                Čeština
                              </option>
                              {/*burda daha var onları yaz. */}
                            </Select>
                          </Flex>
                        </Box>
                        <Box
                          m={2}
                          ml={4}
                          mt={0}
                          borderBottom="solid #333333 1px"
                          pb={5}
                        >
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Maturity Settings:
                          </Text>
                          <Flex>
                            {kids4 ? (
                              <Box
                                bgColor="#303030"
                                borderRadius="1px"
                                w="max"
                                mt={2}
                                h="30px"
                                mr={2}
                              >
                                <Text
                                  fontSize="md"
                                  fontWeight="semibold"
                                  p="2px"
                                  pl={2}
                                  pr={2}
                                >
                                  Child
                                </Text>
                              </Box>
                            ) : null}
                            <Box
                              bgColor="#303030"
                              borderRadius="1px"
                              w="max"
                              mt={2}
                              h="30px"
                            >
                              <Text
                                fontSize="md"
                                fontWeight="semibold"
                                p="2px"
                                pl={2}
                                pr={2}
                              >
                                {ageLimit4}
                              </Text>
                            </Box>
                          </Flex>
                          {ageLimit4 == 'ALL MATURITY RATINGS' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Show titles of{' '}
                              <strong>all maturity ratings</strong> for this
                              profile
                            </Text>
                          ) : null}

                          {ageLimit4 == '16+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>16+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit4 == '13+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>13+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit4 == '7+' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated{' '}
                              <strong>7+ and below</strong> for this profile
                            </Text>
                          ) : null}
                          {ageLimit4 == 'All' ? (
                            <Text fontSize="sm" textAlign="left" mt={2}>
                              Only show titles rated <strong>All</strong> for
                              this profile
                            </Text>
                          ) : null}

                          <Flex
                            justify="center"
                            align="center"
                            mt={5}
                            border="#808080 solid 1px"
                            bgColor="#141414"
                            color="#808080"
                            p={2}
                            w="82.63px"
                            h="31.66px"
                            cursor="pointer"
                            _hover={{ color: 'white', borderColor: 'white' }}
                            onClick={this.editProfileWithUserID}
                          >
                            <Text
                              fontSize="lg"
                              textAlign="center"
                              fontWeight="semibold"
                            >
                              EDIT
                            </Text>
                          </Flex>
                        </Box>
                        <Box m={2} ml={4} mt={0} pb={5} textAlign="left">
                          <Text fontSize="lg" textAlign="left" color="#ccc">
                            Autoplay controls
                          </Text>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={autoplayNextEpisode4}
                            onChange={(e) =>
                              setAutoplayNextEpisode4(!autoplayNextEpisode4)
                            }
                            defaultChecked={autoplayNextEpisode4 ? true : false}
                            mt={2}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay next episode in a series on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                          <Checkbox
                            size="lg"
                            colorScheme="gray"
                            value={previews4}
                            onChange={(e) => setPreviews4(!previews4)}
                            mt={1}
                            defaultChecked={previews4 ? true : false}
                          >
                            <Flex align="center">
                              <Text fontSize="sm" mb="3px">
                                Autoplay previews whiles browsing on all
                                devices.
                              </Text>
                            </Flex>
                          </Checkbox>
                        </Box>
                      </Box>
                    </Flex>

                    <Flex align="center" ml={2}>
                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        bgColor="white"
                        color="black"
                        p={2}
                        onClick={this.changeToProfileNameForm}
                        w="101.73px"
                        h="37.38px"
                        cursor="pointer"
                        _hover={{ color: 'white', bgColor: '#cb0000' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          SAVE
                        </Text>
                      </Flex>

                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        border="#808080 solid 1px"
                        bgColor="#141414"
                        color="#808080"
                        p={2}
                        onClick={() => setManageProfileState(false)}
                        w="130.58px"
                        h="37.38px"
                        cursor="pointer"
                        _hover={{ color: 'white', borderColor: 'white' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          CANCEL
                        </Text>
                      </Flex>
                      <Flex
                        justify="center"
                        align="center"
                        mt={5}
                        mr={4}
                        border="#808080 solid 1px"
                        bgColor="#141414"
                        color="#808080"
                        p={2}
                        onClick={() =>
                          this.deletePageForm('3', profileImageUrl4, u4)
                        }
                        w="214.14px"
                        h="37.38px"
                        cursor="pointer"
                        _hover={{ color: 'white', borderColor: 'white' }}
                      >
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          DELETE PROFILE
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ) : null}

                {getChildFromUserData.getChildFromUser.child ? (
                  <Box>
                    {clickProfileIndex == 'Child' ? (
                      <Flex justify="center" direction="column" mb={5}>
                        <Flex
                          justify="center"
                          mt={5}
                          ml={2}
                          borderBottom="solid #333333 1px"
                        >
                          <Flex>
                            <Flex
                              justify="flex-start"
                              align="flex-end"
                              width="109.27px"
                              height="109.27px"
                              mb={2}
                              p={2}
                              bgAttachment="scroll"
                              bgSize="cover"
                              bgRepeat="no-repeat"
                              bgImage={profileImageUrl5}
                            >
                              <Box
                                borderRadius="full"
                                cursor="pointer"
                                border="white solid 1px"
                                p={1}
                              >
                                <RiPencilFill color="white" size="15px" />
                              </Box>
                            </Flex>
                          </Flex>
                          <Box>
                            <Box
                              m={2}
                              ml={4}
                              mt={0}
                              textAlign="left"
                              borderBottom="solid #333333 1px"
                              pb={5}
                            >
                              <Input
                                type="text"
                                h="35.52px"
                                w="319.64px"
                                name="code"
                                borderRadius="none"
                                borderColor="#666666"
                                placeholder="Name"
                                value={u5}
                                onChange={(e) => setU5(e.target.value)}
                                _placeholder={{
                                  fontSize: '14px',
                                  color: '#ccc',
                                }}
                                _active={{ bgColor: '#666666' }}
                                _hover={{ bgColor: '#666666' }}
                                _focus={{ bgColor: '#666666' }}
                                errorBorderColor="red"
                                isRequired
                                bgColor="#666666"
                                size="lg"
                              />
                              <Flex mt={3} direction="column">
                                <Text
                                  mb={2}
                                  fontSize="lg"
                                  color="#cccccc"
                                  textAlign="left"
                                >
                                  Language:
                                </Text>
                                <Select
                                  w="max"
                                  h="25.61px"
                                  borderRadius="none"
                                  variant="outline"
                                  borderColor="white"
                                  bgColor="black"
                                  _hover={{ bgColor: '#2b2b2b' }}
                                  defaultValue={language5}
                                  // bütün dilleri ekle
                                  onChange={(e) => setLanguage5(e.target.value)}
                                >
                                  <option style={{ color: 'black' }}>
                                    Bahasa Indonesia
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Bahasa Melayu
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Dansk
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Deutsch
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    English
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Español
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Français
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Hrvatski
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Italiano
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Kiswahili
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Magyar
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Nederlands
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Norsk bokmål
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Polski
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Português
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Românâ
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Suomi
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Svenska
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Tiéng Việt
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Turkish
                                  </option>
                                  <option style={{ color: 'black' }}>
                                    Čeština
                                  </option>
                                  {/*burda daha var onları yaz. */}
                                </Select>
                              </Flex>
                            </Box>
                            <Box
                              m={2}
                              ml={4}
                              mt={0}
                              borderBottom="solid #333333 1px"
                              pb={5}
                            >
                              <Text fontSize="lg" textAlign="left" color="#ccc">
                                Maturity Settings:
                              </Text>
                              <Flex>
                                {kids5 ? (
                                  <Box
                                    bgColor="#303030"
                                    borderRadius="1px"
                                    w="max"
                                    mt={2}
                                    h="30px"
                                    mr={2}
                                  >
                                    <Text
                                      fontSize="md"
                                      fontWeight="semibold"
                                      p="2px"
                                      pl={2}
                                      pr={2}
                                    >
                                      Child
                                    </Text>
                                  </Box>
                                ) : null}
                                <Box
                                  bgColor="#303030"
                                  borderRadius="1px"
                                  w="max"
                                  mt={2}
                                  h="30px"
                                >
                                  <Text
                                    fontSize="md"
                                    fontWeight="semibold"
                                    p="2px"
                                    pl={2}
                                    pr={2}
                                  >
                                    {ageLimit5}
                                  </Text>
                                </Box>
                              </Flex>

                              {ageLimit5 == '7+' ? (
                                <Text fontSize="sm" textAlign="left" mt={2}>
                                  Only show titles rated{' '}
                                  <strong>7+ and below</strong> for this profile
                                </Text>
                              ) : null}
                              {ageLimit5 == 'All' ? (
                                <Text fontSize="sm" textAlign="left" mt={2}>
                                  Only show titles rated <strong>All</strong>{' '}
                                  for this profile
                                </Text>
                              ) : null}

                              <Flex
                                justify="center"
                                align="center"
                                mt={5}
                                border="#808080 solid 1px"
                                bgColor="#141414"
                                color="#808080"
                                p={2}
                                w="82.63px"
                                h="31.66px"
                                cursor="pointer"
                                _hover={{
                                  color: 'white',
                                  borderColor: 'white',
                                }}
                                onClick={this.editProfileWithUserID}
                              >
                                <Text
                                  fontSize="lg"
                                  textAlign="center"
                                  fontWeight="semibold"
                                >
                                  EDIT
                                </Text>
                              </Flex>
                            </Box>
                            <Box m={2} ml={4} mt={0} pb={5} textAlign="left">
                              <Text fontSize="lg" textAlign="left" color="#ccc">
                                Autoplay controls
                              </Text>
                              <Checkbox
                                size="lg"
                                colorScheme="gray"
                                value={autoplayNextEpisode5}
                                onChange={(e) =>
                                  setAutoplayNextEpisode5(!autoplayNextEpisode5)
                                }
                                defaultChecked={
                                  autoplayNextEpisode5 ? true : false
                                }
                                mt={2}
                              >
                                <Flex align="center">
                                  <Text fontSize="sm" mb="3px">
                                    Autoplay next episode in a series on all
                                    devices.
                                  </Text>
                                </Flex>
                              </Checkbox>
                              <Checkbox
                                size="lg"
                                colorScheme="gray"
                                value={previews5}
                                onChange={(e) => setPreviews5(!previews5)}
                                defaultChecked={previews5 ? true : false}
                                mt={1}
                              >
                                <Flex align="center">
                                  <Text fontSize="sm" mb="3px">
                                    Autoplay previews whiles browsing on all
                                    devices.
                                  </Text>
                                </Flex>
                              </Checkbox>
                            </Box>
                          </Box>
                        </Flex>

                        <Flex align="center" ml={2}>
                          <Flex
                            justify="center"
                            align="center"
                            mt={5}
                            mr={4}
                            bgColor="white"
                            color="black"
                            p={2}
                            w="101.73px"
                            onClick={this.changeChildFromUserFunc}
                            h="37.38px"
                            cursor="pointer"
                            _hover={{ color: 'white', bgColor: '#cb0000' }}
                          >
                            <Text
                              fontSize="lg"
                              textAlign="center"
                              fontWeight="semibold"
                            >
                              SAVE
                            </Text>
                          </Flex>

                          <Flex
                            justify="center"
                            align="center"
                            mt={5}
                            mr={4}
                            border="#808080 solid 1px"
                            bgColor="#141414"
                            color="#808080"
                            p={2}
                            w="130.58px"
                            h="37.38px"
                            onClick={() => setManageProfileState(false)}
                            cursor="pointer"
                            _hover={{ color: 'white', borderColor: 'white' }}
                          >
                            <Text
                              fontSize="lg"
                              textAlign="center"
                              fontWeight="semibold"
                            >
                              CANCEL
                            </Text>
                          </Flex>
                          <Flex
                            justify="center"
                            align="center"
                            mt={5}
                            mr={4}
                            border="#808080 solid 1px"
                            bgColor="#141414"
                            color="#808080"
                            onClick={() =>
                              this.deletePageForm('Child', profileImageUrl5, u5)
                            }
                            p={2}
                            w="214.14px"
                            h="37.38px"
                            cursor="pointer"
                            _hover={{ color: 'white', borderColor: 'white' }}
                          >
                            <Text
                              fontSize="lg"
                              textAlign="center"
                              fontWeight="semibold"
                            >
                              DELETE PROFILE
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    ) : null}
                  </Box>
                ) : null}
              </Flex>
            </Container>
          </Flex>
        ) : (
          <Flex justify="center" align="center">
            <Container maxW="5xl" color="white" textAlign="center">
              <Text fontSize="5xl" fontWeight="semibold">
                Manage Profiles:
              </Text>

              <Flex justify="center" m={3}>
                <Flex>
                  {profileCount >= 1 ? (
                    <Flex
                      direction="column"
                      cursor="pointer"
                      justify="center"
                      align="center"
                      onMouseEnter={(e) => {
                        setUser1('#dadada');
                        setUserBorderState1(true);
                      }}
                      onMouseLeave={(e) => {
                        setUser1('#808080');
                        setUserBorderState1(false);
                      }}
                      m={2}
                    >
                      <Flex
                        justify="center"
                        align="center"
                        width="136.59px"
                        height="136.59px"
                        border={userBorderState1 ? '2px white solid' : null}
                        mb={2}
                        bgAttachment="scroll"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        onClick={() => {
                          setManageProfileState(true);
                          setClickProfileIndex('0');
                        }}
                        bgImage={profileImageUrl1}
                      >
                        <Box borderRadius="full" border="white solid 1px" p={2}>
                          <RiPencilFill color="white" size="25px" />
                        </Box>
                      </Flex>
                      <Text fontSize="lg" fontWeight="semibold" color={user1}>
                        {profiles[0].profileName}
                      </Text>
                    </Flex>
                  ) : null}
                  {profileCount >= 2 ? (
                    <Flex
                      direction="column"
                      cursor="pointer"
                      justify="center"
                      align="center"
                      onMouseEnter={(e) => {
                        setUser2('#dadada');
                        setUserBorderState2(true);
                      }}
                      onMouseLeave={(e) => {
                        setUser2('#808080');
                        setUserBorderState2(false);
                      }}
                      m={2}
                    >
                      <Flex
                        justify="center"
                        align="center"
                        width="136.59px"
                        height="136.59px"
                        border={userBorderState2 ? '2px white solid' : null}
                        mb={2}
                        onClick={() => {
                          setManageProfileState(true);
                          setClickProfileIndex('1');
                        }}
                        bgAttachment="scroll"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        bgImage={profileImageUrl2}
                      >
                        <Box borderRadius="full" border="white solid 1px" p={2}>
                          <RiPencilFill color="white" size="25px" />
                        </Box>
                      </Flex>

                      <Text fontSize="lg" fontWeight="semibold" color={user2}>
                        {profiles[1].profileName}
                      </Text>
                    </Flex>
                  ) : null}
                  {profileCount >= 3 ? (
                    <Flex
                      direction="column"
                      cursor="pointer"
                      justify="center"
                      align="center"
                      onMouseEnter={(e) => {
                        setUser3('#dadada');
                        setUserBorderState3(true);
                      }}
                      onMouseLeave={(e) => {
                        setUser3('#808080');
                        setUserBorderState3(false);
                      }}
                      m={2}
                    >
                      <Flex
                        justify="center"
                        align="center"
                        width="136.59px"
                        height="136.59px"
                        border={userBorderState3 ? '2px white solid' : null}
                        mb={2}
                        onClick={() => {
                          setManageProfileState(true);
                          setClickProfileIndex('2');
                        }}
                        bgAttachment="scroll"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        bgImage={profileImageUrl3}
                      >
                        <Box borderRadius="full" border="white solid 1px" p={2}>
                          <RiPencilFill color="white" size="25px" />
                        </Box>
                      </Flex>

                      <Text fontSize="lg" fontWeight="semibold" color={user3}>
                        {profiles[2].profileName}
                      </Text>
                    </Flex>
                  ) : null}
                  {profileCount >= 4 ? (
                    <Flex
                      direction="column"
                      cursor="pointer"
                      justify="center"
                      align="center"
                      onMouseEnter={(e) => {
                        setUser4('#dadada');
                        setUserBorderState4(true);
                      }}
                      onMouseLeave={(e) => {
                        setUser4('#808080');
                        setUserBorderState4(false);
                      }}
                      m={2}
                    >
                      <Flex
                        justify="center"
                        align="center"
                        width="136.59px"
                        height="136.59px"
                        border={userBorderState4 ? '2px white solid' : null}
                        mb={2}
                        onClick={() => {
                          setManageProfileState(true);
                          setClickProfileIndex('3');
                        }}
                        bgAttachment="scroll"
                        bgSize="cover"
                        bgRepeat="no-repeat"
                        bgImage={profileImageUrl4}
                      >
                        <Box borderRadius="full" border="white solid 1px" p={2}>
                          <RiPencilFill color="white" size="25px" />
                        </Box>
                      </Flex>

                      <Text fontSize="lg" fontWeight="semibold" color={user4}>
                        {profiles[3].profileName}
                      </Text>
                    </Flex>
                  ) : null}
                </Flex>

                {getChildFromUserData.getChildFromUser.child ? (
                  <Flex
                    direction="column"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    onMouseEnter={(e) => {
                      setChildColor('#dadada');
                      setBorderState(true);
                    }}
                    onMouseLeave={(e) => {
                      setChildColor('#808080');
                      setBorderState(false);
                    }}
                    m={2}
                  >
                    <Flex
                      justify="center"
                      align="center"
                      bgAttachment="scroll"
                      bgSize="cover"
                      border={borderState ? '2px white solid' : null}
                      bgRepeat="no-repeat"
                      bgImage={
                        getChildFromUserData.getChildFromUser.child
                          .childImageUrl
                      }
                      width="136.59px"
                      onClick={() => {
                        setManageProfileState(true);
                        setClickProfileIndex('Child');
                      }}
                      height="136.59px"
                      mb={2}
                    >
                      <Box borderRadius="full" border="white solid 1px" p={2}>
                        <RiPencilFill color="white" size="25px" />
                      </Box>
                    </Flex>

                    <Text
                      fontSize="lg"
                      fontWeight="semibold"
                      color={childColor}
                    >
                      {getChildFromUserData.getChildFromUser.child.childName}
                    </Text>
                  </Flex>
                ) : null}
                {profileCount < 4 ? (
                  <Flex
                    onClick={(e) => {
                      setSelectProfileState(false);
                      setAddProfileState(true);
                    }}
                    justify="center"
                    align="center"
                    m={2}
                    borderRadius="2px"
                    as="div"
                    cursor="pointer"
                    bgColor={add1Color}
                    onMouseEnter={(e) => {
                      setAdd1Color('#e3e3e3');
                      setAdd2Color('#737373');
                      setAdd3Color('#e3e3e3');
                    }}
                    onMouseLeave={(e) => {
                      setAdd1Color('#141414');
                      setAdd2Color('#646464');
                      setAdd3Color('#141414');
                    }}
                    w="136.59px"
                    h="136.59px"
                  >
                    <Box as="div">
                      <Box
                        as="div"
                        borderRadius="full"
                        bgColor={add2Color}
                        w="min"
                      >
                        <AddIcon color={add3Color} w="68px" h="68px" p={3} />
                      </Box>
                    </Box>
                  </Flex>
                ) : null}
              </Flex>

              <Flex direction="column" justify="center" align="center">
                <Flex
                  justify="center"
                  align="center"
                  m={10}
                  bgColor="white"
                  color="black"
                  p={2}
                  w="123.08px"
                  h="37.38px"
                  pt="8.196px"
                  pb="8.196px"
                  pl="24.588px"
                  pr="24.588px"
                  cursor="pointer"
                  _hover={{ color: 'white', bgColor: '#cb0000' }}
                  onClick={async () => {
                    await deleteClickProfileFromLocal();
                    await deleteClickProfileIndexFromLocal();
                    router.push('/browse');
                  }}
                >
                  <Text fontSize="lg" textAlign="center" fontWeight="semibold">
                    TAMAM
                  </Text>
                </Flex>
              </Flex>
            </Container>
          </Flex>
        )}
      </Box>
    );
  }
}

export default ManageProfilesComponent;
