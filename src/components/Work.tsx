import React, { useRef, useEffect } from 'react';
import dlab from "../assets/work/dlab.png";
import mercedes from "../assets/work/mercedes.png";
import specialforce from "../assets/work/specialforce.png";

interface WorkExperiences {
    date: string;
    title: string;
    work: string;
    description: string;
    logo: JSX.Element; // Keep this as JSX.Element to allow rendering images
}

const Work: React.FC = () => {
    const workHistoryRef = useRef<HTMLDivElement>(null); // useRef to reference the scrollable container

    // Effect to handle horizontal scroll on vertical scroll wheel
    useEffect(() => {
        const scrollContainer = workHistoryRef.current;

        if (scrollContainer) {
            const handleWheel = (event: WheelEvent) => {
                event.preventDefault(); // Prevent the default vertical scroll
                scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally by the amount of vertical scroll
            };

            scrollContainer.addEventListener('wheel', handleWheel);

            return () => scrollContainer.removeEventListener('wheel', handleWheel); // Cleanup on unmount
        }
    }, []);

    const workHistory: WorkExperiences[] = [
        {
            date: "May 2024-current",
            title: "Frontend Developer",
            work: "San Diego State University Digital Innovation Lab",
            description: "As a frontend developer at SDSU Digital Innovation Lab, I lead the development of an AI-powered career mentorship platform for enterprises. Utilizing React, Tailwind CSS, and Django, I build scalable and responsive UI components. I also collaborate with cross-functional teams and deploy applications to Azure, ensuring seamless integration and performance across platforms.",
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

    return (
        <div className="w-full mt-80 overflow-hidden">
            <div className="flex justify-center items-center flex-col">
                <div className="w-1/2 text-left">
            <h1 className="font-bold text-5xl mb-8">Work Experience.</h1>
            </div>
            <div className="relative flex items-center justify-center p-20">
                {/* Use ref for horizontal scroll control */}
                
                <div ref={workHistoryRef} className="lg:w-1/2 h-full lg:overflow-x-scroll lg:whitespace-nowrap no-scrollbar lg:space-x-10">
                    {workHistory.map((item, index) => (
                        <div key={index} className="p-4 inline-block lg:w-[700px] hover:scale-105 ease-in-out duration-300">
                            <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <p>{item.date}</p>
                            <div className="flex-row flex pt-10">
                                {item.logo}  
                                <h2 className="text-2xl pl-4 ">{item.title}</h2>
                            </div>
                            <h3 className="text-gray-500">{item.work}</h3>
                            <p className='text-wrap font-montserrat'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Work;
