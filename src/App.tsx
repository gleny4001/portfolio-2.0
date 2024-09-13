import Title from "./components/Title"
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
function App() {


  return (
    <div className="w-full min-h-screen bg-background">
      <Header/>
      <Title/>
      <About/>
      <Work/>
      <Skills/>
      <Nav/>
    </div>
  )
}

export default App
