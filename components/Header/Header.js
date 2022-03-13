import Avatar from '../Avatar/Avatar';
import Nav from '../Nav/Nav';

const Header = ({ nav, avatar }) => {
  return (
    <div className="flex justify-between items-center w-full py-4 md:py-12">
      <Avatar {...avatar} />
      <Nav {...nav} />
    </div>
  );
};

export default Header;
