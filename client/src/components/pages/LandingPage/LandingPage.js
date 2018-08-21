import React from 'react';
import "./LandingPage.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class LandingPage extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <div className='container'>
                        <h2>Welcome!</h2>
                        <div className="heroText">
                            <p>
                                Welcome to the Sandpile-Up Neighborhood Traffic App demo!
                            </p>
                            <p>
                                This app uses a mathematical model to simulate foot traffic in city neighborhoods. For more 
                                information, click "About" above!
                            </p>
                        </div>
                    </div>
                </Row>
            </Grid>
        );
    }
};

export default LandingPage;