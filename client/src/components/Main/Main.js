import React from 'react';
import "./Main.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';

class Main extends React.Component {
    render () {
        return (
            <Grid>
                <Row>
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
                </Row>
                <br></br>
                <Row>
                    <div className='container'>
                        <Media>
                            <Media.Left align="middle">
                                <img src="https://briffly.com/wp-content/uploads/Google-Maps.jpg" alt="placeholder" />
                            </Media.Left>
                        </Media>
                    </div>
                </Row>
            </Grid>
        );
    }
};

export default Main;