import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SOCIAL_LINKS = [
  { icon: 'ri-linkedin-box-fill', url: 'https://www.linkedin.com/in/obaid-ur-rehman-38b45230a/' },
  { icon: 'ri-instagram-line', url: 'https://www.instagram.com/___obze/' },
  { icon: 'ri-facebook-box-fill', url: 'https://www.facebook.com/obaid.mughal.9659' },
  { icon: 'ri-whatsapp-line', url: 'https://wa.me/923483116357' }
];

export default function DeveloperProfile() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const setBgY = gsap.quickSetter(bgRef.current, "y", "px");
    const setContentY = gsap.quickSetter(contentRef.current, "y", "px");

    gsap.from(".dev-item", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const progress = 1 - (rect.bottom / (window.innerHeight + rect.height));
      setBgY(progress * 150);
      setContentY(progress * -50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, { scope: containerRef });

  const handleMagnetic = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.5,
      y: y * 0.5,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const resetMagnetic = (e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24 px-6 border-t border-white/5"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070')] bg-cover bg-center opacity-20 grayscale scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />

      <div ref={contentRef} className="relative z-10 max-w-4xl text-center">
        <div className="dev-item inline-block px-4 py-1.5 rounded-full border border-orange-600/30 bg-orange-600/10 text-orange-600 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
          Architect of Velocity
        </div>
        
        <h2 className="dev-item text-6xl md:text-8xl font-black text-white italic tracking-tighter mb-8 uppercase leading-none">
          Obaid <span className="text-orange-600">Ur</span> Rehman
        </h2>

        <p className="dev-item text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          An ambitious and detail-oriented developer transitioning from a strong <span className="text-white font-medium">C++</span> background into elite frontend engineering. Highly motivated to expand within the software engineering field through performance-driven web experiences.
        </p>

        <div className="dev-item flex flex-wrap justify-center gap-6">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-orange-600 hover:border-orange-600 transition-colors duration-500"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-orange-600/50 to-transparent" />
    </section>
  );
}