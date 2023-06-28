import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import persistStore from 'redux-persist/es/persistStore';
import coursesReducer from '../features/coursesSlice';
import userReducer from '../features/userSlice';

const persistConfig = {
    key: 'root',
    storage,
};
const reducers = combineReducers({
    courses: coursesReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
