import React from 'react';
import "./Community.css";
import { ButtonGroup, Button, FormGroup, InputGroup, FormControl, Grid, Row, Col, Media, Glyphicon } from 'react-bootstrap';
import { AppletOption } from '../../AppletContainers';

import API from "../../../utils/API";

class Community extends React.Component {
    state = {
        applets: []
    }

    componentDidMount() {
        this.getApplets();
    }


    getApplets = () => {
        API.getApplets()
            .then(res => {
                this.setState({
                    applets: res.data
                });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Grid>
                <Row>
                    <div className='container' id="place-applets-here">
                        <h2>
                            Maps
                        </h2>
                        <p>
                            Select from the list below a map you would like to explore!
                        </p>
                        {this.state.applets.map(function (datum, i) {
                            return <AppletOption
                                mapName={datum.mapName}
                                mapData={datum.applet_data}
                                mapDescription={datum.description}
                                mapId={datum._id}
                                key={i}
                            />
                        })}
                    </div>
                </Row>
            </Grid>
        );
    }
};

export default Community;