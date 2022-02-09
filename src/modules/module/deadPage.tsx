import React from 'react';
import {CustomTable} from "../../components";
import {useAppSelector} from "../../store/hooks";

const DeadPage = () => {
    const data = useAppSelector(state => state.info.all)
    console.log(data);
    const deadPageData = data.filter(el => el.category === 'dead')


    return (
        <CustomTable data={deadPageData}/>
    );
};

export default DeadPage;
