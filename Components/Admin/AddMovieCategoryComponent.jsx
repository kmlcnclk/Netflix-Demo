import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { Component } from 'react';

export default class AddMovieCategoryComponent extends Component {
  addMovieCategoryForm = async (e) => {
    e.preventDefault();

    try {
      await this.props.addMovieCategory({
        variables: {
          name: this.props.name,
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

    if (this.props.addMovieCategoryData) {
      this.props.toast({
        title: 'Category is added.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };
  render() {
    const { name, setName } = this.props;

    return (
      <Flex h="100vh" align="center" justify="center">
        <Flex
          bgColor="#fff"
          w="lg"
          p="12"
          as="form"
          onSubmit={this.addMovieCategoryForm}
          direction="column"
          rounded={6}
        >
          <Heading size="lg" mb={6} textAlign="center">
            Add Movie Category
          </Heading>
          <Input
            type="text"
            placeholder="Name"
            size="lg"
            mb={3}
            border="#bfbfbf 1px solid"
            variant="outline"
            isRequired
            value={name}
            onChange={(e) => setName(e.target.value)}
            bgColor="#fff"
            name="name"
            borderColor="hsl(0,0%,80%)"
          />

          <Button type="submit" colorScheme="teal">
            Add Movie Category
          </Button>
        </Flex>
      </Flex>
    );
  }
}
