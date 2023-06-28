import React from 'react';
import './RegisteredList.css';
import { useSelector, useDispatch } from 'react-redux';
import { cancelRegisterCourse } from '../../features/coursesSlice';

export default function RegisteredList() {
    const courses = useSelector((state) => state.courses.value);
    const loggedUser = useSelector((state) => state.user.loggedUser);
    const dispatch = useDispatch();
    const studentId = loggedUser.userId;
    const registered = courses.filter((course) =>
        course.studentId.includes(studentId),
    );
    const listCourses = registered.map((course) => (
        <tr>
            <td>{course.title}</td>
            <td>{course.major}</td>
            <td>{course.credit}</td>
            <td onClick={() => console.log(course.studentId)}>목록 보기</td>
            <td
                onClick={() =>
                    dispatch(
                        cancelRegisterCourse({
                            id: course.courseId,
                            studentId,
                        }),
                    )
                }
            >
                취소
            </td>
        </tr>
    ));

    return (
        <div>
            <table className="reg-course" border={1}>
                <th className="title-column">과목</th>
                <th className="major-column">전공</th>
                <th className="credit-column">학점</th>
                <th className="register-list-column">수강자</th>
                <th className="registration-column">수강취소</th>
                {listCourses}
            </table>
        </div>
    );
}
