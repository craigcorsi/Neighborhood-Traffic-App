import $ from 'jquery';
import React from 'react';
import "./Community.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class Community extends React.Component {
    componentDidMount() {
        $(document).ready(function(event){
            $.ajax();
            $("#place-applets-here").text("test");
        });
    }
    render() {
        return (
            <Grid>
                {/* <Row>
                    <Col xs={12} md={8}>
                        <FormGroup>
                            <ButtonGroup>
                                <Button bsStyle="primary"><Glyphicon glyph="star align-right" />Save</Button>
                                <Button><Glyphicon glyph="pencil" />Edit</Button>
                                <Button bsStyle="danger"><Glyphicon glyph="trash" />Delete</Button>
                            </ButtonGroup>
                        </FormGroup>
                    </Col>
                    <Col xs={6} md={4}>
                        <InputGroup>
                            <FormControl type="text" placeholder="Enter number between 1 and 100,000" />
                            <InputGroup.Addon>Populate</InputGroup.Addon>
                        </InputGroup>
                    </Col>
                </Row> */}
                <br></br>
                <Row>
                    <div className='container' id="place-applets-here">
                        This community page will be dynamically populated with all maps in the database!
                    </div>
                </Row>
            </Grid>
        );
    }
};

export default Community;