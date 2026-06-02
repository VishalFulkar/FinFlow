import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMe } from './redux/features/authSlice';
import { fetchTransactions } from './redux/features/financeSlice';

import Homepage from './pages/Homepage';
import Statistics from './pages/Statistics';
import TransactionSection from './pages/TransactionSection';
import Login from './pages/Login';
import Register from './pages/Register';

// ── Loading Screen Component ────────────────────────────────────────────────
const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4 text-center px-4 font-sans">
      <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      <div className="space-y-1">
        <h3 className="text-white font-bold text-base tracking-wide">Connecting to FinFlow...</h3>
        <p className="text-slate-400 text-xs max-w-xs leading-relaxed animate-pulse">
          Waking up our backend server on Render. This may take up to a minute on the first load. Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

// ── Protected Route wrapper ──────────────────────────────────────────────────
const ProtectedRoute = ({ children }) => {
  const { user, initialized } = useSelector(state => state.auth);

  if (!initialized) {
    return <LoadingScreen />;
  }

  return user ? children : <Navigate to="/login" replace />;
};

// ── Auth Route wrapper (redirect to / if already logged in) ──────────────────
const AuthRoute = ({ children }) => {
  const { user, initialized } = useSelector(state => state.auth);
  if (!initialized) {
    return <LoadingScreen />;
  }
  return user ? <Navigate to="/" replace /> : children;
};

// ── App ───────────────────────────────────────────────────────────────────────
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  // Restore session from cookie on every page load
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  // Fetch transactions whenever user logs in
  useEffect(() => {
    if (user) {
      dispatch(fetchTransactions());
    }
  }, [user, dispatch]);

  return (
    <div>
      <Routes>
        {/* Auth pages */}
        <Route path="/login"    element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />

        {/* Protected pages */}
        <Route path="/"            element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
        <Route path="/statistics"  element={<ProtectedRoute><Statistics /></ProtectedRoute>} />
        <Route path="/transaction" element={<ProtectedRoute><TransactionSection /></ProtectedRoute>} />
      </Routes>
    </div>
  );
};

export default App;
