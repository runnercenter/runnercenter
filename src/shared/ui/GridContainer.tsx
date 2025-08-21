import type { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4 | 5;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const columnsConfig = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
};

const gapConfig = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8'
};

export function GridContainer({ 
  children, 
  columns = 5, 
  gap = 'md', 
  className = '' 
}: GridContainerProps) {
  return (
    <div className={`grid ${columnsConfig[columns]} ${gapConfig[gap]} ${className}`}>
      {children}
    </div>
  );
}
