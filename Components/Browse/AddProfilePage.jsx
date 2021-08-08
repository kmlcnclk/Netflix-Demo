import React, { Component } from 'react';
import {
  Box,
  Flex,
  Container,
  Text,
  Input,
  Checkbox,
  Tooltip,
  Button,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import NextImage from 'next/image';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';

class AddProfilePage extends Component {
  state = {
    profileImageUrl: '',
    kids: false,
  };

  async componentDidMount() {
    const { profileCount, images } = this.props;

    if (profileCount == 1) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71',
      });
    } else if (profileCount == 2) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97',
      });
    } else if (profileCount == 3) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc',
      });
    }

    if (
      images.length == 2 &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71'
      )
    ) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97',
      });
    } else if (
      images.length == 2 &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97'
      )
    ) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71',
      });
    } else if (
      images.length == 2 &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc'
      )
    ) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71',
      });
    } else if (
      images.length == 3 &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97'
      )
    ) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc',
      });
    } else if (
      images.length == 3 &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc'
      )
    ) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71',
      });
    } else if (
      images.length == 3 &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71'
      ) &&
      images.includes(
        'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc'
      )
    ) {
      this.setState({
        profileImageUrl:
          'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97',
      });
    }
  }

  addProfileToUser = async (e) => {
    e.preventDefault();

    const email = await getEmailFromLocal()[0];

    if (email) {
      try {
        await this.props.addProfileToUser({
          variables: {
            email: email,
            profileName: this.props.profileName,
            profileImageUrl: this.state.profileImageUrl,
            kids: this.state.kids,
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

      if (this.props.addProfileToUserData) {
        this.props.router.reload();
      }
    }
  };

  render() {
    const { profileCount, router } = this.props;
    const { profileImageUrl, kids } = this.state;

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
        <Flex
          justify="center"
          align="center"
          w="100%"
          as="form"
          onSubmit={this.addProfileToUser}
        >
          <Container maxW="lg" color="white" textAlign="left">
            <Text fontSize="5xl" fontWeight="semibold" m={2}>
              Profil Ekle
            </Text>
            <Text fontSize="md" color="#808080" m={2}>
              Netflix&apos;i izleyen başka bir kişi için profil ekleyin.
            </Text>
            <Flex
              align="center"
              m={2}
              borderTop="#333333 solid 1px"
              borderBottom="#333333 solid 1px"
              pt={4}
              pb={4}
            >
              {profileCount == 1 ? (
                <Image
                  src={profileImageUrl}
                  width="109.27px"
                  height="109.27px"
                  alt="User image"
                  objectFit="contain"
                />
              ) : null}
              {profileCount == 2 ? (
                <Image
                  src={profileImageUrl}
                  width="109.27px"
                  height="109.27px"
                  alt="User image"
                  objectFit="contain"
                />
              ) : null}
              {profileCount == 3 ? (
                <Image
                  src={profileImageUrl}
                  width="109.27px"
                  height="109.27px"
                  alt="User image"
                  objectFit="contain"
                />
              ) : null}

              <Input
                type="text"
                h="35.52px"
                w="319.64px"
                ml={2}
                mr={2}
                mt={3}
                name="Name"
                borderRadius="none"
                placeholder="Name"
                onChange={(e) => this.props.setProfileName(e.target.value)}
                _placeholder={{ fontSize: '14px' }}
                _active={{ bgColor: '#666666' }}
                _hover={{ bgColor: '#666666' }}
                _focus={{ bgColor: '#666666' }}
                errorBorderColor="red"
                border="black 1px solid"
                borderColor={'#666666'}
                isRequired
                bgColor="#666666"
                size="lg"
                mb={3}
              />

              <Checkbox
                colorScheme="gray"
                onChange={(e) => this.setState({ kids: !kids })}
                value={kids}
              >
                <Tooltip
                  textAlign="center"
                  hasArrow
                  label="Seçilirse bu profilde yalnızca 12 yaş ve altı yetişkinlik düzeylerine sahip dizi ve filmler görülebilir."
                  fontSize="md"
                >
                  Child
                </Tooltip>
              </Checkbox>
            </Flex>
            <Flex align="center">
              <Button
                colorScheme="red"
                type="submit"
                bgColor="#cc0000"
                borderRadius="none"
                _hover={{ bgColor: '#cc0000' }}
                _active={{ bgColor: '#cc0000' }}
                m={2}
                p={2}
                mt={5}
                size="lg"
                h="37.38px"
                w="151.25px"
              >
                Next
              </Button>
              <Flex
                justify="center"
                align="center"
                border="#808080 solid 1px"
                bgColor="#141414"
                color="#808080"
                onClick={() => router.reload()}
                p={2}
                m={2}
                mt={5}
                h="37.38px"
                w="106.98px"
                cursor="pointer"
                _hover={{ color: 'white', borderColor: 'white' }}
              >
                Cancel
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Box>
    );
  }
}

export default AddProfilePage;
