import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection';
import KeyFeatures from '../components/KeyFeatures';
import CarGrid from '../components/CarGrid';
import BrandMarquee from '../components/BrandMarquee';
import { luxuryCars } from '../data/cars';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCar = luxuryCars[currentIndex];

  useEffect(() => {
    window.addEventListener('scroll', ScrollTrigger.update);
    return () => window.removeEventListener('scroll', ScrollTrigger.update);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % luxuryCars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + luxuryCars.length) % luxuryCars.length);
  };

  return (
    <div className="relative">
      <HeroSection car={currentCar} onNext={handleNext} onPrev={handlePrev} />
      <KeyFeatures car={currentCar} />
      <CarGrid />
      <BrandMarquee />
    </div>
  );
}