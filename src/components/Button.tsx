import React from 'react';
import clsx from 'clsx';
export default function Button({ children, variant='primary', className='', ...props }: any) {
  const variantClasses: any = { primary: 'bg-primary-500 text-white', secondary: 'bg-white border', ghost: 'bg-transparent' };
  return <button {...props} className={clsx('px-3 py-1 rounded-md', variantClasses[variant], className)}>{children}</button>;
}
