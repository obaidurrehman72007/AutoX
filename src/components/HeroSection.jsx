import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function HeroSection({ car, onNext, onPrev }) {
  const container = useRef();
  const bgRef = useRef();
  const titleRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero-bg-img',
      { scale: 1.3, filter: 'brightness(0)' },
      { scale: 1.1, filter: 'brightness(0.7)', duration: 2.4, ease: 'expo.out' }
    )
    .fromTo(
      '.hero-title-line',
      { y: 200, skewY: 10, opacity: 0 },
      { y: 0, skewY: 0, opacity: 1, duration: 1.8, stagger: 0.1, ease: 'expo.out' },
      '-=1.8'
    )
    .fromTo(
      '.hero-desc',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=1.2'
    );
    gsap.to('.hero-bg-img', {
      yPercent: 20,
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
    gsap.to('.hero-content-inner', {
      yPercent: -50,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, { dependencies: [car.slug], scope: container });
  return (
    <section ref={container} className="relative h-[110vh] w-full overflow-hidden bg-black" id='home'>
      <div className="hero-bg absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={car.mainImage}
          alt={car.name}
          className="hero-bg-img h-full w-full object-cover object-center will-change-transform"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>
      <div className="hero-content-inner relative z-20 flex h-full flex-col justify-center px-6 lg:px-20 xl:px-32">
        <div className="max-w-350" ref={titleRef}>
          <div className="mb-4 overflow-hidden">
            <h1 className="hero-title-line text-7xl font-black uppercase italic tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-[0.8]">
              {car.name.split(' ')[0]}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-7xl font-black uppercase tracking-tighter text-orange-600 sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-[0.8]">
              {car.name.split(' ').slice(1).join(' ')}
            </h1>
          </div>
          <div className="mt-12 max-w-xl">
            <p className="hero-desc text-lg font-medium tracking-wide text-zinc-300 md:text-xl lg:text-2xl leading-relaxed">
              {car.paragraph}
            </p>
            <div className="hero-desc mt-10 flex items-center gap-10">
              <button className="group relative overflow-hidden bg-white px-12 py-5 text-xs font-black uppercase tracking-[0.3em] text-black transition-transform active:scale-95">
                <span className="relative z-10">Configure</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-orange-600 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
              </button>
              <div className="flex flex-col border-l border-white/10 pl-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">MSRP</span>
                <span className="text-2xl font-black text-white">$425,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {}
      <div className="absolute inset-y-0 right-10 z-30 hidden flex-col justify-center gap-8 lg:flex">
        <button onClick={onPrev} className="nav-btn group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-orange-600 hover:bg-orange-600">
          <span className="text-white text-xl group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
        <button onClick={onNext} className="nav-btn group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-orange-600 hover:bg-orange-600">
          <span className="text-white text-xl group-hover:translate-y-1 transition-transform">↓</span>
        </button>
      </div>
      <div className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 opacity-30">
        <div className="scroll-indicator flex flex-col items-center gap-4">
          <div className="h-20 w-px bg-linear-to-b from-orange-600 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-[slide_2s_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}