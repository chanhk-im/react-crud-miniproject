import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header>
            <Link className="header-text" to="/">
                수강신청 서비스
            </Link>
        </header>
    );
}
