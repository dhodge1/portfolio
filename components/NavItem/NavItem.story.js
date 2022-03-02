/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import NavItem from './NavItem';

export default {
  title: 'Header/NavItem',
  component: NavItem,
};

const Template = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#example',
  text: 'Item 1',
  isActive: false,
};
