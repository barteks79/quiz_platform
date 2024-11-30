import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, MouseEventHandler, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   icon?: ReactNode;
   children?: ReactNode;
   className?: string;
   href?: string;
   isActive?: boolean;
   variant: 'outline' | 'filled' | 'icon';
}

export default function Button({ icon, children, className, href, isActive, variant, ...props }: ButtonProps) {
   const baseClasses = cn(
	  'flex items-center gap-2 font-inter px-4 py-1 transition-colors ease-in-out', {
		 'bg-grey-lightest text-black border border-grey-light rounded-lg hover:bg-grey-light': variant === 'outline',
		 'text-primary-dark border-primary-border': variant === 'outline' && isActive,
		 'text-white bg-primary-dark rounded-lg hover:bg-primary-light duration-75': variant === 'filled'
	  }, className
   );

   return href ? (
	  <Link className={baseClasses} href={href}>
		 {children}
		 {icon && icon}
	  </Link>
   ) : (
	  <button className={baseClasses} {...props}>
		 {children}
		 {icon && icon}
	  </button>
   );
}