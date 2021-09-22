import React, { Component } from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  Input,
  Flex,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { getEmailFromLocal } from '../../LocalStorage/emailStorage';

class PasswordComponent extends Component {
  state = { loading: false };
  changePasswordFunc = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const email = await getEmailFromLocal()[0];

    try {
      await this.props.changePassword({
        variables: {
          email: email,
          currentPassword: this.props.currentPassword,
          newPassword: this.props.newPassword,
          confirmNewPassword: this.props.confirmNewPassword,
          // requireSignIn: this.props.requireSignIn,
          // bunu yap
        },
      });
    } catch (err) {
      this.setState({ loading: false });

      this.props.toast({
        title: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    if (this.props.changePasswordData) {
      if (this.props.changePasswordData.changePassword.success) {
        this.props.router.push('/YourAccount');
      }
    }
  };

  render() {
    const { loading } = this.state;

    const {
      currentPassword,
      setCurrentPassword,
      newPassword,
      setNewPassword,
      confirmNewPassword,
      setConfirmNewPassword,
      requireSignIn,
      setRequireSignIn,
    } = this.props;

    return (
      <Container
        maxW="container.lg"
        p={3}
        pt="30px"
        pl={0}
        pb="85px"
        as="form"
        onSubmit={this.changePasswordFunc}
      >
        <Box display="block">
          <Heading size="xl" mt={2} color="#333" fontWeight="normal">
            Change Password
          </Heading>
          <Input
            h="48px"
            mt={5}
            w="500px"
            borderRadius="none"
            placeholder="Current Password"
            type="password"
            value={currentPassword}
            bgColor="#fff"
            border="1px solid"
            onChange={(e) => setCurrentPassword(e.target.value)}
            borderColor="#8c8c8c"
            _active={{ bgColor: '#fff' }}
            _hover={{ bgColor: '#fff' }}
            _focus={{ bgColor: '#fff' }}
            variant="outline"
            isRequired
            display="block"
            size="lg"
          />
          <Link href="/loginhelp">
            <a>
              <Text
                color="#0080ff"
                _hover={{ textDecoration: 'underline' }}
                fontSize="sm"
              >
                Forgot password?
              </Text>
            </a>
          </Link>
          <Input
            display="block"
            h="48px"
            mt={10}
            w="500px"
            borderRadius="none"
            placeholder="New password (6-60 characters)"
            value={newPassword}
            type="password"
            bgColor="#fff"
            border="1px solid"
            onChange={(e) => setNewPassword(e.target.value)}
            borderColor="#8c8c8c"
            _active={{ bgColor: '#fff' }}
            _hover={{ bgColor: '#fff' }}
            _focus={{ bgColor: '#fff' }}
            variant="outline"
            isRequired
            size="lg"
          />
          <Input
            display="block"
            h="48px"
            mt={10}
            w="500px"
            borderRadius="none"
            placeholder="Confirm new password"
            _placeholder={{ paddingLeft: '0px' }}
            type="password"
            bgColor="#fff"
            value={confirmNewPassword}
            border="1px solid"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            borderColor="#8c8c8c"
            _active={{ bgColor: '#fff' }}
            _hover={{ bgColor: '#fff' }}
            _focus={{ bgColor: '#fff' }}
            variant="outline"
            isRequired
            size="lg"
          />
          <Flex w="full" mt={3} justify="start" align="center">
            <Checkbox
              mt={10}
              size="lg"
              onChange={(e) => setRequireSignIn(!requireSignIn)}
              value={requireSignIn}
            >
              Require all devices to sign in again with new password
            </Checkbox>
          </Flex>
          <Flex align="center" mt={12}>
            <Button
              colorScheme="blue"
              bgColor="#0080ff"
              type="submit"
              color="#fff"
              w="98px"
              h="37px"
              borderRadius="none"
              textAlign="center"
              isLoading={loading}
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
    );
  }
}

export default PasswordComponent;
