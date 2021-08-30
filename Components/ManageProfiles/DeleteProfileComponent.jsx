import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';
// import { getClickProfileFromLocal } from '../../SessionStorage/clickProfileStorage';
// import { getEmailFromLocal } from '../../LocalStorage/emailStorage';
// import { useRouter } from 'next/router';
// import {
//   DELETE_CHILD_FROM_USER,
//   DELETE_PROFILE_TO_USER,
// } from '../../GraphQL/Apollo-Client/Mutations/userMutation';
// import { useMutation } from '@apollo/client';
import React, { Component } from 'react';

class DeleteProfileComponent extends Component {
  deleteProfileToUserForm = async (e) => {
    try {
      await this.props.deleteProfileToUser({
        variables: {
          email: this.props.email,
          profileIndex: this.props.clickProfileIndex,
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

    if (this.props.deleteProfileToUserData) {
      this.props.router.reload();
    }
  };

  deleteChildFromUserForm = async (e) => {
    try {
      await this.props.deleteChildFromUser({
        variables: {
          email: this.props.email,
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

    if (this.props.deleteChildFromUserData) {
      await this.props.setU5('');
      await this.props.setProfileImageUrl5('');
      await this.props.setLanguage5('');
      await this.props.setAgeLimit5('');
      await this.props.setAutoplayNextEpisode5(true);
      await this.props.setPreviews5(true);
      await this.props.setKids5(false);
      this.props.router.reload();
    }
  };

  keepProfileFunc = async (e) => {
    this.props.setDeleteProfileCState(false)
  };

  render() {
    const { clickProfileIndex, deleteProfileCImage, deleteProfileCName } =
      this.props;

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
        <Flex justify="center" align="center" my={10}>
          <Container w="471.25px" color="white" textAlign="center">
            <Box textAlign="left" borderBottom="solid #333333 1px">
              <Heading my={2} fontWeight="semibold" size="2xl" w="full" font>
                Delete Profile?
              </Heading>
            </Box>
            <Flex
              borderBottom="solid #333333 1px"
              py={5}
              justify="space-around"
              w="full"
            >
              <Box w="30%">
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
                    bgImage={deleteProfileCImage}
                    borderRadius="md"
                  ></Flex>
                </Flex>
                <Box textAlign="center">
                  <Text fontSize="md" color="#808080">
                    {deleteProfileCName}
                  </Text>
                </Box>
              </Box>

              <Flex
                w="70%"
                textAlign="justify"
                lineHeight="1.1"
                align="flex-end"
                my={9}
              >
                <Text fontSize="md" letterSpacing="wide">
                  This profile&apos;s history - including My List, ratings and
                  activity - will be gone forever, and you won&apos;t be able to
                  access it again.
                </Text>
              </Flex>
            </Flex>
            <Flex align="center" mt={3}>
              <Flex
                justify="center"
                align="center"
                mt={5}
                mr={4}
                bgColor="white"
                color="black"
                p={2}
                onClick={this.keepProfileFunc}
                w="192.45px"
                h="37.38px"
                cursor="pointer"
                _hover={{ color: 'white', bgColor: '#cb0000' }}
              >
                <Text
                  fontSize="lg"
                  textAlign="center"
                  fontWeight="semibold"
                  letterSpacing="wider"
                >
                  KEEP PROFILE
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
                w="217.14px"
                h="37.38px"
                onClick={(e) => {
                  if (clickProfileIndex == 'Child') {
                    this.deleteChildFromUserForm();
                  } else {
                    this.deleteProfileToUserForm();
                  }
                }}
                cursor="pointer"
                _hover={{ color: 'white', borderColor: 'white' }}
              >
                <Text
                  fontSize="lg"
                  textAlign="center"
                  letterSpacing="wider"
                  fontWeight="semibold"
                >
                  DELETE PROFILE
                </Text>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Box>
    );
  }
}

export default DeleteProfileComponent;

// function DeleteProfileComponent({
//   deleteProfileCImage,
//   setDeleteProfileCImage,
//   deleteProfileCName,
//   setDeleteProfileCName,
//   setU5,
//   setProfileImageUrl5,
//   setLanguage5,
//   setAgeLimit5,
//   setAutoplayNextEpisode5,
//   setPreviews5,
//   setKids5,
// }) {
//   const [clickProfile, setclickProfile] = useState('');
//   const [email, setEmail] = useState('');

//   const router = useRouter();
//   const toast = useToast();

//   const [deleteProfileToUser, { data: deleteProfileToUserData }] = useMutation(
//     DELETE_PROFILE_TO_USER
//   );

//   const [deleteChildFromUser, { data: deleteChildFromUserData }] = useMutation(
//     DELETE_CHILD_FROM_USER
//   );

//   useEffect(() => {
//     const a = async () => {
//       const cp = await getClickProfileFromLocal()[0];

//       await setclickProfile(cp);

//       const e = await getEmailFromLocal()[0];

//       await setEmail(e);
//     };

//     a();
//   }, []);

//   const deleteProfileToUserForm = async (e) => {
//     try {
//       await deleteProfileToUser({
//         variables: {
//           email: email,
//           profileIndex: clickProfile,
//         },
//       });
//     } catch (err) {
//       toast({
//         title: err.message,
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }

//     if (deleteProfileToUserData) {
//       router.reload();
//     }
//   };

//   const deleteChildFromUserForm = async (e) => {
//     try {
//       await deleteChildFromUser({
//         variables: {
//           email: email,
//         },
//       });
//     } catch (err) {
//       toast({
//         title: err.message,
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }

//     if (deleteChildFromUserData) {
//       await setU5('');
//       await setProfileImageUrl5('');
//       await setLanguage5('');
//       await setAgeLimit5('');
//       await setAutoplayNextEpisode5(true);
//       await setPreviews5(true);
//       await setKids5(false);
//       router.reload();
//     }
//   };

//   const deleteFullForm = async (e) => {
//     if (clickProfile == 'Child') {
//       try {
//         await deleteChildFromUser({
//           variables: {
//             email: email,
//           },
//         });
//       } catch (err) {
//         toast({
//           title: err.message,
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//       }

//       if (deleteChildFromUserData) {
//         await setU5('');
//         await setProfileImageUrl5('');
//         await setLanguage5('');
//         await setAgeLimit5('');
//         await setAutoplayNextEpisode5(true);
//         await setPreviews5(true);
//         await setKids5(false);
//         router.reload();
//       }
//     } else {
//       try {
//         await deleteProfileToUser({
//           variables: {
//             email: email,
//             profileIndex: clickProfile,
//           },
//         });
//       } catch (err) {
//         toast({
//           title: err.message,
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//       }

//       if (deleteProfileToUserData) {
//         router.reload();
//       }
//     }
//   };

//   return (
//     <Box bgColor="#141414">
//       <Flex justify="flex-start" align="center" pt={2} pl={12} cursor="pointer">
//         <Link href="/browse" passHref>
//           <a>
//             <NextImage
//               src="/net.png"
//               width={'100'}
//               height={'50'}
//               objectFit="contain"
//               alt="Netflix"
//             />
//           </a>
//         </Link>
//       </Flex>
//       <Flex justify="center" align="center" my={10}>
//         <Container w="471.25px" color="white" textAlign="center">
//           <Box textAlign="left" borderBottom="solid #333333 1px">
//             <Heading my={2} fontWeight="semibold" size="2xl" w="full" font>
//               Delete Profile?
//             </Heading>
//           </Box>
//           <Flex
//             borderBottom="solid #333333 1px"
//             py={5}
//             justify="space-around"
//             w="full"
//           >
//             <Box w="30%">
//               <Flex>
//                 <Flex
//                   justify="flex-start"
//                   align="flex-end"
//                   width="109.27px"
//                   height="109.27px"
//                   mb={2}
//                   p={2}
//                   bgAttachment="scroll"
//                   bgSize="cover"
//                   bgRepeat="no-repeat"
//                   bgImage={deleteProfileCImage}
//                   borderRadius="md"
//                 ></Flex>
//               </Flex>
//               <Box textAlign="center">
//                 <Text fontSize="md" color="#808080">
//                   {deleteProfileCName}
//                 </Text>
//               </Box>
//             </Box>

//             <Flex
//               w="70%"
//               textAlign="justify"
//               lineHeight="1.1"
//               align="flex-end"
//               my={9}
//             >
//               <Text fontSize="md" letterSpacing="wide">
//                 This profile&apos;s history - including My List, ratings and
//                 activity - will be gone forever, and you won&apos;t be able to
//                 access it again.
//               </Text>
//             </Flex>
//           </Flex>
//           <Flex align="center" mt={3}>
//             <Flex
//               justify="center"
//               align="center"
//               mt={5}
//               mr={4}
//               bgColor="white"
//               color="black"
//               p={2}
//               //   onClick={this.changeToProfileNameForm}
//               w="192.45px"
//               h="37.38px"
//               cursor="pointer"
//               _hover={{ color: 'white', bgColor: '#cb0000' }}
//             >
//               <Text
//                 fontSize="lg"
//                 textAlign="center"
//                 fontWeight="semibold"
//                 letterSpacing="wider"
//               >
//                 KEEP PROFILE
//               </Text>
//             </Flex>

//             <Flex
//               justify="center"
//               align="center"
//               mt={5}
//               mr={4}
//               border="#808080 solid 1px"
//               bgColor="#141414"
//               color="#808080"
//               p={2}
//               w="217.14px"
//               h="37.38px"
//               onClick={(e) => {
//                 deleteFullForm();
//                 // if (clickProfile == 'Child') {
//                 //   deleteChildFromUserForm();
//                 // } else {
//                 //   deleteProfileToUserForm();
//                 // }
//               }}
//               cursor="pointer"
//               _hover={{ color: 'white', borderColor: 'white' }}
//             >
//               <Text
//                 fontSize="lg"
//                 textAlign="center"
//                 letterSpacing="wider"
//                 fontWeight="semibold"
//               >
//                 DELETE PROFILE
//               </Text>
//             </Flex>
//           </Flex>
//         </Container>
//       </Flex>
//     </Box>
//   );
// }

// export default DeleteProfileComponent;
