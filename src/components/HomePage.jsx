import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { useGlobalContext } from "../context/Context";
import BlahBlah from "./BlahBlah";
import SmallFooter from "./content/SmallFooter";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col md:flex-row my-9 ml-9 mr-0.5'>
      <div className='w-full md:w-1/4'>
        <BlahBlah>
          <h1 className='hello-text mb-6 Sk-Modernist'>Hello, I'm David!</h1>
          <p className='intro-text mb-6 Sk-Modernist'>
            I am a product designer.
          </p>
          <p className='intro-text max-w-48 Sk-Modernist'>
            I focus on creating ‘frictionless’ and memorable user experience.
          </p>
        </BlahBlah>
      </div>
      <div className='w-full md:w-3/4'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <CaseStudyCard id='0' />
          <CaseStudyCard id='2' />
          <CaseStudyCard id='1' />
          <CaseStudyCard id='3' />
        </div>
        <SmallFooter />
      </div>
    </div>
  );
};

const CaseStudyCard = ({ id }) => {
  const { caseStudies } = useGlobalContext();
  return (
    <div className='mr-8 mb-12'>
      <NavLink to={`${caseStudies[id].link}`}>
        <img src={caseStudies[id].coverPhoto} className='mb-2.5' />{" "}
      </NavLink>
      <div className='mb-4'>
        <ul className='tag-text flex flex-row gap-1 Sk-Modernist-bold'>
          {caseStudies[id].tags.map((tag, index) => (
            <li className={caseStudies[id].themeColor} key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='casestudy-title-text mb-3 Sk-Modernist'>
          {caseStudies[id].name}
        </h2>
        <p className='casestudy-p-text mb-6 Sk-Modernist'>
          {caseStudies[id].text}
        </p>
        {caseStudies[id].codeSource ? (
          <div>
            <NavLink to={`${caseStudies[id].link}`}>
              <button className='button-text button-box Sk-Modernist-Bold'>
                VIEW WEB APP
              </button>
            </NavLink>
            <NavLink
              to={`${caseStudies[id].codeSource}`}
              className='md:ml-2 ml-1'>
              <button className='button-text button-box-white Sk-Modernist-Bold'>
                VIEW SOURCE CODE
              </button>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to={`${caseStudies[id].link}`}>
              <button className='button-text button-box Sk-Modernist-Bold'>
                VIEW CASE STUDY
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
