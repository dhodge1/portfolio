const Description = ({ children, className = '' }) => {
  return (
    <div
      className={`text-2xl md:text-3xl leading-[1.4] font-light ${className}`}
    >
      {children}
    </div>
  );
};

export default Description;
