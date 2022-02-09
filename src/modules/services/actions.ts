import {createAsyncThunk} from '@reduxjs/toolkit';
import {Data} from '../../typedef';
import axios from 'axios';

export const loadDataThunk = createAsyncThunk<Data[]>('data/load', async () => {
    const {data} = await axios.get('https://api-amu.herokuapp.com/data');
    return data.data;
});

export const uploadDataThunk = createAsyncThunk('data/upload', async (number: string) => {
    const {data} = await axios.post('https://api-amu.herokuapp.com/data', {number: number});
    return data;
});

export const updateDataThunk = createAsyncThunk(
    'data/update',
    async ({dataId, category}: { dataId: string, category: string }) => {
        const {data} = await axios.put(
            `https://api-amu.herokuapp.com/data/${dataId}`, {category: category}
        );
        return data;
    },
);

export const deleteDataThunk = createAsyncThunk(
    'data/delete',
    async (dataId: string | undefined) => {
        const {data} = await axios.delete(`https://api-amu.herokuapp.com/data/${dataId}`);
        return data;
    },
);
