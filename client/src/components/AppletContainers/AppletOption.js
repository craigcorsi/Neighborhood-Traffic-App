import React from 'react';
import "./AppletOption.css";

export class AppletOption extends React.Component {
    state = {
        mapName: this.props.mapName,
        mapData: this.props.mapData,
    }

    loadApplet() {
        let name = this.state.mapName;
        console.log(name);
    }

    render() {
        return (
            <div className='container'>
                <div className="databaseApplet">
                    <p>Applet name: {this.state.mapName}</p>
                    <button className="databaseAppletButton" onClick={this.loadApplet}>Load This Applet</button>
                </div>
            </div>
        );
    }
};
