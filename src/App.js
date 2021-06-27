import "./App.css";

import {
  Home,
  Projects,
  Skills,
  Experience,
  NavBar,
  Footer,
} from "./components/views/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
