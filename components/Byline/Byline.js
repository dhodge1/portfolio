const Byline = ({ children, className = '' }) => {
  return (
    <p
      className={`text-lg uppercase font-bold text-primary tracking-wide ${className}`}
    >
      {children}
    </p>
  );
};

export default Byline;
