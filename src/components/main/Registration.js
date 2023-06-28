import React from 'react';
import './Registration.css';
import { useSelector, useDispatch } from 'react-redux';
import { registerCourse } from '../../features/coursesSlice';

export default function Registration() {
    const courses = useSelector((state) => state.courses.value);
    const loggedUser = useSelector((state) => state.user.loggedUser);
    const dispatch = useDispatch();

    const listCourses = courses.map((course, index) => (
        <tr>
            <td>{course.title}</td>
            <td>{course.major}</td>
            <td>{course.credit}</td>
            <td>{course.professor}</td>
            <td onClick={() => console.log(course.studentId)}>목록 보기</td>
            <td
                onClick={() => {
                    if (loggedUser.studOrProf === 0) {
                        dispatch(
                            registerCourse({ index, id: loggedUser.userId }),
                        );
                    }
                }}
            >
                신청
            </td>
        </tr>
    ));

    return (
        <div>
            <table className="reg-course" border={1}>
                <th className="title-column">과목</th>
                <th className="major-column">전공</th>
                <th className="credit-column">학점</th>
                <th className="professor-column">교수명</th>
                <th className="register-list-column">수강자</th>
                <th className="registration-column">수강신청</th>
                {listCourses}
            </table>
        </div>
    );
}
