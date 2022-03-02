/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Byline from './Byline';

export default {
  title: 'Intro/Byline',
  component: Byline,
};

const Template = (args) => <Byline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hi, my name is ___',
  className: '',
};
