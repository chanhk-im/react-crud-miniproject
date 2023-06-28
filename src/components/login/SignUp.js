import React from 'react';
import './SignUp.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/userSlice';

export default function SignUp() {
    const dispatch = useDispatch();

    return (
        <div className="login-page">
            <div className="login-frame">
                <div className="login-contents">
                    <div className="login-header">
                        <h2>회원가입</h2>
                    </div>
                    <form
                        onSubmit={(event) => {
                            const studOrProf =
                                event.target.studOrProf.value === '0' ? 0 : 1;
                            const loginInfo = {
                                userId: event.target.userId.value,
                                passwd: event.target.passwd.value,
                                userName: event.target.userName.value,
                                studOrProf,
                            };
                            dispatch(addUser(loginInfo));
                        }}
                    >
                        <div className="login-form">
                            <div className="input-form">
                                <input
                                    type="text"
                                    name="userId"
                                    placeholder="아이디"
                                    className="login-input"
                                />
                            </div>
                            <div className="input-form">
                                <input
                                    type="password"
                                    name="passwd"
                                    placeholder="비밀번호"
                                    className="login-input"
                                />
                            </div>
                            <div className="input-form">
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="이름"
                                    className="login-input"
                                />
                            </div>
                            <div className="radio-form">
                                <input
                                    type="radio"
                                    name="studOrProf"
                                    value="0"
                                    checked
                                />
                                학생
                                <input
                                    type="radio"
                                    name="studOrProf"
                                    value="1"
                                />
                                교수
                            </div>
                            <div className="login-signup">
                                <input
                                    className="button"
                                    type="submit"
                                    value="가입하기"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
