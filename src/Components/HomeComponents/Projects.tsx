import { ProjectList } from "../../Helpers/data";
import { containerProjects, sectionTitle } from "./Styles/ProjectsStyles";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <h2 className={ sectionTitle }>Meus Projetos</h2>
      <div className={ containerProjects }>
        {
          ProjectList.map((project) => (
            <ProjectCard project={ project }/>
          ))
        }
      </div>
    </>
  )
}

export default Projects;
