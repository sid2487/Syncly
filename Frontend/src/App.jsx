import React from 'react'
import { Navigate, Routes, Route } from "react-router"
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import NotificationsPage from './pages/NotificationsPage'
import CallPage from './pages/CallPage'
import Chatpage from './pages/ChatPage'
import OnboardingPage from './pages/OnboardingPage';

import  { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/call/:id" element={<CallPage />} />
        <Route path="/chat/:id" element={<Chatpage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </div>
  );

}

export default App