import React, {FC} from "react";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {Outlet} from "react-router-dom";

import {CustomTable} from "../../components";
import {useAppSelector} from "../../store/hooks";

type Props = {
    handleChangeCategory: (category: string) => void,
    handleChoose?: (id: string) => void,
    handleDelete?: (event: React.BaseSyntheticEvent) => void
}

const AllPage: FC<Props> = (props: Props) => {
    const data = useAppSelector(state => state.info.all)
    const {handleChangeCategory, handleChoose, handleDelete} = props

    return (
        <Container className="main">
            <Row>
                <Col>
                    <CustomTable data={data} handleChoose={handleChoose}/>
                </Col>
                <Col>
                    <Stack gap={2} className="col-md-5 mx-auto">
                        <Button variant="primary" onClick={() => handleChangeCategory('auto')}>Auto</Button>
                        <Button variant="primary" onClick={() => handleChangeCategory('call')}>Call</Button>
                        <Button variant="primary" onClick={() => handleChangeCategory('dead')}>Dead</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </Stack>
                </Col>
            </Row>
            <Outlet/>
        </Container>
    );
};
export default AllPage
