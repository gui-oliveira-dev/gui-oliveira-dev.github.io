import { AboutMeText } from "../../Helpers/data"
import profile from '../../assets/profile-image.jpg'
import { aboutImg, aboutSection, aboutText, aboutTitle } from "../../Styles/AboutStyles"

function AboutMe() {
  return (
    <section className={aboutSection}>
      <h2 className={aboutTitle}>Sobre Mim</h2>
      <img className={aboutImg} src={ profile } alt="" />
      <p className={aboutText}>{AboutMeText}</p>

    </section>
  )
}

export default AboutMe
