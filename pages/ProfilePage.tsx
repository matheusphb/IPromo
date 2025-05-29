
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePaths, APP_NAME } from '../constants';
import { UserIcon } from '../components/icons/UserIcon'; // Example icon
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, state)
    console.log('User logged out');
    navigate(RoutePaths.ONBOARDING); // Redirect to onboarding/login
  };

  const ActionButton: React.FC<{ onClick?: () => void; children: React.ReactNode, icon?: React.ReactNode }> = ({ onClick, children, icon }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center text-left py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-sm transition-colors duration-150 mb-3"
    >
      {icon && <span className="mr-3 w-5 h-5 text-violet-600">{icon}</span>}
      <span className="flex-grow">{children}</span>
      <ChevronLeftIcon className="w-5 h-5 text-gray-400 transform rotate-180" />
    </button>
  );


  return (
    <div className="p-4 sm:p-6 container mx-auto">
      <div className="flex items-center mb-6">
        {/* <button onClick={() => navigate(-1)} className="p-2 mr-2 text-violet-600 hover:bg-violet-100 rounded-full">
          <ChevronLeftIcon className="w-6 h-6" />
        </button> */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Meu Perfil</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-violet-500 flex items-center justify-center text-white mr-4">
            <UserIcon className="w-10 h-10 sm:w-12 sm:h-12" /> 
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Nome do Usuário</h2>
            <p className="text-sm text-gray-600">usuario@email.com</p>
          </div>
        </div>
        <button className="text-sm text-violet-600 hover:text-violet-800 font-medium">
            Editar Perfil
        </button>
      </div>
      
      <div className="space-y-1">
        <ActionButton onClick={() => console.log('Navigate to My Coupons')}>
          Meus Cupons
        </ActionButton>
        <ActionButton onClick={() => console.log('Navigate to Order History')}>
          Histórico de Pedidos
        </ActionButton>
        <ActionButton onClick={() => console.log('Navigate to Settings')}>
          Configurações
        </ActionButton>
        <ActionButton onClick={() => console.log('Navigate to Help/Support')}>
          Ajuda & Suporte
        </ActionButton>
      </div>

      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Sair (Logout)
        </button>
      </div>
       <p className="mt-8 text-center text-xs text-gray-400">
        {APP_NAME} v1.0.0 (Simulado)
      </p>
    </div>
  );
};