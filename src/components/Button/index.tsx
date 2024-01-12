import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { cn } from '../../utils';

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

export const Button = ({
  variant,
  size,
  colorscheme,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, colorscheme, className }))}
      {...props}
    />
  );
};

const buttonStyles = cva(
  // default button style
  [
    'w-full',
    'rounded-md',
    'font-semibold',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      // props with different variants
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'transition-colors duration-300',
      },
      //size prop
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      colorscheme: {
        primary: 'text-white',
      },
    },
    // apply classes when multiple props are combined, other styles are added
    compoundVariants: [
      {
        // when we have solid variant with primary colorscheme we want to add more classes to the component
        variant: 'solid',
        colorscheme: 'primary',
        className: 'bg-primary-500 hover:bg-primary-600',
      },
      {
        variant: 'outline',
        colorscheme: 'primary',
        className:
          'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
      },
      {
        variant: 'ghost',
        colorscheme: 'primary',
        className: 'text-primary-600 bg-transparent hover:bg-primary-100',
      },
    ],
    // if we don't specifiy in custom propery we add this is the default variant
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      colorscheme: 'primary',
    },
  }
);
