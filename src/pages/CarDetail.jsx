import { useParams, Link } from 'react-router-dom';
import { luxuryCars } from '../data/cars';
import HeroSection from '../components/HeroSection';
import KeyFeatures from '../components/KeyFeatures';

export default function CarDetail() {
  const { slug } = useParams();
  const car = luxuryCars.find((c) => c.slug === slug);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl text-white">
        Car not found
      </div>
    );
  }

  return (
    <div className="pt-20">
      <HeroSection car={car} onNext={() => {}} onPrev={() => {}} />

      <KeyFeatures car={car} />

      <div className="py-20 text-center">
        <Link
          to="/"
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-5 rounded-xl transition-colors"
        >
          ← Back to Collection
        </Link>
      </div>
    </div>
  );
}