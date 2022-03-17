import React from 'react';
import Spotlight from './Spotlight';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Spotlight/Spotlight',
  component: Spotlight,
};

const Template = (args) => <Spotlight {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      img: {
        src: 'https://picsum.photos/300',
        alt: 'Avatar',
        width: 300,
        height: 200,
      },
      title: 'Lorem, ipsum.',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
    },
    {
      img: {
        src: 'https://picsum.photos/300',
        alt: 'Avatar',
        width: 300,
        height: 200,
      },
      title: 'Lorem, ipsum.',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
    },
    {
      img: {
        src: 'https://picsum.photos/300',
        alt: 'Avatar',
        width: 300,
        height: 200,
      },
      title: 'Lorem, ipsum.',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
    },
  ],
};
