import React from 'react';
import "./Main.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

import API from "../../../utils/API";

// const drawEngine = require("../../../graphics/drawGraph.js");

class Main extends React.Component {
    state = {
        mapId: this.props.match.params.mapId,
        mapData: "",
        parser: new DOMParser(),
        svg: ""
    }

    // {this.state.parser.parseFromString(this.state.svg, "image/svg+xml")}

    componentDidMount() {
        if (this.state.mapId) {
            const applet = this.draw(this.state.mapId, function (svg) {
                this.setState({
                    svg: svg
                });
            }.bind(this));
        }
    }

    embedSVG (svg) {
        return {
            __html: svg
        }
    }

    draw = (id, cb) => {
        API.getAppletById(id).then(function (response) {

            console.log(response.data);
            var svg = response.data;
            cb(svg);

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
                        <div dangerouslySetInnerHTML={this.embedSVG(this.state.svg)}></div>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Main;