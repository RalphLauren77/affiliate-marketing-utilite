import React from 'react';
import {CustomTable} from "../../components";
import {useAppSelector} from "../../store/hooks";

const AutoPage = () => {
    const data = useAppSelector(state => state.info.all)
    const autoPageData = data.filter(el => el.category === 'auto')

    return (
        <CustomTable data={autoPageData}/>
    );
};

export default AutoPage;
