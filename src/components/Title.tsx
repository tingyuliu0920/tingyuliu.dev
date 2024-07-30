type TitleProps = {
  children: string;
  size?: "text-2xl" | "text-3xl";
};

const Title = ({ children, size = "text-2xl" }: TitleProps) => {
  return (
    <h3
      className={`${size} font-bold leading-loose text-green dark:text-slate-300`}
    >
      {children}
    </h3>
  );
};

export default Title;
