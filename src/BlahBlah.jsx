import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
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
    <footer className='mt-12 md:mt-52'>
      <div className='flex flex-row gap-4'>
        <NavIcon
          icon={<FaInstagram size='22' />}
          href='https://www.instagram.com/jungkook_bighitentertainment/'></NavIcon>
        <NavIcon
          icon={<FaGithub size='22' />}
          href='https://github.com/ChewieDoo'></NavIcon>
        <NavIcon
          icon={<FaYoutube size='22' />}
          href='https://www.youtube.com/@Zinggzouu'></NavIcon>
        <NavIcon
          icon={<MdEmail size='22' onClick={handleEmailClick} />}></NavIcon>
      </div>
    </footer>
  );
};

export default BlahBlah;
