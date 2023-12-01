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
  isLast?: boolean;
}

function NavLink({ to, spy, smooth, duration, title, icon: Icon, activeSection, isScroll,isLast }: NavLinkProps) {
  return (
    <>
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
    {!isLast && (
      <div style={{ width: 40, background: "#ffffff6a", borderRadius: 5, height: 1 }} />
    )}
  </>
    
  );
}

export default NavLink;
