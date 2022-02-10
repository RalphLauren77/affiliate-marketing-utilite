import React, {useEffect, useState} from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import AllPage from "./module/allPage";
import AutoPage from "./module/autoPage";
import CallPage from "./module/callPage";
import DeadPage from "./module/deadPage";
import UploadPage from "./module/uploadPage";
import {useAppDispatch} from "../store/hooks";
import {deleteDataThunk, loadDataThunk, updateDataThunk} from "./services/actions";


const Layout = () => {
    const dispatch = useAppDispatch()
    const [dataId, setDataId] = useState<string>('');

    const handleChoose = (id: string) => {
        setDataId(id)
    }

    const handleDelete = () => {
        dispatch(deleteDataThunk(dataId))
        dispatch(loadDataThunk())
    }

    const handleChangeCategory = (category: string) => {
        dispatch(updateDataThunk({dataId, category})).then(()=> dispatch(loadDataThunk()))
    }

    useEffect(() => {
        dispatch(loadDataThunk())
    }, [dispatch])

    return (
        <Container>
            <h1>Affiliate Marketing Utilite</h1>
            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="all" title="All">
                    <AllPage
                        handleChoose={handleChoose}
                        handleChangeCategory={handleChangeCategory}
                        handleDelete={handleDelete}
                    />
                </Tab>
                <Tab eventKey="auto" title="Auto">
                    <AutoPage/>
                </Tab>
                <Tab eventKey="call" title="Call">
                    <CallPage/>
                </Tab>
                <Tab eventKey="dead" title="Dead">
                    <DeadPage/>
                </Tab>
                <Tab eventKey="upload" title="Upload">
                    <UploadPage/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Layout;
