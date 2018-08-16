import React from 'react';
import "./AppletOption.css";

export class AppletOption extends React.Component {
    state = {
        description: this.props.mapDescription,
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
                    <p>{this.state.description}</p>
                    
                    <form action={this.state.urlRedirect}>
                        <button className={"databaseAppletButton"} >
                            Load This Map
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};
