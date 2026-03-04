interface MyGrids {
  children?: React.ReactNode;
  className?: string;
}

const formGrid = (GridForm: MyGrids) => {
  const { children, className } = GridForm;
  const defaultClass = `grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-3 mb-2`;

  return (
    <>
      <div className={`${defaultClass} ${className || ""}`}>{children}</div>
    </>
  );
};

export default formGrid;
