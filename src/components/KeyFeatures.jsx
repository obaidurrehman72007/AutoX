import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function KeyFeatures({ car }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal text lines with a "staggered slide-up"
    gsap.from(".feature-row", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".feature-list",
        start: "top 85%",
      }
    });

    // Horizontal parallax for the background text
    gsap.to(".bg-text-scroll", {
      xPercent: -20,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Image container reveal - "Shutter" effect
    gsap.from(".detail-img-card", {
      clipPath: "inset(0% 100% 0% 0%)",
      duration: 1.5,
      stagger: 0.3,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".image-grid",
        start: "top 70%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#050505] py-24 lg:py-48 overflow-hidden"
    >
      {/* Background Technical Text (Parallax) */}
      <div className="absolute top-20 left-0 whitespace-nowrap pointer-events-none select-none z-0">
        <h2 className="bg-text-scroll text-[20vw] font-black text-white/2 uppercase tracking-tighter">
          Performance Engineering Automotive Excellence Precision
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* LEFT: Technical List */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <div className="mb-12">
              <span className="text-red-600 font-mono text-sm tracking-[0.5em] uppercase block mb-4">
                Specifications // 001
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                The <span className="italic text-transparent border-b border-red-600 [-webkit-text-stroke:1px_white]">Blueprint</span>
              </h2>
            </div>

            <ul className="feature-list space-y-0 border-t border-white/10">
              {car.features.map((feature, index) => (
                <li
                  key={index}
                  className="feature-row group flex items-center justify-between py-6 border-b border-white/10 transition-colors hover:bg-white/2"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-red-600 transition-colors">
                      {(index + 1).toString().padStart(3, '0')}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-400 group-hover:text-white transition-colors uppercase tracking-tight">
                      {feature}
                    </h3>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-zinc-800 group-hover:bg-red-600 group-hover:scale-150 transition-all duration-300" />
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Visual Showcase */}
          <div className="image-grid w-full lg:w-[55%] space-y-12">
            {car.detailImages.map((img, idx) => (
              <div
                key={idx}
                className="detail-img-card relative group w-full aspect-video lg:aspect-video overflow-hidden bg-zinc-900 border border-white/5"
              >
                <img
                  src={img}
                  alt="Tech Detail"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Visual Data Overlay */}
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-1 border-l-2 border-red-600">
                    <p className="font-mono text-[10px] text-white tracking-widest uppercase">
                      Sensor_Feed_{idx + 1}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black via-black/40 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="h-px grow bg-white/20" />
                    <span className="text-[10px] font-mono text-zinc-400">DETAIL_SCAN_{idx}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Vertical Decoration */}
      <div className="absolute left-10 top-0 h-full w-px bg-linear-to-b from-transparent via-red-600/20 to-transparent hidden xl:block" />
    </section>
  );
}