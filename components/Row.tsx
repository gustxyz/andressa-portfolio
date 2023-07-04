interface RowProps {
  children: React.ReactNode;
  direction: string;
  className?: string;
}

const Row = ({ children, direction, className = "" }: RowProps) => {
  const getDirection = (direction: string) => {
    if (direction === "right") return "lg:flex-row-reverse";
    else return "lg:flex-row";
  };
  return (
    <div
      className={`flex flex-col ${className} ${getDirection(
        direction
      )} justify-between items-center`}
    >
      {children}
    </div>
  );
};

export default Row;
