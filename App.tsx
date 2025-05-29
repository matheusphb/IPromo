
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { OnboardingPage } from './pages/OnboardingPage';
import { RegisterOptionsPage } from './pages/RegisterOptionsPage';
import { EmailRegisterPage } from './pages/EmailRegisterPage';
import { LoginPage } from './pages/LoginPage';
import { PasswordRecoveryPage } from './pages/PasswordRecoveryPage';
import { HomePage } from './pages/HomePage';
import { GoogleRegisterPage } from './pages/GoogleRegisterPage';
import { FacebookRegisterPage } from './pages/FacebookRegisterPage';
import { ProfilePage } from './pages/ProfilePage'; // Import ProfilePage
import { MainLayout } from './components/MainLayout'; // Import MainLayout
import { RoutePaths } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Routes without MainLayout (e.g., auth flow) */}
        <Route path={RoutePaths.ONBOARDING} element={<OnboardingPage />} />
        <Route path={RoutePaths.REGISTER_OPTIONS} element={<RegisterOptionsPage />} />
        <Route path={RoutePaths.REGISTER_EMAIL} element={<EmailRegisterPage />} />
        <Route path={RoutePaths.REGISTER_GOOGLE} element={<GoogleRegisterPage />} />
        <Route path={RoutePaths.REGISTER_FACEBOOK} element={<FacebookRegisterPage />} />
        <Route path={RoutePaths.LOGIN} element={<LoginPage />} />
        <Route path={RoutePaths.RECOVER_PASSWORD} element={<PasswordRecoveryPage />} />

        {/* Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path={RoutePaths.HOME} element={<HomePage />} />
          <Route path={RoutePaths.PROFILE} element={<ProfilePage />} />
          {/* Add other main app routes here that need Header and BottomNav */}
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to={RoutePaths.ONBOARDING} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;