import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/main/NavBar';
import Registration from '../components/main/Registration';
import CourseList from '../components/main/CourseList';
import CreateCourse from '../components/main/CreateCourse';
import RegisteredList from '../components/main/RegisteredList';
import './MainPage.css';

export default function MainPage() {
    return (
        <div className="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Registration />} />
                    <Route
                        path="/registered-list"
                        element={<RegisteredList />}
                    />
                    <Route path="/course-list" element={<CourseList />} />
                    <Route path="/create-course" element={<CreateCourse />} />
                </Routes>
            </main>
        </div>
    );
}
