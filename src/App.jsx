import { Fragment } from "react"
import './App.css'
import LandingPage from "./layouts/LandingPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import Form from "./components/Form/Form";

function App() {
  
  return (
    <Fragment>
      <LandingPage />
      <ProjectsPage />
      <Form />
    </Fragment>
  )
}

export default App
