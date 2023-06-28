import React from 'react';
import './CreateCourse.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse } from '../../features/coursesSlice';

export default function CreateCourse() {
    const idCount = useSelector((state) => state.courses.idCount);
    const dispatch = useDispatch();

    return (
        <div>
            <article className="create-course">
                <h2>신규 강의 개설하기</h2>
                <form
                    onSubmit={(event) => {
                        const newCourse = {
                            title: event.target.title.value,
                            major: event.target.major.value,
                            professor: event.target.professor.value,
                            credit: event.target.credit.value,
                            courseId: idCount,
                            studentId: [],
                        };

                        dispatch(addCourse(newCourse));
                    }}
                >
                    <div className="course-form">
                        <div className="input-form">
                            <p>강의 과목</p>
                            <p>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="강의 과목"
                                    className="course-input"
                                />
                            </p>
                        </div>

                        <div className="input-form">
                            <p>전공</p>
                            <p>
                                <input
                                    type="text"
                                    name="major"
                                    placeholder="전공"
                                    className="course-input"
                                />
                            </p>
                        </div>
                        <div className="input-form">
                            <p>교수명</p>
                            <p>
                                <input
                                    type="text"
                                    name="professor"
                                    placeholder="교수명"
                                    className="course-input"
                                />
                            </p>
                        </div>
                        <div className="number-form">
                            <p>학점</p>
                            <p>
                                <input
                                    type="number"
                                    name="credit"
                                    placeholder="학점"
                                    className="course-input"
                                />
                            </p>
                        </div>
                        <p>
                            <input type="submit" value="작성 완료" />
                        </p>
                    </div>
                </form>
            </article>
        </div>
    );
}
