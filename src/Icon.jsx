import React from 'react';
import {
  PlayIcon,
  ExclamationIcon,
  LoudSpeakerIcon,
  NonLoudSpeakerIcon,
  NumberOneIcon,
  NumberTwoIcon,
  NumberThreeIcon,
  NumberFourIcon,
  NumberFiveIcon,
  NumberSixIcon,
  NumberSevenIcon,
  NumberEightIcon,
  NumberNineIcon,
  NumberTenIcon,
} from './Icons';

const Icon = ({ name, size, height, width, onClickFunc, color, className }) => {
  const icons = {
    play: PlayIcon,
    exclamation: ExclamationIcon,
    loudSpeaker: LoudSpeakerIcon,
    nonLoudSpeaker: NonLoudSpeakerIcon,
    numberOne: NumberOneIcon,
    numberTwo: NumberTwoIcon,
    numberThree: NumberThreeIcon,
    numberFour: NumberFourIcon,
    numberFive: NumberFiveIcon,
    numberSix: NumberSixIcon,
    numberSeven: NumberSevenIcon,
    numberEight: NumberEightIcon,
    numberNine: NumberNineIcon,
    numberTen: NumberTenIcon,
  };

  const Component = icons[name];

  if (size) {
    return (
      <Component
        {...{
          size,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  } else if (height && width) {
    return (
      <Component
        {...{
          width,
          height,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  } else {
    <Component
      {...{
        onClickFunc,
        color,
        className,
      }}
    />;
  }
};

export default Icon;
