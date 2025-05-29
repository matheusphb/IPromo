
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthPageLayout } from '../components/AuthPageLayout';
import { FormField } from '../components/FormField';
import { SocialButton } from '../components/SocialButton';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { FacebookIcon } from '../components/icons/FacebookIcon';
import { RoutePaths } from '../constants';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    console.log({ email, password });
    alert('Login bem-sucedido! (simulado)');
    navigate(RoutePaths.HOME);
  };

  const handleGoogleLogin = () => {
    console.log('Login com Google');
    // Navigate to a conceptual Google auth page or trigger OAuth flow
    navigate(RoutePaths.REGISTER_GOOGLE); // Placeholder, actual OAuth would differ
  };

  const handleFacebookLogin = () => {
    console.log('Login com Facebook');
     // Navigate to a conceptual Facebook auth page or trigger OAuth flow
    navigate(RoutePaths.REGISTER_FACEBOOK); // Placeholder
  };

  return (
    <AuthPageLayout pageTitle="Seja bem-vindo(a)">
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <FormField
          id="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormField
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-violet-800 font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-violet-700"
        >
          Entrar
        </button>
      </form>
      <Link
        to={RoutePaths.RECOVER_PASSWORD}
        className="block text-center text-sm text-violet-200 hover:text-yellow-300 mt-4"
      >
        Esqueceu a sua senha?
      </Link>
      <div className="mt-6 space-y-4">
        <SocialButton
          provider="Google"
          onClick={handleGoogleLogin}
          icon={<GoogleIcon className="w-5 h-5" />}
          text="Continuar com o Google"
        />
        <SocialButton
          provider="Facebook"
          onClick={handleFacebookLogin}
          icon={<FacebookIcon className="w-5 h-5 text-[#1877F2]" />}
          text="Continuar com o Facebook"
        />
      </div>
       <button
          onClick={() => navigate(RoutePaths.REGISTER_OPTIONS)}
          className="mt-8 text-sm text-violet-200 hover:text-yellow-300 w-full text-center"
        >
          Não tem uma conta? Cadastre-se
        </button>
    </AuthPageLayout>
  );
};
