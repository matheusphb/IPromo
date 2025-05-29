
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthPageLayout } from '../components/AuthPageLayout';
import { FormField } from '../components/FormField';
import { RoutePaths } from '../constants';

export const PasswordRecoveryPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock password recovery logic
    console.log('Recovery email sent to:', email);
    alert('Instruções de recuperação enviadas para seu e-mail (simulado).');
    navigate(RoutePaths.LOGIN);
  };

  return (
    <AuthPageLayout pageTitle="Esqueceu a sua senha?">
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <p className="text-center text-violet-200 text-sm mb-4">
          Insira seu e-mail para enviarmos as instruções de redefinição de senha.
        </p>
        <FormField
          id="email"
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-violet-800 font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-violet-700"
        >
          Solicitar redefinição de senha
        </button>
      </form>
      <Link
        to={RoutePaths.LOGIN}
        className="block text-center text-sm text-violet-200 hover:text-yellow-300 mt-6"
      >
        Voltar para fazer login
      </Link>
    </AuthPageLayout>
  );
};
