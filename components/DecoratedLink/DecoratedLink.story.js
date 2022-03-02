/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import DecoratedLink from './DecoratedLink';

export default {
  title: 'Intro/DecoratedLink',
  component: DecoratedLink,
};

const Template = (args) => <DecoratedLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  text: 'Fancy',
  className: '',
  color: 'after:bg-primary',
};
