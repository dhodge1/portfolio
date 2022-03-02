import NavItem from '../NavItem/NavItem';

// TODO: Refactor to compose children
const Nav = ({ items }) => {
  const navClasses = 'flex';
  const listClasses = 'flex';
  return (
    <nav className={navClasses}>
      <ul className={listClasses}>
        {items && items.map((item) => <NavItem key={item.text} {...item} />)}
      </ul>
    </nav>
  );
};

export default Nav;
