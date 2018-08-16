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
        const script = document.createElement("script");
        script.innerHTML = `
        
        var circs = document.getElementsByClassName("ci");
        document.addEventListener("click", function(event){
            var target = event.target || event.srcElement
            console.log(target);
            console.log(target.tagName);

            if (target.tagName == "use") {
                var useID = target.getAttribute("id").slice(8);
                useID = parseInt(useID);
                circleID = (useID - 1).toString();
                circleID = "SvgjsCircle" + circleID;
                console.log(useID, circleID)
                var circle = document.getElementById(circleID);
                circle.setAttribute("fill", "#ffff00");
            }
        })
        
        `;
        script.async = true;
        document.body.appendChild(script);
        
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
                {/* <Row>
                    <Col xs={12} md={8}>
                        <Button bsStyle="primary">CREATE NEW MAP</Button>
                    </Col>
                </Row> */}
                <Row>
                    <Col xs={12}>
                        <div>
                            <h2>Applet View</h2>
                            <p>Instructions:</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="placeSVGHere" dangerouslySetInnerHTML={this.embedSVG(this.state.svg)}></div>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Main;