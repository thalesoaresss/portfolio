import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/thalesoaresss'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/'
  },
  {
    label: 'Whatsapp',
    href: 'https://wa.me/5531971522938?text=Ol%C3%A1!%20Vi%20e%20gostei%20do%20seu%20portf%C3%B3lio!%20Podemos%20conversar?'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thalesoaresss/'
  }
];
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Vamos trabalhar juntos!</h2>
            <ButtonPrimary href="#contact" label="Iniciar Projeto"/>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200" target="_blank">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/images/logo.svg" width={40} height={40} alt="" className="Logo" />
          </a>
          <p className="text-zinc-500 text-sm">&copy; 2025 <span className="text-zinc-200">soaresdev</span></p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
