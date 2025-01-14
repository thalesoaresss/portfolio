import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/Bootstrap.svg',
    label: 'Bootstrap',
    desc: 'User Interface'
  },
];

const Skill = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h2 className="headline-2">
            Principais Ferramentas que Eu Uso
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Conheça as ferramentas e tecnologias poderosas que uso para desenvolver sites e aplicativos otimizados e responsivos.</p>
          <div className="grid gap-3 grid-skills">
            {skillItem.map(({imgSrc, label, desc}, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skill
