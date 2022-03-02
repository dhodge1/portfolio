/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from './Header';

export default {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: null,
    fullscreen: true,
    padded: false,
  },
};

const Template = (args) => (
  <div className="container mx-auto py-12">
    <Header {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  nav: {
    items: [
      { href: '#first', text: 'first', isActive: true },
      { href: '#second', text: 'second' },
      { href: '#third', text: 'third' },
    ],
  },
  avatar: {
    img: {
      src: 'https://picsum.photos/48',
      alt: 'Avatar',
      width: 48,
      height: 48,
    },
    text: 'Your Name',
  },
};
