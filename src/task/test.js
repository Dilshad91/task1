import React, { Component } from 'react';
import { Button, Modal, Container, Row, Col, Form, Table } from 'react-bootstrap'
import { MDBInput } from "mdbreact";

class MyVerticallyCenteredModal extends Component {
    constructor() {
        super();
        this.state = { list: null }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("http://localhost:3000/select_rate_type").then((response) => {
            response.json().then((result) => {
                // console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Add Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className="form-group" controlId="exampleForm.ControlSelect1">
                                <MDBInput label="Medium input" />
                                    {/* <Form.Label>Sanitizing & Disinfecting</Form.Label> */}
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
            
                                    <Form.Label>Select Rate type</Form.Label>
                                    <Form.Control placeholder="Search" /><br></br>
                                    <Form.Group controlId="formBasicCheckbox">
                                        {
                                            this.state.list ?
                                                <div>
                                                    {this.state.list.map((item, i) => <div>
                                                        <Form.Check type="checkbox" label={item.type} /><br></br>
                                                    </div>)}
                                                </div> : null
                                        }
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Carpet and drapery steam cleaning|Price:0.80</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>

                                
                                    <Form.Label>Select Rate type</Form.Label><br></br><br></br>
                                    <Form.Group>
                                        {
                                            this.state.list ?
                                                <div>
                                                    {this.state.list.map((item, i) => <div>
                                                        $1{item.id}<br></br><br></br>
                                                    </div>)}
                                                </div> : null
                                        }
                                
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                    <Form.Control placeholder="Experience (year)*" /><br></br>
                                
                            </Form>
                            <h6>Select Service Location</h6>
                            <Form.Check type="checkbox" label="Customer"/><br></br>
                            <Form.Check type="checkbox" label="Service location"/><br></br>
                            <h6>Licence required Madatory</h6>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>CANCEL</Button>
                    <Button onClick={this.props.onHide}>START FREE TRIAL</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function Example() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container>
            <Button variant="primary" onClick={() => setModalShow(true)}>Launch vertically centered modal</Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
    );
}

export default Example;