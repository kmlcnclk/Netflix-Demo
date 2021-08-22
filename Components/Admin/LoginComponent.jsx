import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { Component } from 'react';
import { addAdminEmailToLocal } from '../../LocalStorage/adminEmailStorage';

class LoginComponent extends Component {
  adminLoginForm = async (e) => {
    e.preventDefault();

    try {
      await this.props.adminLogin({
        variables: {
          email: this.props.email,
          password: this.props.password,
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

    if (this.props.adminLoginData) {
      this.props.setAdminEmailState(true);
      await addAdminEmailToLocal(this.props.email);
    }
  };

  render() {
    const { email, setEmail, password, setPassword } = this.props;
    return (
      <Flex h="100vh" align="center" justify="center">
        <Flex
          bgColor="#fff"
          w="md"
          p="12"
          as="form"
          onSubmit={this.adminLoginForm}
          direction="column"
          rounded={6}
        >
          <Heading size="lg" mb={6} textAlign="center">
            Admin Login
          </Heading>
          <Input
            type="email"
            placeholder="Email"
            size="md"
            mb={3}
            border="#bfbfbf 1px solid"
            variant="outline"
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bgColor="#fff"
            name="email"
            borderColor="hsl(0,0%,80%)"
          />

          <Input
            type="password"
            placeholder="Password"
            size="md"
            mb={6}
            border="#bfbfbf 1px solid"
            variant="outline"
            isRequired
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bgColor="#fff"
            borderColor="hsl(0,0%,80%)"
            name="password"
          />

          <Button type="submit" colorScheme="teal">
            Login
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default LoginComponent;
