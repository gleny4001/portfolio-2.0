import GitHubIcon from '../../public/assets/header/github';
import LinkedInIcon from '../../public/assets/header/linkedin';
const Header: React.FC = () => {
    return (
      <header className="w-full h-14 flex justify-between items-center px-4">
        <h1 className="text-2xl font-abrilFatface tracking-wider">Glen Yang</h1>
        <nav className="flex flex-row space-x-4 justify-center items-center">
            <a target="_blank" href="https://www.linkedin.com/in/glenyang/">
            <LinkedInIcon/>
            </a>
            <a target="_blank" href="https://github.com/gleny4001">
        <GitHubIcon/>
        </a>
        <a target="_blank" href="https://docs.google.com/document/d/18pjJV4XeGgsBzjfgTwOYHGAF68wDsy-C-xxrq-qlSq8/pub">
        <button className="w-24 h-10 rounded-lg border border-black hover:bg-white transition-colors">
          Resume
        </button>
        </a>
        </nav>
      </header>
    );
  };
  
  export default Header;