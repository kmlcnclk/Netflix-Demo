import React, { Component } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  Tooltip,
} from '@chakra-ui/react';
import Select from 'react-select';
import styles from '../../styles/admin.module.css';
import TagsInput from 'react-tagsinput';

class AddTVShowComponent extends Component {
  addTVShowForm = async (e) => {
    e.preventDefault();

    let category = [];

    for (let i = 0; i < this.props.category.length; i++) {
      await category.push(this.props.category[i].value);
    }

    try {
      await this.props.addTVShow({
        variables: {
          name: this.props.name,
          content: this.props.content,
          duration: this.props.duration,
          videoUrl: this.props.TVShowUrl, //bunu değiştir.array yapacan canım ciğerim.
          category: category,
          ageLimit: this.props.ageLimit,
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

    if (this.props.addTVShowData) {
      this.props.toast({
        title: 'TV Show is added.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  handleChange = async (selectedOption) => {
    this.props.setCategory(selectedOption);
  };

  handleChange1 = async (tags) => {
    let tvsu = [];

    tvsu = await tags;

    await this.props.setTVShowUrl(tvsu);
  };

  handleChange2 = async (tags) => {
    let d = [];

    d = await tags;

    await this.props.setDuration(d);
  };

  handleChange3 = async (selectedOption) => {
    let al;

    al = await selectedOption.value;

    await this.props.setAgeLimit(al);
  };

  render() {
    const { name, setName, content, setContent, duration, TVShowUrl } =
      this.props;

    const options = [
      { value: 'Action', label: 'Action' },
      { value: 'Anime', label: 'Anime' },
      { value: 'Asian', label: 'Asian' },
      { value: 'British', label: 'British' },
      { value: 'Comedies', label: 'Comedies' },
      { value: 'Crime', label: 'Crime' },
      { value: 'Docuseries', label: 'Docuseries' },
      { value: 'Dramas', label: 'Dramas' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Kids', label: 'Kids' },
      { value: 'Mysteries', label: 'Mysteries' },
      { value: 'Reality & Talk', label: 'Reality & Talk' },
      { value: 'Romance', label: 'Romance' },
      { value: 'Sci-Fi & Fantasy', label: 'Sci-Fi & Fantasy' },
      { value: 'Science & Nature', label: 'Science & Nature' },
      { value: 'Teen', label: 'Teen' },
      { value: 'Thriller', label: 'Thriller' },
      { value: 'Turkish', label: 'Turkish' },
      { value: 'US', label: 'US' },
    ];

    const options2 = [
      { value: 'ALL MATURITY RATINGS', label: 'ALL MATURITY RATINGS' },
      { value: '16+', label: '16+' },
      { value: '13+', label: '13+' },
      { value: '7+', label: '7+' },
      { value: 'All', label: 'All' },
    ];

    return (
      <Flex h="150vh" align="center" justify="center">
        <Flex
          bgColor="#fff"
          w="lg"
          p="12"
          as="form"
          onSubmit={this.addTVShowForm}
          direction="column"
          rounded={6}
        >
          <Heading size="lg" mb={6} textAlign="center">
            Add TV Shows
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
          <Textarea
            mb={3}
            size="lg"
            onChange={(e) => setContent(e.target.value)}
            placeholder="TV Show Content"
            border="#bfbfbf 1px solid"
            variant="outline"
            bgColor="#fff"
            isRequired
            value={content}
            name="content"
            borderColor="hsl(0,0%,80%)"
          />
          {/* <Input
            type="text"
            placeholder="Duration"
            size="lg"
            mb={3}
            border="#bfbfbf 1px solid"
            variant="outline"
            isRequired
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            bgColor="#fff"
            borderColor="hsl(0,0%,80%)"
            name="duration"
          /> */}
          <Tooltip
            label="Enter in order 
            1) Preview 
            2) Duration"
            hasArrow
            bg="red.300"
            color="white"
            aria-label="A tooltip"
          >
            <Box mb={3}>
              <TagsInput value={duration} onChange={this.handleChange2} />
            </Box>
          </Tooltip>
          <Tooltip
            label="Enter in order 
            1) Preview 
            2) Main URLs"
            hasArrow
            bg="red.300"
            color="white"
            aria-label="A tooltip"
          >
            <Box mb={3}>
              <TagsInput value={TVShowUrl} onChange={this.handleChange1} />
            </Box>
          </Tooltip>
          <Select
            placeholder="Genres"
            name="category"
            options={options}
            isMulti
            onChange={this.handleChange}
            className={styles.selectCategory}
          ></Select>
          <Select
            placeholder="Age Limit"
            name="ageLimit"
            options={options2}
            onChange={this.handleChange3}
            className={styles.selectAgeLimit}
          ></Select>
          <Button type="submit" colorScheme="teal">
            Add TV Show
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default AddTVShowComponent;
