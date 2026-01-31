import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NotFound = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Infinite glitch effect for the 404 text
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(".glitch-text", {
      skewX: 20,
      duration: 0.1,
      ease: "power4.inOut",
    })
    .to(".glitch-text", {
      skewX: 0,
      duration: 0.1,
      ease: "power4.inOut",
    })
    .to(".glitch-text", {
      x: -10,
      opacity: 0.5,
      duration: 0.1,
    })
    .to(".glitch-text", {
      x: 0,
      opacity: 1,
      duration: 0.1,
    })
    .addPause(2); // Wait 2 seconds before next glitch

    // Floating background elements
    gsap.to(".bg-circle", {
      y: "random(-50, 50)",
      x: "random(-50, 50)",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background Decor */}
      <div className="bg-circle absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
      <div className="bg-circle absolute bottom-1/4 right-1/4 w-125 h-125 bg-zinc-900/50 rounded-full blur-[150px]" />

      <div className="relative z-10 text-center">
        {/* The Big 404 */}
        <h1 className="glitch-text text-[12rem] md:text-[20rem] font-black text-white leading-none tracking-tighter italic">
          404
        </h1>
        
        <div className="mt-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Engine Stalled.
          </h2>
          <p className="text-zinc-500 mt-4 max-w-md mx-auto text-lg font-light leading-relaxed">
            The page you are looking for has been redlined or moved to a different track.
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-4 px-10 py-4 bg-orange-600 text-white font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="ri-arrow-left-line"></i>
              Back to Garage
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
          </Link>
        </div>
      </div>

      {/* Decorative Speed Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-linear-to-r from-transparent via-white/20 to-transparent h-px w-full"
            style={{ top: `${20 * i}%`, left: '-100%', animation: `speedLine 3s linear infinite ${i * 0.5}s` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes speedLine {
          0% { transform: translateX(0); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;