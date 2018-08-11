import React from 'react';
import "./Main.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Button bsStyle="primary">CREATE NEW MAP</Button>
                </Row>
                <br /><br />
                {/* <Row>
                    <Col xs={12} md={8}>
                        <FormGroup>
                            <ButtonGroup>
                                <Button bsStyle="primary"><Glyphicon glyph="star align-right" />Save</Button>
                                <Button><Glyphicon glyph="pencil" />Edit</Button>
                                <Button bsStyle="danger"><Glyphicon glyph="trash" />Delete</Button>
                            </ButtonGroup>
                        </FormGroup>
                    </Col>
                    <Col xs={6} md={4}>
                        <InputGroup>
                            <FormControl type="text" placeholder="Enter number between 1 and 100,000" />
                            <InputGroup.Addon>Populate</InputGroup.Addon>
                        </InputGroup>
                    </Col>
                </Row> */}
                <br></br>
                <Row>
                    <Col xs={12} md={8}>
                        <div>
                            This section will be dynamically populated with maps the user has saved.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <div>
                            This section will be dynamically populated gif files the user has saved, 
                            if we have time to implement it...
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Main;