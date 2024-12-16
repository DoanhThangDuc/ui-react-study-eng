import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonDriver } from '../Button';
import { seSpiroDiscoBall, seWhite } from '../../../shared/colors';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    driver: {
      type: 'primary',
      dataCy: 'button',
      round: false,
      height: '40px',
      width: '100px',
      color: '#fff',
      bgColor: '#007bff',
      fontSize: '16px',
      textTransform: 'uppercase',
      fontWeight: 500,
      disabled: false,
    } as ButtonDriver,
    children: 'Button',
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  driver: {
    type: 'primary',
    color: seWhite,
    bgColor: seSpiroDiscoBall
  },
};
export const Secondary = Template.bind({});
Secondary.args = {
  driver: {
    type: 'secondary',
    bgColor: '#6c757d',
    color: '#fff',
  },
};

export const Success = Template.bind({});
Success.args = {
  driver: {
    type: 'success',
    bgColor: '#28a745',
    color: '#fff',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  driver: {
    type: 'primary',
    bgColor: '#007bff',
    color: '#fff',
    disabled: true,
  },
};
