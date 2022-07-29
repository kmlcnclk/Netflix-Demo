import React from 'react';
import { PlayIcon, ExclamationIcon } from './Icons';

const Icon = ({ name, size, height, width, onClickFunc, color, className }) => {
  const icons = {
    play: PlayIcon,
    exclamation: ExclamationIcon,
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
  }
};

export default Icon;
