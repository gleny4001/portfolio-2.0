import {motion} from "framer-motion";
import { FC } from 'react';


interface SkillProps {
    name: string;
    x: string;
    y: string;
  }

const Skill:FC<SkillProps> = ({name, x, y}) => {
    return ( <motion.div 
        whileHover={{scale:1.1}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}

        className='flex py-3 px-6 absolute cursor-pointer items-center justify-center rounded-full font-semibold bg-black text-white shadow-dark'>
            {name}
        </motion.div>                
    );
}

const Skills:React.FC = () =>{

    return (
        <div className="w-full flex items-center justify-center flex-col">
        <h2 className="font-bold text-5xl mt-64 w-1/2">Skills.</h2>
            <div className='w-3/4  relative flex items-center justify-center rounded-full bg-circularLight'
               style={{ height: "calc(100vh - 400px)" }}>

                <motion.div 
                whileHover={{scale:1.1}}
                className='flex cursor-pointer items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-dark'>
                    web
                </motion.div>                
                <Skill name="HTML" x="-25vw" y="2vw"/>
                <Skill name="CSS" x="-5vw" y="-10vw"/>
                <Skill name="Javascript" x="20vw" y="6vw"/>
                <Skill name="Typescript" x="0vw" y="12vw"/>
                <Skill name="Python" x="-20vw" y="-15vw"/>
                <Skill name="React" x="15vw" y="-12vw"/>
                <Skill name="Node.js" x="32vw" y="-5vw"/>
                <Skill name="Web design" x="0" y="-20vw"/>
                <Skill name="Figma" x="-5vw" y="-10vw"/>
                <Skill name="Tailwind CSS" x="25vw" y="20vw"/>
                <Skill name="Figma" x="-25vw" y="18vw"/>
            </div>
        </div>
    )
}

export default Skills