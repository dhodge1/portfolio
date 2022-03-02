/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Avatar from './Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Header/Avatar',
  component: Avatar,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  img: {
    src: 'https://picsum.photos/48',
    alt: 'Avatar',
    width: 48,
    height: 48,
  },
  text: 'Your Name',
};
