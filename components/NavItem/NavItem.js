import { useRouter } from 'next/router';
import Link from 'next/link';

const NavItem = ({ href, text, isActive }) => {
  const router = useRouter();
  const isActiveItem = router.asPath.includes('#')
    ? router.asPath.includes(href)
    : isActive;
  const itemClasses = `${
    isActiveItem && 'after:!bg-primary after:transform-none'
  } list-none relative after:block after:h-1 after:bg-border after:absolute after:inset-x-5 -after:bottom-1 after:scale-x-0 after:origin-[0 50%] after:transition-transform after:duration-300 hover:after:scale-x-100`;

  const linkClasses = `${
    isActiveItem && 'text-text'
  } flex items-center relative z-10 py-3 px-5 leading-none whitespace-nowrap lowercase text-text transition-colors`;
  return (
    <li className={itemClasses} key={text}>
      <Link href={href} scroll={false} prefetch={false}>
        <a className={linkClasses}>{text}</a>
      </Link>
    </li>
  );
};

export default NavItem;
