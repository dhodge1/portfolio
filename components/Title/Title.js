const Title = ({ title, className = '' }) => {
  return <h1 className={`font-serif text-8xl ${className}`}>{title}</h1>;
};

export default Title;
