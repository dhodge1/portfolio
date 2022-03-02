/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Description from './Description';
import DecoratedLink from '../DecoratedLink/DecoratedLink';

export default {
  title: 'Intro/Description',
  component: Description,
};

const linkProps = {
  href: '#',
  text: 'Fancy',
  className: '',
  color: 'after:bg-primary',
};

const Template = (args) => (
  <Description {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
      <DecoratedLink {...linkProps} /> cumque minima hic. <br /> totam corrupti
      rerum aliquam. Placeat.
    </p>
  </Description>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  className: '',
};
