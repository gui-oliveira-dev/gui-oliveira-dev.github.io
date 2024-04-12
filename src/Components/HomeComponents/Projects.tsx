import { ProjectList } from "../../Helpers/data";
import { containerProjects } from "./ProjectsStyles";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className={ containerProjects }>
      {
        ProjectList.map((project) => (
          <ProjectCard project={ project }/>
        ))
      }
    </div>
  )
}

export default Projects;
