import Title from './components/Title';
import About from './components/About';
import Header from './components/Header';
import Work from './components/Work';
import Skills from './components/Skills';
import Nav from './components/Nav';
import Education from './components/Education';
import MainProject from './components/Projects/MainProject';
import AIChat from './components/AIChat';

function App() {
    return (
        <div className="min-h-screen w-full bg-background">
            <Header />
            <Title />
            <About />
            <Work />
            <Skills />
            <MainProject />
            <Education />
            <Nav />
            <AIChat />
        </div>
    );
}

export default App;
