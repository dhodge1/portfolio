import Avatar from '../Avatar/Avatar';
import Nav from '../Nav/Nav';

const Header = ({ nav, avatar, className = '' }) => {
  return (
    <div
      className={`bg-background sticky top-0 md:-top-[64px] flex items-center h-[72px] md:h-[136px] z-10 opacity-95 ${className}`}
    >
      <div className="w-full flex justify-between items-center sticky top-0 h-[72px]">
        <Avatar {...avatar} />
        <Nav {...nav} />
      </div>
    </div>
  );
};

export default Header;
