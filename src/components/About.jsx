
const aboutItems = [
  {
    label: 'Projetos finalizados',
    number: 14
  },
  {
    label: 'Anos de experiência',
    number: 2
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-700/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Bem vindo! Meu nome é Thales, sou estudante de Ciência da Computação, com habilidade para integrar conhecimentos técnicos e experiências práticas no desenvolvimento de soluções eficientes, atendendo a demandas específicas e superando desafios de forma criativa e estratégica.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
            {aboutItems.map(({label, number}, key) => (
                <div key={key}>
                  <div className="flex items-cneter md:mb-2">
                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                    <span className="font-bold md:text-3xl">+</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{label}</p>
                </div>
              ))
            }
            <img src="/images/logo.svg" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]"/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
