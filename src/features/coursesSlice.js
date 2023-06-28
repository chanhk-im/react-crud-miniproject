import { createSlice } from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        value: [
            {
                courseId: 0,
                title: 'Operating System',
                credit: 3,
                major: 'CSEE',
                professor: 'abc',
                studentId: [],
            },
            {
                courseId: 1,
                title: 'Data Structure',
                credit: 3,
                major: 'CSEE',
                professor: 'abc',
                studentId: [],
            },
            {
                courseId: 2,
                title: 'Logic Design',
                credit: 3,
                major: 'CSEE',
                professor: 'abc',
                studentId: [],
            },
        ],
        idCount: 3,
    },
    reducers: {
        addCourse: (state, action) => {
            state.value.push(action.payload);
            // eslint-disable-next-line no-param-reassign
            state.idCount += 1;
        },
        deleteCourse: (state, action) => {
            state.value.splice(action.payload, 1);
        },
        registerCourse: (state, action) => {
            const tmp = state.value[action.payload.index];
            tmp.studentId.push(action.payload.id);
            state.value.splice(action.payload.index, 1, tmp);
        },
        cancelRegisterCourse: (state, action) => {
            const idx = state.value.findIndex(
                (course) => course.courseId === action.payload.id,
            );
            const tmp = state.value[idx];
            const filteredTmp = tmp.studentId.filter(
                (id) => id !== action.payload.studentId,
            );
            tmp.studentId = filteredTmp;
            state.value.splice(idx, 1, tmp);
        },
    },
});

export const { addCourse, deleteCourse, registerCourse, cancelRegisterCourse } =
    coursesSlice.actions;

export default coursesSlice.reducer;
