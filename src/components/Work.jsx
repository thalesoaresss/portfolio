import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack resumidor com IA',
    tags: ['API', 'IA', 'Development'],
    projectLink: 'https://resumeeai.netlify.app/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Gerador de senhas pessoal',
    tags: ['JS', 'PASSWORD'],
    projectLink: 'https://gerador-senhas-sd.netlify.app/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Landing Page Spotify',
    tags: ['Development', 'Design', 'Music', 'Responsive'],
    projectLink: 'https://spotify-sd.netlify.app/'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Landing Page Finans',
    tags: ['Web-design', 'Development', 'Responsive'],
    projectLink: 'https://finans-sd.netlify.app/'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'App Controle Financeiro',
    tags: ['Development', 'Responsive', 'Money' ],
    projectLink: 'https://controle-financeiro-sd.netlify.app/'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Jogo de ping-pong',
    tags: ['JS', 'Game', 'Browser'],
    projectLink: 'pingpong-sd.netlify.app'
  },
  {
    imgSrc: '/images/project-7.jpg',
    title: 'Web-site para captação de clientes',
    tags: ['Web-design', 'Development', 'Photos'],
    projectLink: 'https://betogesso.netlify.app/'
  },
  {
    imgSrc: '/images/project-8.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'API', 'Pokemon'],
    projectLink: 'https://pokedex-thales-sd.netlify.app/'
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">Alguns dos Meus Projetos</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cards">
          {works.map(({imgSrc, title, tags, projectLink}, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
        <div className="mt-3">
          <a href="https://github.com/thalesoaresss" className="text-zinc-400 mt-8 pt-6 max-w-[50ch] hover:text-zinc-100 active:text-zinc-400 transition-colors text-xl" target="blank">Confira mais projetos no meu github </a>
        </div>
      </div>
    </section>
  )
}

export default Work
