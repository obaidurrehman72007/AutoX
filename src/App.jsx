import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DeveloperProfile from './components/DeveloperProfile';
import NotFound from './pages/NotFound';
import Preloader from './components/PreLoader';
import Lenis from 'lenis';

const Home = lazy(() => import('./pages/Home'));
const CarDetail = lazy(() => import('./pages/CarDetail'));


function ScrollManager({ lenis }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      autoResize: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (!localStorage.getItem("visited")) {
      lenis.stop();
      setTimeout(() => {
        lenis.start();
      }, 4800); 
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollManager lenis={lenisRef.current} />
      
      <Preloader />
      
      <Header />

      <div className="fixed inset-0 z-100 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-20 bg-black min-h-screen text-white">
        <main className="relative z-20 bg-black">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/car/:slug" element={<CarDetail />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
               <DeveloperProfile />
          </Suspense>
       
        </main>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>

      <style>{`
        /* 3. HARD OVERRIDE: Stop browser from handling native smooth scroll */
        html {
          scroll-behavior: auto !important;
        }

        html.lenis {
          height: auto;
        }

        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }

        body {
          overscroll-behavior-y: none;
        }

        .lenis.lenis-stopped {
          overflow: hidden;
        }
      `}</style>
    </BrowserRouter>
  );
}

export default App;