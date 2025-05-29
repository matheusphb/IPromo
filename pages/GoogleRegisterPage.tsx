import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPageLayout } from '../components/AuthPageLayout';
import { RoutePaths, MOCK_USER_ACCOUNTS } from '../constants';
import { UserIcon } from '../components/icons/UserIcon'; // Placeholder for actual avatars

export const GoogleRegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAccountSelect = (email: string) => {
    console.log('Selected Google account:', email);
    // Simulate successful Google auth and navigate to home or next step
    alert(`Continuando com ${email} (simulado)`);
    navigate(RoutePaths.HOME);
  };

  const handleAddAnotherAccount = () => {
    console.log('Add another Google account clicked');
    // This would typically redirect to Google's account chooser
    alert('Redirecionando para adicionar outra conta Google (simulado).');
  };

  return (
    <AuthPageLayout pageTitle="Escolha uma conta" showLogo={false} customBgClass="bg-slate-800">
      <div className="bg-slate-700 p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-white mb-6">
          Escolha uma conta para continuar no iPromo
        </h2>
        <div className="space-y-3 mb-6">
          {MOCK_USER_ACCOUNTS.map((account) => (
            <button
              key={account.id}
              onClick={() => handleAccountSelect(account.email)}
              className="w-full flex items-center p-3 bg-slate-600 hover:bg-slate-500 rounded-md transition-colors"
            >
              {account.avatarUrl ? (
                <img src={account.avatarUrl} alt={account.name} className="w-8 h-8 rounded-full mr-3" />
              ) : (
                <UserIcon className="w-8 h-8 rounded-full mr-3 text-slate-400" />
              )}
              <div>
                <p className="text-sm font-medium text-white text-left">{account.name}</p>
                <p className="text-xs text-slate-300 text-left">{account.email}</p>
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={handleAddAnotherAccount}
          className="w-full flex items-center p-3 hover:bg-slate-600 rounded-md transition-colors"
        >
          <UserIcon className="w-8 h-8 rounded-full mr-3 text-slate-400 border border-slate-500 p-1" />
          <p className="text-sm font-medium text-white">Adicionar outra conta</p>
        </button>
        <p className="mt-6 text-xs text-slate-400 text-center">
          Para continuar, o Google compartilhará seu nome, seu endereço de e-mail e sua foto do perfil com o app iPromo. Antes de usar este app, revise a política de privacidade e os termos de serviço dele.
        </p>
        <button
            onClick={() => navigate(RoutePaths.REGISTER_OPTIONS)}
            className="mt-6 text-sm text-center w-full text-slate-300 hover:text-yellow-300"
        >
            Cancelar
        </button>
      </div>
    </AuthPageLayout>
  );
};