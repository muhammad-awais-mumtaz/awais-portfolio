import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Home from "./routes/home/Home.component";
import Projects from "./routes/projects/Projects.component";
import About from "./routes/about/About.component";
import Contact from "./routes/contact/Contact.component";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
