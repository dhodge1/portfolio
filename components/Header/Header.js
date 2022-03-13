import Avatar from '../Avatar/Avatar';
import Nav from '../Nav/Nav';

const Header = ({ nav, avatar }) => {
  return (
    <div className="bg-background sticky top-0 flex justify-between items-center w-full py-4 md:py-12 z-10">
      <Avatar {...avatar} />
      <Nav {...nav} />
    </div>
  );
};

export default Header;
