/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Intro from './Intro';

export default {
  title: 'Intro/Intro',
  component: Intro,
  parameters: {
    layout: null,
    fullscreen: true,
    padded: false,
  },
};

const Template = (args) => (
  <div className="container mx-auto">
    <Intro {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: {
    title: 'I make garbage.',
    className: '',
  },
  byline: {
    children: 'Hi, my name is ___',
    className: '',
  },
  description: {},
};
