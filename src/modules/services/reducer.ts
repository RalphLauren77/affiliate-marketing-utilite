import {createReducer} from '@reduxjs/toolkit';
import {
    loadDataThunk, uploadDataThunk
} from './actions';
import {Data} from '../../typedef';

interface State {
    all: Data[];
}

const defaultState: State = {
    all: []
};

export const info = createReducer(defaultState, builder =>
    builder
        .addCase(loadDataThunk.fulfilled, (state, {payload}) => {
            state.all = payload;
        })
        .addCase(uploadDataThunk.fulfilled, (state, {payload}) => {
            state.all = [...state.all, payload]
        })
);
