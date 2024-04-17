import { h1text, h2text, heroStyle, imagestyle, textContainer } from "./Styles/HeroStyles"

function HeroSection() {
  return (
    <section className={heroStyle}>
      <div className={textContainer}>
        <h2 className={h2text}>Olá, Meu nome é</h2>
        <h1 className={h1text}>Guilherme Oliveira</h1>
        <h2 className={h2text}>e sou desenvolvedor front-end</h2>
      </div>
      <img className={imagestyle} src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png" alt="" />
    </section>
  )
}

export default HeroSection
