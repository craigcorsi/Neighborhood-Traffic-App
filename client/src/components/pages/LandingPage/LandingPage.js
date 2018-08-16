import React from 'react';
import "./LandingPage.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class LandingPage extends React.Component {
    render() {
        return (
            <Grid>
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
                    <div className='container'>
                        <h2>Welcome!</h2>
                        <div className="heroText">
                            <p>
                                Welcome to the Sandpile-Up Neighborhood Traffic App demo! Start by clicking
                                "Community" above to get a list of maps for which we've created applets.
                                These applets use a mathematical model to simulate foot traffic. For more 
                                information about this model, click "About" above!
                            </p>
                        </div>
                    </div>
                </Row>
            </Grid>
        );
    }
};

export default LandingPage;