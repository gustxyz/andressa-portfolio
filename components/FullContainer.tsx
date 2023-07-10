interface FullontainerProps {
  children: React.ReactNode;
  className?: string;
}

const FullContainer = ({ children, className }: FullContainerProps) => {
  return <div className={`${className} mx-auto `}>{children}</div>;
};

export default FullContainer;
