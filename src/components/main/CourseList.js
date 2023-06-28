import React from 'react';
import './CourseList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../../features/coursesSlice';

import './Registration.css';

export default function Registration() {
    const courses = useSelector((state) => state.courses.value);
    const dispatch = useDispatch();

    function onDeleteClick(index) {
        dispatch(deleteCourse(index));
        alert('삭제 완료!');
    }

    const listCourses = courses.map((course, index) => (
        <tr>
            <td>{course.title}</td>
            <td>{course.major}</td>
            <td>{course.credit}</td>
            <td>{course.professor}</td>
            <td onClick={() => console.log(course.studentId)}>목록 보기</td>
            <td onClick={() => onDeleteClick(index)}>취소</td>
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
                <th className="registration-column">개설취소</th>
                {listCourses}
            </table>
        </div>
    );
}
