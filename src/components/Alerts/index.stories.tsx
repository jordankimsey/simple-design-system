import type { Meta } from '@storybook/react';
import { Alert } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alerts',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <div className='space-y-4'>
      <Alert emphasis={'dark'}>
        Dark alert! You should check in on some of those fields below.
      </Alert>
      <Alert emphasis={'secondary'}>
        Secondary alert! You should check in on some of those fields below.
      </Alert>
      <Alert emphasis={'info'}>
        Info alert! You should check in on some of those fields below.
      </Alert>
      <Alert emphasis={'success'}>
        Success alert! You should check in on some of those fields below.
      </Alert>
      <Alert emphasis={'danger'}>
        Danger alert! You should check in on some of those fields below.
      </Alert>
      <Alert emphasis={'warning'}>
        Warning alert! You should check in on some of those fields below.
      </Alert>
      <Alert emphasis={'light'}>
        Light alert! You should check in on some of those fields below.
      </Alert>
    </div>
  );
};
