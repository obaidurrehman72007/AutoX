import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarCard from './CarCard';
import { luxuryCars } from '../data/cars';
gsap.registerPlugin(ScrollTrigger);
export default function CarGrid() {
  const sectionRef = useRef(null);
  const parentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const indexRef = useRef(1);
  const scroll = (direction) => {
    const el = parentRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.car-card-wrapper').offsetWidth;
    const gap = 32;
    const moveAmount = direction === 'next' ? (cardWidth + gap) : -(cardWidth + gap);
    gsap.to(el, {
      scrollLeft: el.scrollLeft + moveAmount,
      duration: 0.6,
      ease: "power2.out"
    });
  };
  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index')) + 1;
          if (index !== indexRef.current) {
            indexRef.current = index;
            setCurrentIndex(index);
          }
        }
      });
    }, { 
      root: el, 
      threshold: 0.5,
      rootMargin: "0px"
    });
    el.querySelectorAll('.car-card-wrapper').forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="collection" ref={sectionRef} className="bg-black py-20 lg:py-40 overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
          will-change: scroll-position;
        }
        .car-card-wrapper { 
          content-visibility: auto; 
          contain-intrinsic-size: 450px 550px; 
          transform: translateZ(0); 
        }
        .big-title {
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
        }
      `}</style>
      <div className="max-w-full px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="relative">
            <h2 className="big-title text-7xl md:text-[10rem] font-black text-white leading-none tracking-tighter">
              <span className="text-orange-600 italic">X</span>-SERIES
            </h2>
            <div className="text-zinc-500 font-mono text-xl uppercase mt-4">
              {currentIndex.toString().padStart(2, '0')} / {luxuryCars.length}
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <button onClick={() => scroll('prev')} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300">
              <i className="ri-arrow-left-s-line text-3xl"></i>
            </button>
            <button onClick={() => scroll('next')} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300">
              <i className="ri-arrow-right-s-line text-3xl"></i>
            </button>
          </div>
        </div>
        <div
          ref={parentRef}
          className="no-scrollbar flex gap-8 overflow-x-auto snap-x snap-mandatory py-10"
        >
          {luxuryCars.map((car, index) => (
            <div
              key={car.id || index}
              data-index={index}
              className="car-card-wrapper shrink-0 w-[85vw] md:w-113 snap-center"
            >
               {}
              <div className="car-card-inner relative group h-138 rounded-2xl bg-zinc-900/30 border border-white/5">
                <CarCard car={car} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 mx-auto max-w-sm h-0.5 bg-zinc-900">
          <div 
            className="h-full bg-orange-600 transition-transform duration-300 ease-out origin-left"
            style={{ transform: `scaleX(${currentIndex / luxuryCars.length})` }}
          />
      </div>
    </section>
  );
}