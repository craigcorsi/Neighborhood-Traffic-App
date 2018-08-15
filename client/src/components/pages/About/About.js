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
                        <p>
                        {'\U+03C3'}
                        </p>
                        <p>Additional reading:</p>
                        <p>
                            <ul classname="reading">
                            <li> <a href="https://en.wikipedia.org/wiki/Abelian_sandpile_model#Definition"> Definition for the iteration rules on the model </a></li>
                           <li> <a href="http://nautil.us/issue/23/dominoes/the-amazing-autotuning-sandpile">"The Amazing Autotuning Sandpile," Ellenberg [2015] </a></li>
                           <li> <a href="http://www.natureincode.com/code/various/sandpile.html">"The Abelian Sandpile Model," Salathe [2015] </a></li>
                           <li> <a href="http://www.math.cmu.edu/~wes/sand.html"> Gallery of sandpile configurations on various lattices, Pegden [2015] </a></li>
                            </ul> 
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default About;