const SectionContainer = ({
  id = "",
  className = "",
  style = {},
  children,
}) => {
  return (
    <section id={id} className={className} style={style}>
      {children}
    </section>
  );
};

export default SectionContainer;
