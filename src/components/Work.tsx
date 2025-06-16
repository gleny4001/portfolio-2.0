import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dlab from "/assets/work/dlab.png";
import mercedes from "/assets/work/mercedes.png";
import specialforce from "/assets/work/specialforce.png";

interface WorkExperiences {
    date: string;
    title: string;
    work: string;
    description: string;
    logo: JSX.Element;
}

const Work: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const workHistory: WorkExperiences[] = [
        {
            date: "May 2024-current",
            title: "Software Engineer",
            work: "San Diego State University Digital Innovation Lab",
            description: "As a software engineer at SDSU Digital Innovation Lab, I lead the development of an AI-powered career mentorship platform for enterprises. Utilizing React, Tailwind CSS, and Django, I build scalable and responsive UI components. I also collaborate with cross-functional teams and deploy applications to Azure, ensuring seamless integration and performance across platforms.",
            logo: <img src={dlab} alt="DLab Logo" className="w-10 h-10 rounded-lg" />
        },
        {
            date: "Oct 2022- May 2023",
            title: "Software Engineer Intern",
            work: "Mercedes-Benz",
            description: "During my internship at Mercedes-Benz, I specialized in automation and application development. My role involved building automated systems to streamline internal workflows, developing web applications, and ensuring software reliability through rigorous testing. This experience enhanced my skills in full-stack development, with a focus on innovative problem-solving and high-quality engineering standards.",
            logo: <img src={mercedes} alt="Mercedes Logo" className="w-10 h-10" />
        },
        {
            date: "Oct 2022- May 2023",
            title: "ROK Special Operations Command",
            work: "1st Airborne Special Forces Brigade",
            description: "Serving in the 1st Airborne Special Forces Brigade, I developed strong leadership, discipline, and problem-solving skills under high-pressure conditions. My experience in mission-critical operations and complex strategic planning honed my ability to adapt quickly and work effectively in fast-paced environments, skills that I now apply to my engineering work.",
            logo: <img src={specialforce} alt="Special Forces Logo" className="w-10 h-10" />
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === workHistory.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? workHistory.length - 1 : prevIndex - 1
        );
    };

    return (
        <div id="work" className="w-full mt-80">
            <div className="max-w-6xl mx-auto px-8">
                <h1 className="font-bold text-5xl mb-16 text-center">Work Experience.</h1>
                
                <div className="relative">
                    {/* Main carousel container */}
                    <div className="relative overflow-hidden rounded-xl p-8 px-16">
                        <div className="transition-transform duration-500 ease-out"
                             style={{ transform: `translateX(-${currentIndex * 200}%)` }}>
                            <div className="flex">
                                {workHistory.map((item, index) => (
                                    <div key={index} 
                                         className="w-full flex-shrink-0 px-4"
                                         style={{ transform: `translateX(${index * 100}%)` }}>
                                        <div className="space-y-6">
                                            {/* Date badge */}
                                            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                                                {item.date}
                                            </div>
                                            
                                            {/* Title and logo section */}
                                            <div className="flex items-center space-x-4">
                                                <div className="p-2 bg-gray-50 rounded-lg">
                                                    {item.logo}
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                                    <h3 className="text-gray-600">{item.work}</h3>
                                                </div>
                                            </div>
                                            
                                            {/* Description */}
                                            <p className="text-gray-700 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation arrows */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dot indicators */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 ">
                            {workHistory.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;