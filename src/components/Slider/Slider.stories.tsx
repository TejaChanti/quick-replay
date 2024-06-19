import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Slider, { SliderProps } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['continuous', 'discreet'],
    },
    subtype: {
      control: { type: 'select' },
      options: ['single', 'range'],
    },
    numberOfSteps: {
      control: { type: 'number', min: 1, max: 10 },
    },
    handleSize: {
      control: { type: 'select' },
      options: ['Size_24', 'Size_32'],
    },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<SliderProps> = (args: SliderProps) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'continuous',
  subtype: 'single',
  handleSize: 'Size_24',
};
