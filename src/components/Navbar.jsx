import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const [currentSection, setCurrentSection] = useState('home'); // Estado inicial

  const initActiveBox = (linkElement) => {
    if (!linkElement) return;
    activeBox.current.style.top = linkElement.offsetTop + 'px';
    activeBox.current.style.left = linkElement.offsetLeft + 'px';
    activeBox.current.style.width = linkElement.offsetWidth + 'px';
    activeBox.current.style.height = linkElement.offsetHeight + 'px';
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    let foundSection = 'home'; // Considera "home" como padrão

    // Verifica qual seção está visível
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        foundSection = section.id;
        break;
      }
    }

    // Atualiza estado apenas quando a seção ativa mudar
    if (foundSection !== currentSection) {
      setCurrentSection(foundSection);
    }

    // Se o usuário voltar ao topo, marca "home"
    if (window.scrollY === 0) {
      setCurrentSection('home');
    }
  };

  useEffect(() => {
    // Configura o activeBox inicialmente
    if (lastActiveLink.current) {
      initActiveBox(lastActiveLink.current);
    }

    // Adiciona listener para o scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Atualiza o activeBox quando o estado currentSection muda
    const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
    if (activeLink && activeLink !== lastActiveLink.current) {
      lastActiveLink.current?.classList.remove('active');
      activeLink.classList.add('active');
      lastActiveLink.current = activeLink;
      initActiveBox(activeLink);
    }
  }, [currentSection]);

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'Sobre', link: '#about' },
    { label: 'Projetos', link: '#work' },
    { label: 'Contato', link: '#contact' },
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link }, key) => (
        <a
          href={link}
          key={key}
          className={`nav-link ${currentSection === link.slice(1) ? 'active' : ''}`}
          onClick={() => setCurrentSection(link.slice(1))} // Atualiza manualmente ao clicar
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
