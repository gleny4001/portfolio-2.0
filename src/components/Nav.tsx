import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  href: string;
  children: React.ReactNode;
  className: string;
  setPosition: (position: { left: number; width: number; opacity: number }) => void;
}

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Tab: React.FC<TabProps> = ({ children, setPosition, href }) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
   <a href={href}>
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-s uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
    </a>
  );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    ></motion.li>
  );
};

const Nav: React.FC = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition} href="#home" className="text-lg font-medium text-gray-700 hover:text-blue-500">
        Home
      </Tab>
      <Tab setPosition={setPosition} href="#work" className="text-lg font-medium text-gray-700 hover:text-blue-500">
        Work
      </Tab>
      <Tab setPosition={setPosition} href="#skills" className="text-lg font-medium text-gray-700 hover:text-blue-500">
        Skills
      </Tab>
      <Tab setPosition={setPosition} href="#Education" className="text-lg font-medium text-gray-700 hover:text-blue-500">
        Education
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

export default Nav;
