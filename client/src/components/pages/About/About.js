import React from 'react';
import "./About.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div class="about-this-project">
                            <h2>About This Project</h2>
                        
                            <h3>The Abelian Sandpile Model</h3>
                            <p>
                                The sandpile model (proposed by Bak, Tang, and Wiesenfeld circa 1987) is a simple
                                N-by-N grid, where each grid cell (box) can have 0 to 3 sand particles. At each iteration,
                                a single grain of sand (particle) is added to the system by dropping it on a random cell
                                in the sandpile table. Once a box stockpiles 4 particles of sand, the grains are then
                                distributed (toppled over) to the neighboring cells, with each neighbor gaining a grain
                                of sand. This toppling over of grains from one cell to the neighboring cells can lead the
                                entire system to "criticality" causing "avalanches" (this can be thought of as a series of
                                topples that occurs every time a box collects four grains of sand) resulting in some grains
                                leaving the system when the toppling over happens at the grid's edge (boundary). With the
                                same internal mechanism (dropping of a grain of sand) governing the sandpile, the resulting
                                avalanche sizes can have varying largeness.
                            </p>

                            <p>
                                The end state of the abelian sandpile does not depend on the order in which you carry out
                                the "topples." That's what makes it "abelian." Addition is abelian; adding 2 then adding 3
                                is the same as adding 3 and then 2. Abelian sandpiles are one of the earliest models to
                                demonstrate self-organized criticality (SOC) -- a mechanism present in complex systems, a
                                property of dynamic systems to organize microscopic behavior to be spatial scale
                                independent. Systems displaying SOC do not require any external tuning of parameters; the
                                system organizes itself into the critical behavior. As result, wherever the system starts,
                                it finds its way to the critical threshold and stays there as long as new sand continues
                                to be added at constant rate.
                            </p>
                            <p>
                                {'\U+03C3'}
                            </p>
                            <h3>Development Team</h3>
                            <ul>
                                <li>
                                    <a href="https://github.com/craigcorsi">Craig</a>
                                </li><li>
                                    <a href="https://github.com/shudson123">Sean</a>
                                </li><li>
                                    <a href="https://github.com/powusu6128"> Philip</a>
                                </li><li>
                                    <a href="https://github.com/tsstace">Stacey</a>
                                </li>
                            </ul>
                            <h3>Additional reading:</h3>
                            <p>
                                <ul classname="reading">
                                    <li> <a href="https://en.wikipedia.org/wiki/Abelian_sandpile_model#Definition"> Definition for the iteration rules on the model </a></li>
                                    <li> <a href="http://nautil.us/issue/23/dominoes/the-amazing-autotuning-sandpile">"The Amazing Autotuning Sandpile," Ellenberg [2015] </a></li>
                                    <li> <a href="http://www.natureincode.com/code/various/sandpile.html">"The Abelian Sandpile Model," Salathe [2015] </a></li>
                                    <li> <a href="http://www.math.cmu.edu/~wes/sand.html"> Gallery of sandpile configurations on various lattices, Pegden [2015] </a></li>
                                </ul>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default About;