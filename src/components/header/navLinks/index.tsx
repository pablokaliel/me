import { Link } from 'react-scroll';
import { IconType } from 'react-icons';

interface NavLinkProps {
  to: string;
  spy?: boolean;
  smooth?: boolean;
  duration?: number;
  title: string;
  icon: IconType;
  activeSection: string;
  isScroll: boolean;
}

function NavLink({ to, spy, smooth, duration, title, icon: Icon, activeSection, isScroll }: NavLinkProps) {
  return (
    <Link
      to={to}
      spy={spy || true}
      smooth={smooth || true}
      duration={duration || 600}
      style={{
        color: activeSection === to ? '#7440aa' : '#fff',
        cursor: 'pointer',
      }}
    >
      <Icon
        style={{ transition: 'width 0.36s ease-in-out, height 0.36s ease-in-out' }}
        size={isScroll ? 16 : 20}
      />
      {title}
    </Link>
  );
}

export default NavLink;
