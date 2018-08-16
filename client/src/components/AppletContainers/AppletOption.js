import React from 'react';
import "./AppletOption.css";

export class AppletOption extends React.Component {
    state = {
        mapData: this.props.mapData,
        mapId: this.props.mapId,
        mapName: this.props.mapName,
        urlRedirect: `/main/${this.props.mapId}`
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
                    
                    <form action={this.state.urlRedirect}>
                        <button className={"databaseAppletButton"} >
                            Load This Applet
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};
