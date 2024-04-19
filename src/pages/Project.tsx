import { useEffect, useState } from "react";
import { ProjectList } from "../Helpers/data";
import { useParams } from "react-router-dom";
import { ProjectListType } from "../Helpers/types";
import { ProjectContainerstl, ProjectDescriptionstl, ProjectGitstl, ProjectImageStl, ProjectNameStl } from "../Styles/ProjectPageStyles";


function Project() {
  const params = useParams();
  const [data, setData] = useState<ProjectListType>()

  useEffect(() => {
    const finder = ProjectList.find((item) => item.link === params.project)
    setData(finder)
  }, [])

  return (
    <section className={ProjectContainerstl}>
      <h1 className={ProjectNameStl}>{data?.name}</h1>
      <img className={ProjectImageStl} src={data?.image} alt="" />
      <p className={ProjectDescriptionstl}>{data?.description}</p>
      <a target="_blank" href={data?.github}>
        <button className={ProjectGitstl}>Ver Projeto no GitHub</button>
      </a>
    </section>
  )
}

export default Project;
