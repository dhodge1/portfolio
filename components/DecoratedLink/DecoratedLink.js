import Link from 'next/link';

const generatePsuedoElementClasses = (
  classString,
  elements = ['before', 'after'],
) => {
  const classes = classString.split(' ');
  const updatedClasses = classes
    .map((klass) => elements.map((element) => `${element}:${klass}`).join(' '))
    .join(' ')
    .trim();
  return updatedClasses;
};

const DecoratedLink = ({
  href,
  text,
  className = '',
  color = 'after:bg-primary',
}) => {
  // const sharedPsuedoElementClasses = generatePsuedoElementClasses(
  //   'block h-4 absolute left-0 right-0 bottom-0 -z-[1]',
  // );
  // const beforeClasses = generatePsuedoElementClasses('bg-border', ['before']);
  // const afterClasses = generatePsuedoElementClasses(
  //   'bg-primary scale-x-0 origin-[0 50%] transition-transform duration-300',
  //   ['after'],
  // );
  // const psuedoClasses = [
  //   sharedPsuedoElementClasses,
  //   beforeClasses,
  //   afterClasses,
  // ].join(' ');
  const linkClasses = `relative text-inherit hover:text-inherit focus:text-inherit inline-block before:block after:block before:h-4 after:h-4 before:absolute after:absolute before:left-0 after:left-0 before:right-0 after:right-0 before:bottom-0 after:bottom-0 before:-z-[1] after:-z-[1] before:bg-border after:bg-primary after:scale-x-0 after:origin-[0 after:50%] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:scale-x-100 ${
    color && color
  } `;
  return (
    <Link href={href}>
      <a className={`${linkClasses} ${className}`}>{text}</a>
    </Link>
  );
};

export default DecoratedLink;
