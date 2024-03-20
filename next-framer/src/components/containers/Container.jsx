import cn from "clsx";

const Container = ({ className = "", children }) => {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
};

export default Container;
