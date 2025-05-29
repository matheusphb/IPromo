
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { RoutePaths } from '../constants';
import { OnboardingContent } from '../types';
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon'; 
import { APP_NAME, APP_TAGLINE } from '../constants';


const onboardingSlidesData: OnboardingContent[] = [
  {
    id: 1,
    imageSrc: 'https://picsum.photos/seed/onboarding1/600/400',
    text: 'Mais de 90% dos clientes relatam economia real.',
  },
  {
    id: 2,
    imageSrc: 'https://picsum.photos/seed/onboarding2/600/400',
    text: 'Pesquise milhares de produtos em promoção.',
  },
  {
    id: 3,
    imageSrc: 'https://picsum.photos/seed/onboarding3/600/400',
    text: 'Nos mais variados seguimentos.',
  },
  {
    id: 4,
    imageSrc: 'https://picsum.photos/seed/onboarding4/600/400',
    text: 'Receba ofertas exclusivas na loja e promoções pensadas para você!',
  }
];

interface OnboardingSlideViewProps {
  slide: OnboardingContent;
  onLogin: () => void;
  onSignUp: () => void;
}

const OnboardingSlideView: React.FC<OnboardingSlideViewProps> = ({ slide, onLogin, onSignUp }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <div className="w-full">
        <img 
          src={slide.imageSrc} 
          alt={slide.text} 
          className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-xl mb-6 sm:mb-8"
        />
        <p className="text-xl sm:text-2xl text-center text-violet-100 font-medium mb-8 sm:mb-10">
          {slide.text}
        </p>
      </div>
      <div className="w-full space-y-4">
        <button
          onClick={onSignUp}
          className="w-full py-3.5 px-4 bg-violet-400 hover:bg-violet-300 text-violet-800 font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-violet-700"
        >
          Inscreva-se de graça
        </button>
        <button
          onClick={onLogin}
          className="w-full py-3.5 px-4 bg-white hover:bg-gray-100 text-violet-700 font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-violet-700"
        >
          Inicie a sua sessão
        </button>
      </div>
    </div>
  );
};


export const OnboardingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleLogin = () => navigate(RoutePaths.LOGIN);
  const handleSignUp = () => navigate(RoutePaths.REGISTER_OPTIONS);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % onboardingSlidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + onboardingSlidesData.length) % onboardingSlidesData.length);
  };
  
  const setSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-violet-700 auth-bg-pattern text-white p-4 sm:p-6">
      <div className="w-full max-w-sm flex flex-col items-center">
        <Logo className="mb-6 sm:mb-8" />
        
        <div className="w-full h-[520px] sm:h-[550px] flex flex-col justify-between"> {/* Fixed height for content area */}
            <OnboardingSlideView 
                slide={onboardingSlidesData[currentSlide]}
                onLogin={handleLogin}
                onSignUp={handleSignUp}
            />
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
          {onboardingSlidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index ? 'bg-yellow-400' : 'bg-violet-400 hover:bg-violet-300'
              }`}
            />
          ))}
        </div>
         {/* Simple text navigation for Prev/Next - optional */}
        <div className="flex justify-between w-full mt-4 text-sm">
            <button onClick={prevSlide} className="text-violet-300 hover:text-white p-2">Anterior</button>
            <button onClick={nextSlide} className="text-violet-300 hover:text-white p-2">Próximo</button>
        </div>
      </div>
    </div>
  );
};