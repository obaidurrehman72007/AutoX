import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const logoRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);
  useGSAP(() => {
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "expo.inOut",
        pointerEvents: "all"
      });
      gsap.fromTo(".mobile-link", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.3, ease: "power4.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "expo.inOut",
        pointerEvents: "none"
      });
    }
  }, [menuOpen]);
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-100 transition-colors duration-500 border-b border-white/5 
      ${menuOpen ? 'bg-black' : 'bg-black/80 backdrop-blur-xl'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {}
          <div className="relative z-110">
            <Link to="/" onClick={() => setMenuOpen(false)} className="group">
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white italic">
                AUTO<span className="text-orange-600">X</span>
              </h1>
            </Link>
          </div>
          {}
          <nav className="hidden lg:flex items-center gap-10">
            {['Home', 'Collection', 'Brands'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">
              Inquire
            </button>
          </nav>
          {}
          <button
            className="lg:hidden relative z-110 w-12 h-12 flex flex-col justify-center items-center focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8 mb-1.5'}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-8 mb-1.5'}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45 -translate-y-1' : 'w-8'}`} />
          </button>
        </div>
      </div>
      {}
      <div 
        ref={mobileMenuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }}
        className="fixed inset-0 bg-black z-105 flex flex-col justify-center items-start px-10 pointer-events-none"
      >
        <div className="space-y-6">
          {['Home', 'Collection', 'Brands', 'Contact'].map((link) => (
            <div key={link} className="mobile-link">
              <Link 
                to="/" 
                className="text-6xl font-black text-white hover:text-orange-600 transition-colors uppercase italic tracking-tighter"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            </div>
          ))}
        </div>
        {}
        <div className="absolute bottom-10 right-10 opacity-[0.02] pointer-events-none select-none">
           <h2 className="text-[40vw] font-black tracking-tighter leading-none">X</h2>
        </div>
      </div>
    </header>
  );
}