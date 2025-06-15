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
import PageLoader from './components/PageLoader'
import useAuthUser from './hooks/useAuthUser'

const App = () => {

  const {isLoading, authUser} = useAuthUser();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded

  if(isLoading) return <PageLoader />


  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <HomePage />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? <SignupPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage/> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />}
        />
        <Route
          path="/notifications"
          element={
            isAuthenticated ? <NotificationsPage /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/call/:id"
          element={isAuthenticated ? <CallPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/chat/:id"
          element={isAuthenticated ? <Chatpage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnboardingPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Toaster />
    </div>
  );

}

export default App