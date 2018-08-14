import React from 'react';
import "./Main.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

import API from "../../../utils/API";

// const drawEngine = require("../../../graphics/drawGraph.js");

class Main extends React.Component {
    state = {
        mapId: this.props.match.params.mapId,
        mapData: ""
    }

    componentDidMount() {
        if (this.state.mapId) {
            this.draw(this.state.mapId);
        }
    }

    draw = (id) => {
        API.getAppletById(id).then(function (response) {

            var network = JSON.parse(response.data.applet_data);
            console.log(network);

            // var svg = drawEngine.drawGraph(network, 50);
            // console.log(svg);

        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        console.log(this.state);
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8}>
                        <Button bsStyle="primary">CREATE NEW MAP</Button>
                    </Col>
                </Row>
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
                            This section will be dynamically populated with gif files the user has saved.
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Main;