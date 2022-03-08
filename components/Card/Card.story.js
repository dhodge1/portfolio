import React from 'react';
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Collection/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: {
    src: 'https://picsum.photos/300',
    alt: 'Avatar',
    width: 300,
    height: 300,
  },
  title: 'Lorem, ipsum.',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
};
