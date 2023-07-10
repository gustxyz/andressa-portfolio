interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${className} max-w-6xl mx-auto px-4 sm:px-6`}>
      {children}
    </div>
  );
};

export default Container;
