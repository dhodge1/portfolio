/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Title from './Title';

export default {
  title: 'Intro/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'I make garbage.',
  className: '',
};
