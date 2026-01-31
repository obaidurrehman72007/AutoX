import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function CarCard({ car }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const shineRef = useRef(null);
  if (!car) return null;
  useGSAP(() => {
    const setCardRT = gsap.quickSetter(cardRef.current, "rotationY", "deg");
    const setCardRX = gsap.quickSetter(cardRef.current, "rotationX", "deg");
    const setImgX = gsap.quickSetter(imageRef.current, "x", "px");
    const setImgY = gsap.quickSetter(imageRef.current, "y", "px");
    const setContentX = gsap.quickSetter(contentRef.current, "x", "px");
    const setContentY = gsap.quickSetter(contentRef.current, "y", "px");
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = (y - centerY) / 20;
      const rotY = (centerX - x) / -20;
      setCardRX(rotX);
      setCardRT(rotY);
      setImgX(rotY * -2);
      setImgY(rotX * -2);
      setContentX(rotY * 1.5);
      setContentY(rotX * 1.5);
      gsap.set(shineRef.current, {
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 80%)`,
        opacity: 1
      });
    };
    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 1,
        ease: "power3.out"
      });
      gsap.to([imageRef.current, contentRef.current], {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      });
      gsap.to(shineRef.current, { opacity: 0, duration: 0.5 });
    };
    const el = cardRef.current;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: cardRef });
  return (
    <div
      ref={cardRef}
      className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 select-none"
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: '1000px',
        willChange: 'transform' 
      }}
    >
      {}
      <div className="absolute inset-0 pointer-events-none">
        <img
          ref={imageRef}
          src={car.mainImage}
          alt={car.name}
          className="w-full h-full object-cover scale-110 opacity-60 group-hover:opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      </div>
      {}
      <div
        ref={shineRef}
        className="absolute inset-0 pointer-events-none z-10 opacity-0 mix-blend-soft-light"
      />
      {}
      <div className="absolute top-5 left-5 z-20 flex flex-col gap-2 pointer-events-none">
        <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-white uppercase tracking-widest">
          {car.horsepower} HP
        </span>
      </div>
      {}
      <div
        ref={contentRef}
        className="absolute inset-0 z-30 p-8 flex flex-col justify-end"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div style={{ transform: 'translateZ(60px)' }}>
          <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2 uppercase">
            {car.name}
          </h3>
          <p className="text-zinc-400 text-sm line-clamp-2 mb-6 max-w-[90%] opacity-0 group-hover:opacity-100 transition-all duration-500">
            {car.paragraph}
          </p>
          <Link
            to={`/car/${car.slug}`}
            className="relative inline-flex items-center gap-4 text-orange-600 text-xs font-black uppercase tracking-[0.3em] group/btn pointer-events-auto cursor-pointer"
          >
            <span className="relative z-10">Explore Now</span>
            <span className="w-10 h-px bg-orange-600 group-hover/btn:w-16 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}