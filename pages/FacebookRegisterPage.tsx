import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPageLayout } from '../components/AuthPageLayout';
import { FacebookIcon } from '../components/icons/FacebookIcon';
import { RoutePaths, APP_NAME, MOCK_USER_ACCOUNTS } from '../constants'; 
import { Logo } from '../components/Logo';


export const FacebookRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const userName = MOCK_USER_ACCOUNTS[0]?.name || "Usuário"; // Mock user name

  const handleContinue = () => {
    console.log('Continuing with Facebook account:', userName);
    alert(`Continuando como ${userName} com Facebook (simulado)`);
    navigate(RoutePaths.HOME);
  };

  const handleCancel = () => {
    navigate(RoutePaths.REGISTER_OPTIONS);
  };

  return (
    <AuthPageLayout showLogo={false} customBgClass="bg-slate-800">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md text-gray-800">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <FacebookIcon className="w-10 h-10 text-[#1877F2]" />
          {/* A smaller version of iPromo logo or just text */}
          <span className="text-2xl font-bold text-violet-700">{APP_NAME}</span>
        </div>
        
        <h2 className="text-lg font-semibold text-center mb-2">
          Você já entrou no {APP_NAME} com o Facebook.
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Gostaria de continuar?
        </p>
        
        <div className="space-y-3">
          <button
            onClick={handleContinue}
            className="w-full py-3 px-4 bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold rounded-md transition-colors shadow-sm"
          >
            Continuar como {userName}
          </button>
          <button
            onClick={handleCancel}
            className="w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-md transition-colors"
          >
            Cancelar
          </button>
        </div>
        <p className="mt-8 text-xs text-gray-500 text-center">
          Ao continuar, o {APP_NAME} receberá acesso contínuo às informações que você compartilhar e a Meta registrará quando o {APP_NAME} for acessado. Saiba mais sobre esse compartilhamento e suas configurações ativas. <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a> e <a href="#" className="text-blue-600 hover:underline">Termos de Serviço</a> do {APP_NAME}.
        </p>
      </div>
    </AuthPageLayout>
  );
};