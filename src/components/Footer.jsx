import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { carBrands } from '../data/cars';
gsap.registerPlugin(ScrollTrigger);
const AnimatedFooter = () => {
  const containerRef = useRef(null);
  const footerRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(footerRef.current, 
      { yPercent: -40 }, 
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
    gsap.from(".brand-logo", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 70%",
      }
    });
    gsap.from(".footer-link", {
      y: 20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 60%",
      }
    });
  }, { scope: containerRef });
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.4,
      y: y * 0.4,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { 
      x: 0, 
      y: 0, 
      scale: 1, 
      duration: 0.5, 
      ease: "elastic.out(1, 0.3)" 
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div ref={containerRef} className="relative w-full bg-transparent overflow-visible">
      <div className="h-[40vh] md:h-[60vh] pointer-events-none"></div>
      <footer 
        ref={footerRef}
        className="relative md:sticky bottom-0 left-0 w-full min-h-[60vh] bg-zinc-950 text-white p-6 md:p-16 flex flex-col justify-between z-10"
      >
        <div className="mb-12 border-b border-zinc-800 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex-1">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-8">Official Partners</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {carBrands.slice(0, 6).map((brand) => (
                <a 
                  key={brand.name} 
                  href={brand.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="brand-logo grayscale hover:grayscale-0 transition-all duration-500 relative z-20"
                >
                  <img src={brand.logo} alt={brand.name} className="h-6 md:h-8 w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>
          <button
            onClick={scrollToTop}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative z-20 w-20 h-20 rounded-full bg-orange-600 flex flex-col items-center justify-center text-black transition-transform duration-300 group shadow-2xl active:scale-90"
          >
            <span className="text-xl font-bold">↑</span>
            <span className="text-[10px] font-black uppercase tracking-tighter">TOP</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-none italic uppercase">
              READY TO DRIVE <br /> <span className="text-orange-600">THE FUTURE?</span>
            </h2>
          </div>
          <div>
            <h4 className="text-zinc-500 mb-6 uppercase text-xs tracking-widest font-bold">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Collection', 'Brands'].map(item => (
                <li key={item} className="footer-link">
                  {}
                  {item === 'Home' ? (
                    <Link to="/" className="relative z-20 text-lg text-zinc-300 hover:text-white transition-colors flex items-center group uppercase font-bold italic tracking-tighter">
                      <span className="w-0 group-hover:w-4 h-px bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  ) : (
                    <a href={`#${item.toLowerCase()}`} className="relative z-20 text-lg text-zinc-300 hover:text-white transition-colors flex items-center group uppercase font-bold italic tracking-tighter">
                      <span className="w-0 group-hover:w-4 h-px bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-500 mb-6 uppercase text-xs tracking-widest font-bold">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {['TW', 'IG', 'FB', 'LI'].map(social => (
                <div
                  key={social}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative z-20 w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center cursor-pointer hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors duration-300 text-sm font-bold"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-900 pt-8 gap-8">
          <div className="w-full md:w-auto">
            <p className="text-zinc-600 text-sm font-mono tracking-tighter">© 2026 AUTO-X MOTORS. ALL RIGHTS RESERVED.</p>
            <p className="text-zinc-600 text-xs mt-1 italic opacity-50 font-mono tracking-widest uppercase">High Performance Standards</p>
          </div>
          <h1 className="text-[18vw] md:text-[14vw] font-black leading-[0.7] tracking-tighter text-zinc-900/40 select-none pointer-events-none translate-y-4 md:translate-y-12 italic">
            AUTO-X
          </h1>
        </div>
      </footer>
    </div>
  );
};
export default AnimatedFooter;