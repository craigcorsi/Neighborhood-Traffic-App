import React from 'react';
import "./Community.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';
import { AppletOption } from '../../AppletContainers';

import API from "../../../utils/API";

class Community extends React.Component {
    state = {

    }

    render() {
        return (
            <Grid>
                <Row>
                    <div className='container' id="info-about-you">
                        <h2>
                            Your stats
                        </h2>
                        <ul>
                            <li>
                                You are: cool
                            </li>
                            <li>
                                You are currently visiting: this page
                            </li>
                            <li>
                                The day is: today
                            </li>
                        </ul>
                    </div>
                    <div id="create-new-map">
                        <h3>
                            Create New Traffic Map
                        </h3>
                        <div></div>
                    </div>
                </Row>
            </Grid>
        );
    }
};

export default Community;