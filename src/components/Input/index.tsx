import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../utils';

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof inputStyles>;

const inputStyles = cva([
  [
    'py-3',
    'px-4',
    'block',
    'w-full',
    'border-gray-200',
    'rounded-lg',
    'text-sm',
    'focus:border-blue-500',
    'focus:ring-blue-500',
    'disabled:opacity-50',
    'disabled:pointer-events-none',
    'dark:bg-slate-900',
    'dark:border-gray-700',
    'dark:text-gray-400',
    'dark:focus:ring-gray-600',
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
