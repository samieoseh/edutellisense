type Props = {
  children: string | JSX.Element | JSX.Element[];
  className: string;
};
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`mx-auto mt-8 flex items-center justify-center flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
