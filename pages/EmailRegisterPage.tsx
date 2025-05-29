
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPageLayout } from '../components/AuthPageLayout';
import { FormField } from '../components/FormField';
import { Checkbox } from '../components/Checkbox';
import { RoutePaths } from '../constants';

export const EmailRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Você precisa aceitar os termos de uso.');
      return;
    }
    // Mock registration logic
    console.log({ fullName, email, phone, password, termsAccepted });
    alert('Conta criada com sucesso! (simulado)');
    navigate(RoutePaths.LOGIN);
  };

  return (
    <AuthPageLayout pageTitle="Criar Conta com E-mail">
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <FormField
          id="fullName"
          type="text"
          placeholder="Nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <FormField
          id="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div>
          <FormField
            id="phone"
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className="text-xs text-violet-200 mt-1 ml-1">Opcional. Usado para contato e recuperação de conta.</p>
        </div>
        <FormField
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Checkbox
          id="terms"
          label="Aceito os termos de uso."
          checked={termsAccepted}
          onChange={setTermsAccepted}
        />
        <button
          type="submit"
          className="w-full py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-violet-700 disabled:opacity-50"
          disabled={!termsAccepted}
        >
          Criar conta
        </button>
      </form>
       <button
          onClick={() => navigate(RoutePaths.REGISTER_OPTIONS)}
          className="mt-6 text-sm text-violet-200 hover:text-yellow-300 w-full text-center"
        >
          Voltar para opções de cadastro
        </button>
    </AuthPageLayout>
  );
};