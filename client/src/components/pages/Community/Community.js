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
                        This community page will be dynamically populated with all maps in the database!
                        {this.state.applets.map(function (datum, i) {
                            console.log(this);
                            return <AppletOption
                                mapName={datum.mapName}
                                mapData={datum.applet_data}
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