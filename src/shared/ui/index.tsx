interface LoadingProps {
  className?: string;
}

export function Loading({ className = '' }: LoadingProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export function ErrorMessage({ message, className = '' }: ErrorMessageProps) {
  return (
    <div className={`text-red-600 text-center py-4 ${className}`}>
      <p>{message}</p>
    </div>
  );
}

export { Layout } from './Layout';
export { GridContainer } from './GridContainer';
