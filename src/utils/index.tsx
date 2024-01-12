import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// applies clsx function to the classes provided which are defined in the class variance and
//then merge these togeter with tailwind merge
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
