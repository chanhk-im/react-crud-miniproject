import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <div className="nav-left">
                <Link className="nav-item" to="/main">
                    수강신청
                </Link>
                <Link className="nav-item" to="/main/registered-list">
                    수강내역
                </Link>
                <Link className="nav-item" to="/main/course-list">
                    강의목록
                </Link>
                <Link className="nav-item" to="/main/create-course">
                    강의개설
                </Link>
            </div>

            <Link className="nav-item" to="/">
                Logout
            </Link>
        </nav>
    );
}
