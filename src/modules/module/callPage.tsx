import React from "react";
import {CustomTable} from "../../components";
import {useAppSelector} from "../../store/hooks";


const CallPage = () => {
    const data = useAppSelector(state => state.info.all)
    const callPageData = data.filter(el => el.category === 'call')

    return (
        <CustomTable data={callPageData}/>
    );
};
export default CallPage
