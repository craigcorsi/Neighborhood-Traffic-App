import React from 'react';
import "./About.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <p>Some text where we describe the app and our process</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default About;