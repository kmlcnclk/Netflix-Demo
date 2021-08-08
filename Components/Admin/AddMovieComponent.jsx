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
// formu enterladıktan sonra inputları temizle.

class AddMovieComponent extends Component {
  addMovieForm = async (e) => {
    e.preventDefault();

    let category = [];

    for (let i = 0; i < this.props.category.length; i++) {
      await category.push(this.props.category[i].value);
    }

    try {
      await this.props.addMovie({
        variables: {
          name: this.props.name,
          content: this.props.content,
          duration: this.props.duration,
          videoUrl: this.props.movieUrl,
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

    if (this.props.addMovieData) {
      this.props.toast({
        title: 'Movie is added.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  handleChange = async (selectedOption) => {
    let c = [];

    for (let i = 0; i < selectedOption.length; i++) {
      await c.push(selectedOption[i]);
    }

    await this.props.setCategory(c);
  };

  handleChange1 = async (tags) => {
    let mu = [];

    mu = await tags;

    await this.props.setMovieUrl(mu);
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
    const { name, setName, content, setContent, duration, movieUrl } =
      this.props;

    const options = [
      { value: 'Action', label: 'Action' },
      { value: 'Anime', label: 'Anime' },
      { value: 'Award-Winning', label: 'Award-Winning' },
      { value: 'Children & Family', label: 'Children & Family' },
      { value: 'Classics', label: 'Classics' },
      { value: 'Comedies', label: 'Comedies' },
      { value: 'Documentaries', label: 'Documentaries' },
      { value: 'Dramas', label: 'Dramas' },
      { value: 'Fantasy', label: 'Fantasy' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Independent', label: 'Independent' },
      { value: 'Music & Musicals', label: 'Music & Musicals' },
      { value: 'Romance', label: 'Romance' },
      { value: 'Sci-Fi', label: 'Sci-Fi' },
      { value: 'Sports', label: 'Sports' },
      { value: 'Stand-Up Comedy', label: 'Stand-Up Comedy' },
      { value: 'Thriller', label: 'Thriller' },
      { value: 'Turkish', label: 'Turkish' },
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
          onSubmit={this.addMovieForm}
          direction="column"
          rounded={6}
        >
          <Heading size="lg" mb={6} textAlign="center">
            Add Movie
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
            placeholder="Movie Content"
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

          {/* <Input
            type="text"
            placeholder="Url"
            size="lg"
            mb={3}
            border="hsl(0,0%,80%) 1px solid"
            borderColor="hsl(0,0%,80%)"
            variant="outline"
            isRequired
            value={movieUrl}
            onChange={(e) => {
              let mu = [];

              mu = e.target;

              setMovieUrl(e.target.value);
            }}
            bgColor="#fff"
            name="movieUrl"
          /> */}

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
              <TagsInput value={movieUrl} onChange={this.handleChange1} />
            </Box>
          </Tooltip>

          <Select
            placeholder="Genres"
            name="category"
            options={options}
            onChange={this.handleChange}
            isMulti
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
            Add Movie
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default AddMovieComponent;
