import { Link } from "react-router-dom"
import { CardStyle, cardImage } from "../../Styles/ProjectsStyles"

type PropType = {
  project : {
    name: string
    image: string
    description: string
    link: string
    github: string
  }
}

function ProjectCard({ project }: PropType) {
  return (
    <div className={ CardStyle }>
      <h1>{project.name}</h1>
      <img className={ cardImage } src={project.image} alt={project.name} />
      <Link to={`projects/${project.link}`} >Ver Projeto</Link>
    </div>
  )
}

export default ProjectCard
