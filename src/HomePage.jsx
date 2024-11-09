import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useGlobalContext } from "./Context";

const HomePage = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${"xdu018@gmail.com"}`;
  };
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
          <CaseStudyCard id='0' />
          <CaseStudyCard id='1' />
          <CaseStudyCard id='2' />
        </div>
      </div>
    </div>
  );
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

const CaseStudyCard = ({ id }) => {
  const { caseStudies } = useGlobalContext();
  return (
    <div className='mr-8 mb-12'>
      <img src={caseStudies[id].coverPhoto} className='mb-2.5'></img>
      <div className='mb-4'>
        <ul className='tag-text flex flex-row gap-1'>
          {caseStudies[id].tags.map((tag, index) => (
            <li className={caseStudies[id].themeColor} key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='casestudy-title-text mb-3'>{caseStudies[id].name}</h2>
        <p className='casestudy-p-text mb-6'>{caseStudies[id].text}</p>
        <a className='button-text button-box' href={caseStudies[id].link}>
          VIEW CASE STUDY
        </a>
      </div>
    </div>
  );
};

export default HomePage;
