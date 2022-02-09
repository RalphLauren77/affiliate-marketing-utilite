import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useAppDispatch} from "../../store/hooks";
import {uploadDataThunk} from "../services/actions";


const UploadPage = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>('');

    const handleSubmit = (event: React.BaseSyntheticEvent) => {
        event.preventDefault()
        dispatch(uploadDataThunk(value))
        setValue('')
    }

    const handleChange = (event: React.BaseSyntheticEvent) => {
        setValue(event.target.value)
    }

    return (
        <Container className="main">
            <Form onSubmit={handleSubmit}>
                <Row className="align-items-center">
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Enter number (q-ty: {value.length})</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleChange} value={value}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default UploadPage
