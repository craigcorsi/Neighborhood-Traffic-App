import React from 'react';
import "./About.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
<<<<<<< HEAD

          <Grid>
            <Row>
                 <Col xs={12} md={8}>
                            <p>Some text where we describe the app and our process</p>
                 </Col>
            </Row>
         </Grid>
            

            
=======
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <p>Some text where we describe the app and our process</p>
                        <p>Additional reading:</p>
                        <p>
                            <ul classname="reading">
                           <li> <a href="http://nautil.us/issue/23/dominoes/the-amazing-autotuning-sandpile">"The Amazing Autotuning Sandpile" Ellenberg [2015] </a></li>
                            </ul> 
                        </p>
                    </Col>
                </Row>
            </Grid>
>>>>>>> c84946430d86479950d74c447014a232988939e7
        );
    }
};

export default About;