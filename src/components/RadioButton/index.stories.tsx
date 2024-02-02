import type { Meta } from '@storybook/react';
import { RadioButton } from '.';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Basic = () => {
  return (
    <div className='space-y-4'>
      <RadioButton label='Default radio' />
      <RadioButton label='Checked radio' checked />
    </div>
  );
};
