import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedUser: {
            userId: '',
            passwd: '',
            userName: '',
            studOrProf: 0,
        },
        logged: false,
        userList: [
            {
                userId: 'admin',
                passwd: '1234',
                userName: '밍멩뭉',
                studOrProf: 2,
            },
        ],
    },
    reducers: {
        loginUser: (state, action) => {
            const loginInfo = {
                userId: action.payload.userId,
                passwd: action.payload.passwd,
                userName: action.payload.userName,
                studOrProf: action.payload.studOrProf,
            };
            // eslint-disable-next-line no-param-reassign
            state.loggedUser = loginInfo;
            // eslint-disable-next-line no-param-reassign
            state.logged = true;
        },
        logoutUser: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.logged = false;
        },
        addUser: (state, action) => {
            console.log(action.payload);
            state.userList.push(action.payload);
        },
    },
});

export const { loginUser, addUser } = userSlice.actions;

export default userSlice.reducer;
