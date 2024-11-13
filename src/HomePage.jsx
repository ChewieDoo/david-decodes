import { useGlobalContext } from "./Context";
import BlahBlah from "./BlahBlah";

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row mt-9 mb-9 ml-9 mr-0.5'>
      <div className='w-full md:w-1/4'>
        <BlahBlah>
          <h1 className='hello-text mb-6'>Hello, I'm David!</h1>
          <p className='intro-text mb-6 '>I am a product designer</p>
          <p className='intro-text max-w-48'>
            I focus on creating ‘frictionless’ and memorable user experience
          </p>
        </BlahBlah>
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
