import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path="projects" element={ <MyProjects /> } />
      </Route>
    </Routes>
  )
}