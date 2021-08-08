import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { Component } from 'react';

class DeleteTVShowComponent extends Component {
  deleteTVShowForm = async (e) => {
    e.preventDefault();

    try {
      await this.props.deleteTVShow({
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

    if (this.props.deleteTVShowData) {
      this.props.toast({
        title: 'Delete is successfull',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  render() {
    const { name, setName } = this.props;

    return (
      <Flex h="150vh" align="center" justify="center">
        <Flex
          bgColor="#fff"
          w="lg"
          p="12"
          as="form"
          onSubmit={this.deleteTVShowForm}
          direction="column"
          rounded={6}
        >
          <Heading size="lg" mb={6} textAlign="center">
            Delete TV Show
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
            Delete TV Show
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default DeleteTVShowComponent;
