import React from 'react';

const Title: React.FC = () =>{
    return ( <div className="flex flex-col items-center justify-between py-40 min-h-max">
        <div className="lg:w-3/4 xl:w-1/2">
          {/* First line - Designer */}
          <div className="flex items-start text-left space-y-8">
            <h1 className="text-6xl md:text-9xl lg:text-title font-bold leading-tight">Designer</h1>
            <div className="ml-4">
              <p className="text-md sm:text-lg">in San Diego</p>
              <p className="text-md sm:text-lg">California 🌊</p>
            </div>
          </div>
          {/* Second line - /Software Engineer */}
          <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic mt-4 text-right">/Software Engineer</h2>
        </div>
      </div>)

}

export default Title;