/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Nav from './Nav';

export default {
  title: 'Header/Nav',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { href: '#first', text: 'first', isActive: true },
    { href: '#second', text: 'second' },
    { href: '#third', text: 'third' },
  ],
};
