import SDSULogo from '/assets/education/SDSU.png';

const Education: React.FC = () => {
    return (
        <div id="Education" className="flex justify-center items-center flex-col h-screen">
            <h1 className="w-1/2 font-bold text-5xl mb-8">Education.</h1>
            <div className="w-full flex justify-center items-center flex-col pt-20">
                <img src={SDSULogo} alt="SDSU logo" className="w-1/2" />

                {/* Ensure flex container has full width */}
                <div className="w-1/2 flex justify-between mt-10">
                    <h1 className="text-2xl font-bold font-montserrat">B.S Computer Science</h1>
                    <h1 className="text-2xl font-bold font-montserrat">Exp.2025</h1>
                </div>
            </div>
        </div>
    );
};

export default Education;
