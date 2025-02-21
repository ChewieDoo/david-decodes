import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BlahBlah = ({ children }) => {
  return (
    <div className='sticky top-9 flex flex-col justify-center h-screen mt-2'>
      {children}
      <NavCol />
      <Socials />
    </div>
  );
};

const NavCol = () => {
  return (
    <nav className='mt-12'>
      <ul>
        <li className='mb-4'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "nav-item-active Sk-Modernist-Bold"
                : "nav-item Sk-Modernist"
            }>
            Work
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink
            to='/resume'
            className={({ isActive }) =>
              isActive
                ? "nav-item-active Sk-Modernist-Bold"
                : "nav-item Sk-Modernist"
            }>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/gallery'
            className={({ isActive }) =>
              isActive
                ? "nav-item-active Sk-Modernist-Bold"
                : "nav-item Sk-Modernist"
            }>
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Socials = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${"xdu018@gmail.com"}`;
  };

  const NavIcon = ({ icon, href }) => {
    if (href) {
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='socials-icon group'>
          {icon}
        </a>
      );
    }
    return <div className='socials-icon group'>{icon}</div>;
  };

  return (
    <footer className='mt-8 md:mt-36'>
      <p className='mb-4 Sk-Modernist'>Let's talk &#58;&#41;</p>
      <div className='flex flex-row gap-4'>
        <NavIcon icon={<MdEmail size='22' onClick={handleEmailClick} />} />
        <NavIcon
          icon={<FaGithub size='22' />}
          href='https://github.com/ChewieDoo'
        />
        <NavIcon
          icon={<FaInstagram size='22' />}
          href='https://www.instagram.com/jungkook_bighitentertainment/'
        />
        <NavIcon
          icon={<FaLinkedin size='22' />}
          href='https://www.linkedin.com/in/xdu071/'
        />
      </div>
    </footer>
  );
};

export default BlahBlah;
