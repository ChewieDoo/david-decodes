import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const handleEmailClick = () => {
  window.location.href = `mailto:${"xdu018@gmail.com"}`;
};

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row mt-9 mb-9 ml-9 mr-0.5'>
      <div className='w-full md:w-1/4'>
        <div className='sticky top-9 flex flex-col justify-center h-screen'>
          <h1 className='hello-text mb-6'>Hello, I am David!</h1>
          <p className='intro-text mb-6 '>I am a product designer</p>
          <p className='intro-text max-w-48'>
            I focus on creating ‘frictionless’ and memorable user experience
          </p>
          <nav className='mt-12'>
            <ul>
              <li className='nav-item mb-4'>Work</li>
              <li className='nav-item mb-4'>Resume</li>
              <li className='nav-item'>Gallery</li>
            </ul>
          </nav>
          <footer className='mt-12 md:mt-60'>
            <div className='flex flex-row gap-3'>
              <NavIcon
                icon={<FaInstagram size='28' />}
                href='https://www.instagram.com/jungkook_bighitentertainment/'></NavIcon>
              <NavIcon
                icon={<FaGithub size='28' />}
                href='https://github.com/ChewieDoo'></NavIcon>
              <NavIcon
                icon={<FaYoutube size='28' />}
                href='https://www.youtube.com/@Zinggzouu'></NavIcon>
              <NavIcon
                icon={
                  <MdEmail size='28' onClick={handleEmailClick} />
                }></NavIcon>
            </div>
          </footer>
        </div>
      </div>
      <div className='w-full md:w-3/4'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='mr-8 mb-12'>
            <img src='src/assets/depop-mockup.jpg' className='mb-2.5'></img>
            <div className='mb-4'>
              <ul className='tag-text flex flex-row gap-1'>
                <li className='tag-box-1'>E-commerce</li>
                <li className='tag-box-1'>Added-feature</li>
                <li className='tag-box-1'>Sustainability</li>
              </ul>
            </div>
            <div>
              <h2 className='casestudy-title-text mb-3'>Depop</h2>
              <p className='casestudy-p-text mb-6'>
                How to introduce and integrate a cloth-rental feature onto a
                popular e-commerce and online thrifting mobile app?
              </p>
              <a
                className='button-text button-box'
                href='https://juniper-room-602.notion.site/Rent-a-Depop-48ae1bd3a910401bb4e2f37ca0f4df20?pvs=74'>
                VIEW CASE STUDY
              </a>
            </div>
          </div>
          <div className='mr-8 mb-12'>
            <img src='src/assets/zara-mockup.jpg' className='mb-2.5'></img>
            <div className='mb-4'>
              <ul className='tag-text flex flex-row gap-1'>
                <li className='tag-box-2'>Fashion</li>
                <li className='tag-box-2'>Responsive Web Design</li>
                <li className='tag-box-2'>Navigation</li>
              </ul>
            </div>
            <div>
              <h2 className='casestudy-title-text mb-4'>Zara</h2>
            </div>
            <div>
              <p className='casestudy-p-text mb-6'>
                How to help online shoppers easily find products and unique
                clothing collections on a fast-fashion website?
              </p>
            </div>
            <div>
              <a
                className='button-text button-box'
                href='https://juniper-room-602.notion.site/Frictionless-Fashion-e42e92b056c2427283b3b3f206a64623?pvs=74'>
                VIEW CASE STUDY
              </a>
            </div>
          </div>
          <div className='mr-8 mb-12'>
            <img src='src/assets/fearless-mockup.jpg' className='mb-2.5'></img>
            <div className='mb-4'>
              <ul className='tag-text flex flex-row gap-1'>
                <li className='tag-box-3'>Web Development</li>
                <li className='tag-box-3'>JavaScript</li>
                <li className='tag-box-3'>React Framework</li>
                <li className='tag-box-3'>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h2 className='casestudy-title-text mb-4'>KPOP</h2>
            </div>
            <div>
              <p className='casestudy-p-text mb-6'>
                How to develop a reactive website for award-winning Kpop girl
                group LeSserafim with ReactJS and Tailwind CSS framework?
              </p>
            </div>
            <div>
              <a
                className='button-text button-box'
                href='https://github.com/ChewieDoo/fearless2'>
                VIEW CASE STUDY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavIcon = ({ icon, href, text }) => {
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

export default HomePage;
