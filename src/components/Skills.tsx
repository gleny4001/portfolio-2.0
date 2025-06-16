import SpotlightCard from '../blocks/Components/SpotlightCard/SpotlightCard';
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaDatabase,
    FaPython,
    FaBrain,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiPostgresql, SiFirebase, SiNextdotjs } from 'react-icons/si';
import { IconType } from 'react-icons';

type CardProps = {
    name: string;
    Icon: IconType;
    color: string;
};

const Card: React.FC<CardProps> = ({ name, Icon, color }) => {
    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor={color}>
            <div className="flex items-center space-x-4 p-4">
                <Icon className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" color="white" />
                <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">{name}</h1>
            </div>
        </SpotlightCard>
    );
};

const skills: CardProps[] = [
    { name: 'HTML', Icon: FaHtml5, color: 'rgba(227, 76, 38, 0.7)' },
    { name: 'CSS', Icon: FaCss3Alt, color: 'rgba(38, 77, 228, 0.7)' },
    { name: 'JavaScript', Icon: FaJsSquare, color: 'rgba(247, 223, 30, 0.7)' },
    { name: 'TypeScript', Icon: SiTypescript, color: 'rgba(0, 122, 204, 0.7)' },
    { name: 'React', Icon: FaReact, color: 'rgba(97, 218, 251, 0.7)' },
    { name: 'Next.js', Icon: SiNextdotjs, color: 'rgba(24, 24, 24, 0.7)' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: 'rgba(56, 189, 248, 0.7)' },
    { name: 'Node.js', Icon: FaNodeJs, color: 'rgba(88, 166, 70, 0.7)' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: 'rgba(49, 99, 140, 0.7)' },
    { name: 'Firebase', Icon: SiFirebase, color: 'rgba(255, 204, 0, 0.7)' },
    { name: 'Docker', Icon: FaDocker, color: 'rgba(0, 123, 255, 0.7)' },
    { name: 'Git', Icon: FaGitAlt, color: 'rgba(240, 80, 51, 0.7)' },
    { name: 'SQL', Icon: FaDatabase, color: 'rgba(87, 111, 160, 0.7)' },
    { name: 'Python', Icon: FaPython, color: 'rgba(53, 114, 165, 0.7)' },
    { name: 'AI Integration', Icon: FaBrain, color: 'rgba(255, 99, 132, 0.7)' },
];

const Skills: React.FC = () => {
    return (
        <div id="skills" className="flex w-full flex-col items-center justify-center">
            <h2 className="mt-64 text-5xl font-bold">Skills.</h2>
            <div className="grid grid-cols-1 gap-6 p-16 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, i) => (
                    <Card key={i} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
