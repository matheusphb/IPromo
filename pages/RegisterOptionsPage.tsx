
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPageLayout } from '../components/AuthPageLayout';
import { SocialButton } from '../components/SocialButton';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { FacebookIcon } from '../components/icons/FacebookIcon';
import { RoutePaths } from '../constants';

export const RegisterOptionsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleRegister = () => {
    // Navigate to a conceptual Google registration/picker page
    navigate(RoutePaths.REGISTER_GOOGLE);
  };

  const handleFacebookRegister = () => {
     // Navigate to a conceptual Facebook registration/picker page
    navigate(RoutePaths.REGISTER_FACEBOOK);
  };

  const handleEmailRegister = () => {
    navigate(RoutePaths.REGISTER_EMAIL);
  };

  return (
    <AuthPageLayout pageTitle="Escolha como se cadastrar">
      <div className="space-y-5 w-full">
        <SocialButton
          provider="Google"
          onClick={handleGoogleRegister}
          icon={<GoogleIcon className="w-5 h-5" />}
          text="Cadastrar-se com o Google"
        />
        <SocialButton
          provider="Facebook"
          onClick={handleFacebookRegister}
          icon={<FacebookIcon className="w-5 h-5 text-[#1877F2]" />} // Facebook icon often uses its brand color
          text="Cadastrar-se com o Facebook"
        />
        <button
          onClick={handleEmailRegister}
          className="w-full py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-violet-700"
        >
          Cadastrar-se com email
        </button>
      </div>
      <p className="mt-8 text-xs text-center text-violet-200">
        Ao criar uma conta, você concorda com o(s){' '}
        <a href="#" className="font-medium hover:text-yellow-300 underline">
          Acordo de Usuário
        </a>{' '}
        e{' '}
        <a href="#" className="font-medium hover:text-yellow-300 underline">
          Política de Privacidade
        </a>
        .
      </p>
    </AuthPageLayout>
  );
};
