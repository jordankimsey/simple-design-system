import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../utils';

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof inputStyles>;

const inputStyles = cva([
  [
    'w-full',
    'border-2',
    'border-gray-200',
    'p-2',
    'rounded-lg',
    'transition-all',
    'duration-100',
    'outline-none',
    'focus:outline-primary-500',
    'focus:border-transparent',
    'placeholder:text-gray-400',
    'placeholder:text-sm',
  ],
]);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type='text'
        autoComplete='off'
        className={cn(inputStyles({ className }))}
        {...props}
      />
    );
  }
);
