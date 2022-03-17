/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import FeaturedCard from './FeaturedCard';

export default {
  title: 'Spotlight/FeaturedCard',
  component: FeaturedCard,
};

const Template = (args) => <FeaturedCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: {
    src: 'https://picsum.photos/300',
    alt: 'Avatar',
    width: 300,
    height: 200,
  },
  title: 'Lorem, ipsum.',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, eligendi?',
};
