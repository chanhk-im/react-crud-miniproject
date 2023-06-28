import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
    const logged = useSelector((state) => state.user.logged);
    const navigate = useNavigate();

    useEffect(() => {
        if (logged) {
            navigate('/main');
        }
    }, []);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/*" element={<LoginPage />} />
                <Route path="/main/*" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;
