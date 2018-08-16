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
        
        var rectID, placeholderStorageForActiveNode;
        document.addEventListener("click", function(event){
            var target = event.target || event.srcElement

            // When a node is clicked, remove outline from the previous clicked node
            if (placeholderStorageForActiveNode && target.tagName == "use") {
                var rect = document.getElementById(rectID);
                rect.setAttribute("style", "stroke-width:0px");
            }

            // When a node is clicked, outline the target in black
            if (target.tagName == "use") {
                var useID = target.getAttribute("id").slice(8);
                useID = parseInt(useID);
                rectID = (useID - 1).toString();
                rectID = "SvgjsRect" + rectID;
                
                // store the html ID of the clicked square
                placeholderStorageForActiveNode = rectID.slice();


                var rect = document.getElementById(rectID);
                rect.setAttribute("style", "stroke:black;stroke-width;3px");
                // rect.setAttribute("fill", "#ffff00");
            }
        })
        
        `;
        script.async = true;
        document.body.appendChild(script);

        if (this.state.mapId) {
            const applet = this.draw(this.state.mapId, function (data) {
                this.setState({
                    svg: data.svg
                });

                window.currentNetwork = data.data;
                window.currentImage = data.svg;

            }.bind(this));
        }
    }

    addPersonAtSelectedVertex() {
        console.log(1);
    }

    embedSVG(svg) {
        return {
            __html: svg
        }
    }

    draw = (id, cb) => {
        API.getAppletById(id).then(function (response) {
            cb(response.data);
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return (
            <Grid>
                {/* <Row>
                    <Col xs={12} md={8}>
                        <Button bsStyle="primary">CREATE NEW MAP</Button>
                    </Col>
                </Row> */}
                <Row>
                    <Col xs={12}>
                        <div className="appletInstructions">
                        <h2>Map Instructions</h2>
                            <p>
                                This map has been populated with a population of size proportional to the number 
                                of nodes. Bluer nodes contain fewer people while grayer / browner nodes contain more.
                                Click a node to select it, then click "Add Person" to increase the population there. 
                            </p>
                                
                            <p>
                                A node becomes red once it has as many people as the number of neighboring nodes, or more.
                                Selecting a red node then clicking "De-Congest" will move one person at the node to each of the
                                neighbors.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="appletConsole">
                            <div className="placeSVGHere" dangerouslySetInnerHTML={this.embedSVG(this.state.svg)}></div>

                            <div className="appletControls">
                                <p>Total number of people: <span id="totalNumberOfInhabitants">0</span></p><br /><br />
                                <p>Coordinates of selected vertex: <span id="coordinatesOfSelected">None</span></p>
                                <p>Number of people at selected vertex: <span id="NumberAtSelected">None</span></p>
                                <FormGroup>
                                    <ButtonGroup>
                                        <Button onClick={this.addPersonAtSelectedVertex}>Add Person</Button>
                                        <Button onClick={this.addPersonAtSelectedVertex}>De-Congest</Button>
                                    </ButtonGroup>
                                </FormGroup>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
            // <FormGroup>
            //     <ButtonGroup>
            //         <Button bsStyle="primary"><Glyphicon glyph="star align-right" />Save</Button>
            //         <Button><Glyphicon glyph="pencil" />Edit</Button>
            //         <Button bsStyle="danger"><Glyphicon glyph="trash" />Delete</Button>
            //     </ButtonGroup>
            // </FormGroup>
        );
    }
};

export default Main;