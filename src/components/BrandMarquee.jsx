import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { carBrands } from '../data/cars';
gsap.registerPlugin(ScrollTrigger);
export default function BrandMarquee() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const marqueeTl = useRef();
  const brands = [...carBrands, ...carBrands, ...carBrands];
  useGSAP(() => {
    gsap.from(".brand-title-word", {
      yPercent: 100,
      rotate: 5,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });
    gsap.to(textRef.current, {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    });
    marqueeTl.current = gsap.to(".marquee-inner", {
      xPercent: -66.66,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const velocity = self.getVelocity() / 500;
        const newScale = 1 + Math.abs(velocity);
        gsap.to(marqueeTl.current, {
          timeScale: newScale,
          duration: 0.5,
          ease: "power2.out"
        });
        gsap.to(".brand-item", {
          skewX: velocity * 5,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  }, { scope: sectionRef });
  const handleMouseEnter = () => {
    gsap.to(marqueeTl.current, { timeScale: 0.2, duration: 0.8 });
    gsap.to(".brand-item", { scale: 1.1, duration: 0.5 });
  };
  const handleMouseLeave = () => {
    gsap.to(marqueeTl.current, { timeScale: 1, duration: 0.8 });
    gsap.to(".brand-item", { scale: 1, duration: 0.5 });
  };
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-44 overflow-hidden bg-black"
      id='brands'
    >
      <div 
        ref={textRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.02] z-0"
      >
        <h2 className="text-[28vw] font-black leading-none uppercase">
          World Class Performance — World Class Performance
        </h2>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="overflow-hidden">
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-none">
              <span className="inline-block brand-title-word">OUR</span>{" "}
              <span className="inline-block brand-title-word text-orange-600 italic">PARTNERS</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2 mt-6 md:mt-0">
             <div className="h-px w-24 bg-orange-600" />
             <p className="text-zinc-500 max-w-xs text-[10px] uppercase tracking-[0.3em] font-bold text-right">
               Prestigious Collaborations 2026
             </p>
          </div>
        </div>
      </div>
      <div 
        className="relative py-14 border-y border-white/5 bg-zinc-950/40 backdrop-blur-xl cursor-pointer overflow-hidden group/marquee"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="marquee-inner flex whitespace-nowrap w-fit">
          {brands.map((brand, index) => (
            <a
              key={`${brand.name}-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-item group mx-14 md:mx-24 shrink-0 flex flex-col items-center justify-center transition-transform duration-500"
            >
              <div className="h-14 md:h-20 lg:h-24 w-auto flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-auto object-contain grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-[9px] tracking-[0.5em] text-orange-600 font-black uppercase">
                  {brand.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>
    </section>
  );
}