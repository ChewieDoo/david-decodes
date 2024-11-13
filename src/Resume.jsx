import BlahBlah from "./BlahBlah";

const Resume = () => {
  return (
    <div className='flex flex-col md:flex-row mt-9 mb-9 ml-9 mr-0.5'>
      <div className='w-full md:w-1/4'>
        <BlahBlah>
          <h1 className='hello-text mb-6'>This is my resumé.</h1>
          <p className='intro-text mb-6 max-w-48 '>A summary of my career.</p>
          <p className='intro-text max-w-48'>
            Working in big corporate, currently getting into freelance design.
          </p>
        </BlahBlah>
      </div>
    </div>
  );
};

export default Resume;
