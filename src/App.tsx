import Title from "./components/Title"
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
function App() {


  return (
    <div className="w-full min-h-screen bg-background">
      <Header/>
      <Title/>
      <About/>
      <Work/>
    </div>
  )
}

export default App
