import { CardStyle, cardImage } from "./Styles/ProjectsStyles"

type PropType = {
  project : {
    name: string
    image: string
    description: string
  }
}

function ProjectCard({ project }: PropType) {
  return (
    <div className={ CardStyle }>
      <h1>{project.name}</h1>
      <img className={ cardImage } src={project.image} alt={project.name} />
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard
