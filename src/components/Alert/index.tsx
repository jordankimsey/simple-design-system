import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { cn } from '../../utils';

export type AlertProps = ComponentProps<'div'> &
  VariantProps<typeof alertStyles>;
export const Alert = ({ type, className, ...props }: AlertProps) => {
  return (
    <div
      className={cn(alertStyles({ type, className }))}
      role='alert'
      {...props}
    />
  );
};

const alertStyles = cva(['text-sm', 'text-white', 'rounded-lg', 'p-4'], {
  variants: {
    type: {
      dark: ['bg-gray-800', 'dark:bg-white', 'dark:text-gray-800'],
      secondary: 'bg-gray-500',
      info: ['bg-blue-600', 'dark:bg-blue-500'],
      success: 'bg-teal-500',
      danger: 'bg-red-500',
      warning: 'bg-yellow-500',
      light: ['bg-white', 'text-gray-600'],
    },
  },
});
