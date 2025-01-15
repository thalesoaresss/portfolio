
{/* NODE MODULES */}
import { useState } from 'react';

{/* COMPONENTES */}
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1 className="flex justify-start items-center">
          <a href="/" className="logo">
            <img src="/images/logo.svg" alt="Logo" width={40} height={40} />
          </a>
        </h1>

        <div className="relative flex justify-center md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">
              {navOpen ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg> : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen}/>
        </div>

        <div className="flex justify-end items-center max-md:hidden md:justify-self-end">
          <a href="#contact" className="btn btn-secondary">Entre em contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
