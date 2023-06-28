import React from 'react';
import './LoginPage.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';

export default function LoginPage() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}
