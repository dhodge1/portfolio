import React from 'react';
import Collection from './Collection';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Collection/Collection',
  component: Collection,
};

const Template = (args) => <Collection {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      img: {
        src: 'https://picsum.photos/300',
        alt: 'Avatar',
        width: 300,
        height: 300,
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
        height: 300,
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
        height: 300,
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
        height: 300,
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
        height: 300,
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
        height: 300,
      },
      title: 'Lorem, ipsum.',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
    },
  ],
};
