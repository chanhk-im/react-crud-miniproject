import React from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../features/userSlice';

export default function Login() {
    const navigate = useNavigate();
    const userList = useSelector((state) => state.user.userList);
    const dispatch = useDispatch();

    return (
        <div className="login-page">
            <div className="login-frame">
                <div className="login-contents">
                    <div className="login-header">
                        <h2>로그인</h2>
                    </div>
                    <form
                        onSubmit={(event) => {
                            console.log(event.target.id.value);
                            const index = userList.findIndex(
                                (e) => e.userId === event.target.id.value,
                            );
                            if (
                                index !== -1 &&
                                event.target.passwd.value ===
                                    userList[index].passwd
                            ) {
                                dispatch(loginUser(userList[index]));
                                navigate('/main');
                            } else {
                                alert('틀렸지롱구리');
                            }
                        }}
                    >
                        <div className="login-form">
                            <div className="input-form">
                                <input
                                    type="text"
                                    name="id"
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
                            <div className="login-signup">
                                <Link to="/signup" className="signup">
                                    회원가입
                                </Link>
                                <input
                                    className="button"
                                    type="submit"
                                    value="로그인"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
