import type { Meta } from '@storybook/react';
import { Alert } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['dark', 'secondary', 'info', 'success', 'danger'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <div className='space-y-4'>
      <Alert type={'dark'}>
        Dark alert! You should check in on some of those fields below.
      </Alert>
      <Alert type={'secondary'}>
        Secondary alert! You should check in on some of those fields below.
      </Alert>
      <Alert type={'info'}>
        Info alert! You should check in on some of those fields below.
      </Alert>
      <Alert type={'success'}>
        Success alert! You should check in on some of those fields below.
      </Alert>
      <Alert type={'danger'}>
        Danger alert! You should check in on some of those fields below.
      </Alert>
      <Alert type={'warning'}>
        Warning alert! You should check in on some of those fields below.
      </Alert>
      <Alert type={'light'}>
        Light alert! You should check in on some of those fields below.
      </Alert>
    </div>
  );
};
