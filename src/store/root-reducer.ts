import {combineReducers} from '@reduxjs/toolkit';
import {info} from '../modules/services/reducer';

export const rootReducer = combineReducers({
    info,
});
