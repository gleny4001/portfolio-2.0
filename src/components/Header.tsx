import GitHubIcon from '../assets/github';
import LinkedInIcon from '../assets/linkedin';
const Header: React.FC = () => {
    return (
      <div className="w-full h-14 flex justify-end items-center pr-4">
        <div className="flex flex-row space-x-4 justify-center items-center">
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
        </div>
      </div>
    );
  };
  
  export default Header;