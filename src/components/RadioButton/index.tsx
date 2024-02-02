import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../utils';

export type RadioButtonProps = ComponentProps<'input'> &
  VariantProps<typeof radioButtonStyles> & { label?: string };

const radioButtonStyles = cva([
  'shrink-0',
  'mt-0.5',
  'border-gray-200',
  'rounded-full',
  'text-blue-600',
  'focus:ring-blue-500',
  'disabled:opacity-50',
  'disabled:pointer-events-none',
  'dark:bg-gray-800',
  'dark:border-gray-700',
  'dark:checked:bg-blue-500',
  'dark:checked:border-blue-500',
  'dark:focus:ring-offset-gray-800',
]);

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, checked, className, ...props }, ref) => {
    return (
      <>
        <div className={'flex'}>
          <input
            ref={ref}
            type='radio'
            name='hs-default-radio'
            className={cn(radioButtonStyles({ className }))}
            id='hs-default-radio'
            checked={checked}
            {...props}
          />
          {label && (
            <label
              htmlFor='hs-default-radio'
              className='text-sm text-gray-500 ms-2 dark:text-gray-400'
            >
              {label}
            </label>
          )}
        </div>
      </>
    );
  }
);
