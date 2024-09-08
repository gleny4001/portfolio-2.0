import React from 'react';

const Title: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between py-40 min-h-max">
      <div className="w-fit">
        <div className="flex items-start text-left space-y-8">
          <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-bold leading-tight overflow-hidden">
            <span className="inline-flex flex-col h-[1.6em] overflow-hidden ">
              <ul className="block animate-text-slide text-left leading-tight space-y-6 min-w-fit">
                <li className=" flex items-center">Designer</li>
                <li className="flex items-center">Artist</li>
                <li className=" flex items-center">Frontend</li>
                <li className=" flex items-center">Fullstack</li>
                <li className="flex items-center">Innovator</li>
                <li className=" flex items-center">Leader</li>
                <li className="flex items-center">Engineer</li>
                <li className="flex items-center" aria-hidden="true">Designer</li>

              </ul>
            </span>
          </h1>
          <div className="ml-4">
            <p className="text-md sm:text-lg">in San Diego,</p>
            <p className="text-md sm:text-lg">California 🌊</p>
          </div>
        </div>
        <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic mt-4 text-right">/Software Engineer</h2>
      </div>
    </div>
  );
};

export default Title;
